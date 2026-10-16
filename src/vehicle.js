import * as CANNON from 'cannon-es';
import * as THREE from 'three';
import { G } from './specs.js';
import { GROUP_STATIC, GROUP_DYN, GROUP_CAR, GROUP_RAMP } from './world.js';
import { AXLE_F, AXLE_R } from './carModel.js';

const RHO = 1.2, R_AIR = 287, T_AIR = 293, G0 = 9.80665;
const v3 = () => new CANNON.Vec3();
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

export class Vehicle {
  constructor(world, spec) {
    this.world = world; this.spec = spec;
    const s = spec.suspension; this.Lmax = s.rest; this.cg = spec.cgHeight;
    const tank = spec.tank;
    this.airMaxKg = tank ? tank.fillBar * 1e5 * tank.volumeL / 1000 / (R_AIR * T_AIR) : 0;
    this.airKg = this.airMaxKg;
    this.body = new CANNON.Body({ mass: spec.massDry + this.airKg, collisionFilterGroup: GROUP_CAR, collisionFilterMask: GROUP_STATIC | GROUP_DYN, /* ramp (GROUP_RAMP) is ray-only for the chassis */ angularDamping: 0.02, linearDamping: 0.0 });
    // floor box + cabin box (CG frame)
    this.body.addShape(new CANNON.Box(new CANNON.Vec3(1.9, 0.25, 0.95)), new CANNON.Vec3(0, -this.cg + 0.20 + 0.25, 0));
    this.body.addShape(new CANNON.Box(new CANNON.Vec3(0.85, 0.16, 0.55)), new CANNON.Vec3(-0.1, -this.cg + 0.16 + 0.54 + 0.16, 0));
    this._tireSpheres = true;
    this.body.material = new CANNON.Material({ friction: 0.08, restitution: 0.02 });
    world.addBody(this.body);
    const mTot = this.body.mass;
    this.wheels = [
      { x: AXLE_F, z: spec.trackF / 2, front: true }, { x: AXLE_F, z: -spec.trackF / 2, front: true },
      { x: AXLE_R, z: spec.trackR / 2, front: false }, { x: AXLE_R, z: -spec.trackR / 2, front: false },
    ].map(w => {
      const r = w.front ? spec.wheelRadiusF : spec.wheelRadiusR, k = w.front ? s.kF : s.kR;
      const fF = -AXLE_R / (AXLE_F - AXLE_R); const load = mTot * G * (w.front ? fF : 1 - fF) / 2;
      const x0 = load / k; const mountY = -this.cg + r + this.Lmax - x0;
      return { ...w, r, k, x0, mount: new CANNON.Vec3(w.x, mountY, w.z), comp: x0, prevComp: x0, len: this.Lmax - x0, contact: false, point: v3(), normal: v3(), Fz: 0, Fx: 0, Fy: 0, steer: 0, spin: 0, omega: 0, slip: 0, slipAngle: 0, body: null };
    });
    this.floorY = -this.cg + 0.14;
    // tyre collision spheres at the full-bump wheel position: act as bump stops and let the tyres hit walls/kerbs
    this.body.updateMassProperties();
    this.thrusters = spec.thrusters.map(t => ({ ...t, p: new CANNON.Vec3(t.pos[0], t.pos[1] - this.cg, t.pos[2]), d: new CANNON.Vec3(...t.dir), cmd: 0, level: 0, force: 0 }));
    this.input = { throttle: 0, brake: 0, steer: 0, handbrake: 0, boost: 0, lift: 0, pitch: 0, roll: 0, yaw: 0, park: 0 };
    this.fanMode = 1; // 0 off, 1 auto, 2 max
    this.fan = 0; this.fanCmd = 0; this.suctionN = 0; this.seal = 0;
    this.wingHigh = true; this.trackMode = false; this.assist = true; this.landAssist = spec.id === 'rocket';
    this.gForce = new THREE.Vector3(); this._vPrev = v3(); this.powerKW = 0; this.fanKW = 0; this.motorKW = 0;
    this.contacts = 0; this.airTime = 0; this.energyKWh = spec.battery.kWh; this.thrustTotal = 0; this.refilling = false;
    this._ray = new CANNON.RaycastResult(); this.time = 0;
    this._pre = () => this.step(world.dt ?? 1 / 120);
    world.addEventListener('preStep', this._pre);
  }
  get pressureBar() { const t = this.spec.tank; return t ? this.airKg * R_AIR * T_AIR / (t.volumeL / 1000) / 1e5 : 0; }
  get speed() { return this.body.velocity.length(); }
  get forwardSpeed() { const f = this.body.quaternion.vmult(new CANNON.Vec3(1, 0, 0)); return this.body.velocity.dot(f); }
  dispose() { this.world.removeEventListener('preStep', this._pre); this.world.removeBody(this.body); }

  reset(x, y, z, yaw) {
    const b = this.body; b.position.set(x, y ?? this.cg + 0.02, z); b.quaternion.setFromEuler(0, yaw, 0);
    b.velocity.setZero(); b.angularVelocity.setZero(); b.force.setZero(); b.torque.setZero();
    this.refill(); this.fan = 0; this.thrusters.forEach(t => { t.level = 0; t.cmd = 0; });
    this.wheels.forEach(w => { w.comp = w.x0; w.prevComp = w.x0; w.omega = 0; });
    this._vPrev.setZero(); this.airTime = 0;
  }
  refill() { this.airKg = this.airMaxKg; this.updateMass(); }
  updateMass() { this.body.mass = this.spec.massDry + this.airKg; this.body.updateMassProperties(); }

  step(dt) {
    const b = this.body, spec = this.spec, inp = this.input; this.time += dt;
    const q = b.quaternion;
    const up = q.vmult(new CANNON.Vec3(0, 1, 0)), fwd = q.vmult(new CANNON.Vec3(1, 0, 0)), right = q.vmult(new CANNON.Vec3(0, 0, 1));
    const vel = b.velocity; const vF = vel.dot(fwd); const speed = vel.length();
    const m = b.mass;

    // ----- steering (steer-by-wire: ratio tightens with speed) -----
    const steerTarget = inp.steer * spec.steerMax / (1 + Math.abs(vF) / 22);
    for (const w of this.wheels) if (w.front) {
      const ack = 1 + 0.12 * Math.sign(steerTarget) * Math.sign(w.z); // simple Ackermann
      w.steer += (steerTarget * ack - w.steer) * Math.min(1, dt * 12);
    }

    // ----- suspension raycasts -----
    const susp = spec.suspension; const drop = this.trackMode ? 0.05 : 0;
    let contacts = 0; const nAvg = v3(); let lenSum = 0;
    for (const w of this.wheels) {
      const from = b.pointToWorldFrame(w.mount); const rayLen = this.Lmax + w.r + 0.05;
      const to = from.vadd(up.scale(-rayLen));
      this._ray.reset();
      this.world.raycastClosest(from, to, { collisionFilterMask: GROUP_STATIC | GROUP_DYN | GROUP_RAMP, skipBackfaces: true }, this._ray);
      w.prevComp = w.comp;
      if (this._ray.hasHit && this._ray.distance - w.r <= this.Lmax) {
        w.contact = true; contacts++;
        w.len = Math.max(0, this._ray.distance - w.r);
        w.comp = this.Lmax - w.len; w.point.copy(this._ray.hitPointWorld); w.normal.copy(this._ray.hitNormalWorld); w.body = this._ray.body;
        nAvg.vadd(w.normal, nAvg); lenSum += w.len;
      } else { w.contact = false; w.len = this.Lmax; w.comp = 0; w.Fz = 0; w.body = null; }
    }
    this.contacts = contacts;
    // anti-roll per axle
    const arF = (this.wheels[0].comp - this.wheels[1].comp) * susp.antiRoll, arR = (this.wheels[2].comp - this.wheels[3].comp) * susp.antiRoll;
    for (let i = 0; i < 4; i++) {
      const w = this.wheels[i]; if (!w.contact) continue;
      const effComp = w.comp - drop + (this.trackMode ? 0 : 0);
      const cvel = (w.comp - w.prevComp) / dt;
      let F = w.k * Math.max(effComp, 0) + susp.damp * cvel + (i < 2 ? (i === 0 ? arF : -arF) : (i === 2 ? arR : -arR));
      if (w.comp > this.Lmax - 0.025) F += (w.comp - (this.Lmax - 0.025)) * 900000 + Math.max(0, cvel) * 20000; // bump stop
      w.Fz = Math.max(0, F);
      const rel = w.point.vsub(b.position);
      b.applyForce(up.scale(w.Fz), rel);
    }

    // ----- powertrain + fan power budget -----
    const fanKW = spec.fan.maxPowerKW * this.fan ** 3; this.fanKW = fanKW;
    const motorKWAvail = Math.min(spec.motorPowerKW, spec.battery.peakPowerKW - fanKW);
    let driveF = 0; const thr = inp.throttle, brk = inp.brake;
    if (thr > 0 && vF < spec.vMax) driveF = thr * Math.min(spec.motorForce, motorKWAvail * 1000 / Math.max(Math.abs(vF), 1));
    let reverse = false;
    this._revT = (brk > 0 && Math.abs(vF) < 0.6 && thr === 0 && !inp.park) || (this._revT > 0 && brk > 0 && vF < 0.6 && !inp.park) ? (this._revT || 0) + dt : 0;
    if (this._revT > 0.35) { reverse = true; driveF = vF > -9 ? -brk * spec.motorForce * 0.35 : 0; }
    const brakeF = reverse ? 0 : Math.max(brk, inp.park ? 1 : 0) * 4.2 * m * G; // carbon-ceramic + regen, split 60/40
    this.motorKW = Math.abs(driveF * vF) / 1000;

    // ----- tires -----
    const t = spec.tire; let slipMax = 0;
    for (const w of this.wheels) {
      if (!w.contact || w.Fz <= 0) { w.Fx = w.Fy = 0; w.slip = 0; w.omega *= 0.995; continue; }
      const n = w.normal;
      const cs = Math.cos(w.steer), sn = Math.sin(w.steer);
      const wf = fwd.scale(cs).vadd(right.scale(sn));
      const fp = wf.vsub(n.scale(wf.dot(n))); fp.normalize();
      const sp = fp.cross(n); sp.normalize();
      const rel = w.point.vsub(b.position);
      const vc = vel.vadd(b.angularVelocity.cross(rel));
      const vLong = vc.dot(fp), vLat = vc.dot(sp);
      const alpha = Math.atan2(vLat, Math.max(Math.abs(vLong), 4));
      w.slipAngle = alpha;
      const gripMul = (!w.front && inp.handbrake > 0) ? 0.45 : 1;
      const muLat = t.muLat * gripMul, muLong = t.mu * gripMul;
      const B = 2.07 / t.peakSlipAngle, C = 1.4;
      let Fy = -muLat * w.Fz * Math.sin(C * Math.atan(B * alpha));
      // longitudinal request
      const share = (w.front ? 0.4 : 0.6) / 2;
      let Fx = driveF * share;
      const bShare = (w.front ? 0.6 : 0.4) / 2;
      const massShare = m / 4;
      let brakeReq = brakeF * bShare + (inp.handbrake > 0 && !w.front ? 0.8 * m * G / 2 : 0) + t.rollRes * w.Fz + (thr === 0 && !reverse ? 0.02 * w.Fz : 0);
      if (brakeReq > 0) Fx -= clamp(vLong * massShare / dt, -brakeReq, brakeReq);
      // friction circle
      const maxF = muLong * w.Fz; const req = Math.hypot(Fx / muLong * muLat, Fy);
      const lim = muLat * w.Fz;
      w.slip = 0;
      if (req > lim) { const k = lim / req; w.slip = 1 - k; Fx *= k; Fy *= k; }
      if (Math.abs(Fx) > maxF) { w.slip = Math.max(w.slip, 1 - maxF / Math.abs(Fx)); Fx = Math.sign(Fx) * maxF; }
      w.slip = Math.max(w.slip, clamp((Math.abs(alpha) - t.peakSlipAngle) * 3, 0, 1));
      slipMax = Math.max(slipMax, w.slip);
      w.Fx = Fx; w.Fy = Fy;
      const F = fp.scale(Fx).vadd(sp.scale(Fy));
      b.applyForce(F, rel);
      if (w.body && w.body.mass > 0) w.body.applyForce(F.scale(-1), w.point.vsub(w.body.position));
      w.omega = vLong / w.r * (1 + (driveF > 0 ? w.slip * 0.6 : -w.slip * 0.6));
    }
    this.slipMax = slipMax;
    for (const w of this.wheels) { if (!w.contact) w.omega *= 0.99; w.spin -= w.omega * dt; }

    // ----- aerodynamics (active wing: high-downforce / low-drag) -----
    const a = spec.aero; const CdA = this.wingHigh ? a.CdA_high : a.CdA_low, ClA = this.wingHigh ? a.ClA_high : a.ClA_low;
    if (speed > 0.5) {
      b.applyForce(vel.scale(-0.5 * RHO * CdA * speed));
      const dfN = 0.5 * RHO * ClA * vF * vF;
      b.applyForce(up.scale(-dfN), fwd.scale(-0.15));
      this.downforceN = dfN;
    } else this.downforceN = 0;

    // ----- fan suction (multi-mode, 2 g limit) -----
    let cmd = 0;
    if (this.fanMode === 2) cmd = 1;
    else if (this.fanMode === 1) {
      const inverted = up.y < 0.5; const latDemand = Math.abs(inp.steer) * clamp(speed / 30, 0, 1);
      cmd = clamp(Math.max(inverted ? 1 : 0, up.y < 0.95 ? 0.9 : 0, latDemand * 0.8, (thr + brk) * clamp(speed / 15, 0.35, 1) * 0.8, 0.15), 0, 1);
    }
    if (inp.lift > 0.3) cmd = 0; // suction dump while firing lift thrusters
    this.fanCmd = cmd;
    this.fan += (cmd - this.fan) * Math.min(1, dt / (cmd < this.fan && inp.lift > 0.3 ? 0.08 : spec.fan.spoolTime));
    if (contacts >= 3) {
      const avgLen = lenSum / contacts;
      const w0 = this.wheels[0]; const gap = Math.max(0.02, this.floorY - (w0.mount.y - avgLen - w0.r));
      this.gap = gap;
      this.seal = clamp((spec.fan.sealGap - gap) / (spec.fan.sealGap - spec.fan.sealFull), 0, 1); // flexible skirts keep the seal up to sealFull
      const Fs = Math.min(spec.fan.maxSuctionG * m * G, spec.fan.maxSuctionG * m * G * this.fan * this.fan * this.seal);
      nAvg.normalize(); this.suctionN = Fs;
      b.applyForce(nAvg.scale(-Fs), up.scale(this.floorY));
    } else { this.seal = 0; this.suctionN = 0; this.gap = 1; }

    // ----- cold-gas thrusters -----
    this.updateThrusters(dt, up, contacts);

    // ----- air budget / refill -----
    if (spec.tank) {
      if (contacts >= 3 && speed < 1.0 && this.thrustTotal < 10) this.airKg = Math.min(this.airMaxKg, this.airKg + (this.refilling ? 30 : spec.tank.compressorKgS) * dt);
      this.updateMass();
    }
    // energy
    this.powerKW = this.motorKW + fanKW; this.energyKWh -= this.powerKW * dt / 3600;
    // proper acceleration (accelerometer) in body frame, in g
    const acc = vel.vsub(this._vPrev).scale(1 / dt); this._vPrev.copy(vel); acc.y += G;
    const al = new THREE.Vector3(acc.dot(fwd), acc.dot(up), acc.dot(right)).multiplyScalar(1 / G);
    this.gForce.lerp(al, Math.min(1, dt * 8));
    this.airTime = contacts === 0 ? this.airTime + dt : 0;
  }

  updateThrusters(dt, up, contacts) {
    const b = this.body, inp = this.input, spec = this.spec;
    if (!this.thrusters.length) { this.thrustTotal = 0; return; }
    const tk = spec.tank; const P = this.pressureBar;
    const pf = clamp((P - tk.minBar) / (tk.fullThrustBar - tk.minBar), 0, 1);
    this.pressureFactor = pf;
    // attitude controller (body rates)
    const wB = b.quaternion.conjugate().vmult(b.angularVelocity); // body-frame angular velocity: x roll, y yaw, z pitch
    const airborne = contacts === 0;
    let tq = { x: 0, y: 0, z: 0 };
    let lift = inp.lift;
    if (spec.id === 'rocket') {
      const stick = Math.abs(inp.pitch) + Math.abs(inp.roll) + Math.abs(inp.yaw) > 0.05;
      let des = { x: inp.roll * 5.5, y: -inp.yaw * 2.5, z: -inp.pitch * 4.5 };
      if (airborne && !stick && this.assist) {
        // auto-level: rotate body up toward world up (in body frame)
        const wu = b.quaternion.conjugate().vmult(new CANNON.Vec3(0, 1, 0));
        const ax = new CANNON.Vec3(0, 1, 0).cross(wu); // rotate body +Y toward wu
        const ang = Math.acos(clamp(wu.y, -1, 1)); if (ax.length() < 0.05 && ang > 1) ax.set(Math.sign(wB.x || 1), 0, 0);
        ax.normalize(); const k = Math.min(ang, 1.2) * 4.5;
        des = { x: ax.x * k, y: 0, z: ax.z * k };
      }
      if (airborne || (stick && inp.lift > 0.3)) {
        tq = { x: clamp((des.x - wB.x) * 0.9, -1, 1), y: clamp((des.y - wB.y) * 0.9, -1, 1), z: clamp((des.z - wB.z) * 0.9, -1, 1) };
      }
      // landing assist: altitude-scheduled descent rate (hover-down like the event demo)
      const h = b.position.y - this.cg;
      if (this.landAssist && airborne && up.y > 0.3 && b.velocity.y < -0.5 && h < 16) {
        const vT = -clamp(0.55 * h + 0.8, 1.0, 9);
        const aCmd = 9.81 + 3.0 * (vT - b.velocity.y);
        const maxLift = this.thrusters.filter(t => t.group === 'lift').reduce((a, t) => a + t.max, 0);
        lift = Math.max(lift, clamp(b.mass * aCmd / (maxLift * Math.max(pf, 0.05) * up.y), 0, 1));
      }
    }
    let total = 0, mdot = 0;
    for (const t of this.thrusters) {
      let c = 0;
      if (t.group === 'boost') { c = inp.boost; c += tq.y * Math.sign(t.p.z) * 0.6; }
      else if (t.group === 'lift') { c = lift + tq.x * Math.sign(-t.p.z) + tq.z * Math.sign(t.p.x); }
      else if (t.group === 'side') { c = tq.y * Math.sign(-t.p.x * t.d.z); }
      t.cmd = clamp(c, 0, 1);
      if (this.airKg <= 0.01) t.cmd = 0;
      t.level += (t.cmd - t.level) * Math.min(1, dt / 0.04); // electric valve actuators ~40 ms
      t.force = t.level * t.max * pf; total += t.force; mdot += t.force / (tk.isp * G0);
      if (t.force > 1) b.applyForce(b.quaternion.vmult(t.d).scale(t.force), b.quaternion.vmult(t.p));
    }
    this.thrustTotal = total;
    this.airKg = Math.max(0, this.airKg - mdot * dt);
  }

  getState() {
    const b = this.body;
    return { p: [b.position.x, b.position.y, b.position.z], q: [b.quaternion.x, b.quaternion.y, b.quaternion.z, b.quaternion.w], w: this.wheels.map(w => [w.len, w.steer, w.spin]), t: this.thrusters.map(t => t.level), fan: this.fan, v: this.speed, slip: this.slipMax || 0 };
  }
}
