import * as THREE from 'three';
import { LAYOUT } from './world.js';
import { MPH } from './specs.js';
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const V = new THREE.Vector3();
function axes(body) { const q = new THREE.Quaternion(body.quaternion.x, body.quaternion.y, body.quaternion.z, body.quaternion.w); return { fwd: new THREE.Vector3(1, 0, 0).applyQuaternion(q), up: new THREE.Vector3(0, 1, 0).applyQuaternion(q), right: new THREE.Vector3(0, 0, 1).applyQuaternion(q) }; }
function laneSteer(body, z0) { const { fwd } = axes(body); return clamp(-0.12 * (body.position.z - z0) - 1.6 * fwd.z, -1, 1); }
function speedCtl(inp, vF, target) { const e = target - vF; inp.throttle = clamp(e * 0.25, 0, 1); inp.brake = clamp(-e * 0.3, 0, 1); }
const fmt = t => t == null ? '—' : t.toFixed(3);

class Base {
  constructor(o) { Object.assign(this, o); this.t = 0; }
  ai() { const i = this.vehicle.input; Object.assign(i, { park: 0, throttle: 0, brake: 0, steer: 0, boost: 0, lift: 0, pitch: 0, roll: 0, yaw: 0, handbrake: 0 }); return i; }
}

// ---------------- DRAG STRIP ----------------
export class DragMode extends Base {
  reset() {
    const D = LAYOUT.drag; this.vehicle.reset(D.startX - 1.6, undefined, D.z, 0);
    this.state = 'staged'; this.t = 0; this.res = {}; this.launchT = null; this.topSpeed = 0; this.foul = false;
    this.env.treeLights.forEach(m => m.emissiveIntensity = 0); this.drawBoard();
  }
  get dist() { return this.vehicle.body.position.x + 1.6 - LAYOUT.drag.startX; }
  control(dt) {
    const v = this.vehicle, inp = v.input;
    if (this.autopilot) {
      this.ai(); v.fanMode = 2; v.wingHigh = this.dist < 402 ? true : false;
      if (this.state === 'staged' && this.t > 0.6) this.state = 'countdown', this.t = 0;
      if (this.state === 'run') { if (this.dist < 402.4 + 5) { inp.throttle = 1; inp.boost = v.thrusters.length ? 1 : 0; } else { inp.brake = 0.5; } inp.steer = laneSteer(v.body, LAYOUT.drag.z); }
      if (this.state === 'done') { inp.brake = 0.6; inp.park = v.speed < 1 ? 1 : 0; inp.steer = laneSteer(v.body, LAYOUT.drag.z); }
    } else if (this.state === 'staged' && (inp.throttle > 0 || inp.boost > 0)) { this.state = 'countdown'; this.t = 0; }
    if (this.state === 'staged' || this.state === 'countdown') {
      if (!this.autopilot && this.state === 'countdown' && this.t > 0.3 && v.forwardSpeed > 0.2) this.foul = true;
      inp.park = 1; inp.brake = 1; if (this.state === 'countdown' && !this.autopilot) { /* launch control: hold brake, pre-spool fans */ } inp.throttle = 0; inp.boost = 0; v.fanMode = Math.max(v.fanMode, 1);
    }
  }
  update(dt) {
    this.t += dt; const v = this.vehicle, L = this.env.treeLights;
    if (this.state === 'countdown') {
      const k = Math.floor(this.t / 0.5); L.forEach((m, i) => m.emissiveIntensity = (i < 3 && i < k) || (i === 3 && k >= 3) ? 4 : 0);
      if (this.foul) { L[4].emissiveIntensity = 5; }
      if (k >= 3) { this.state = 'run'; this.t = 0; this.hud.toast(this.foul ? '<span style="color:#f55">RED LIGHT</span>' : '<span style="color:#6f9">GO!</span>', 1); }
    }
    if (this.state === 'run' || this.state === 'done') {
      const sp = v.forwardSpeed; this.topSpeed = Math.max(this.topSpeed, sp);
      if (this.launchT == null && sp > 0.15) this.launchT = this.t;
      const lt = this.launchT == null ? null : this.t - this.launchT; const r = this.res;
      if (r.t60 == null && sp >= 60 * MPH) r.t60 = lt;
      if (r.t100k == null && sp >= 100 / 3.6) r.t100k = lt;
      if (r.t100m == null && sp >= 100 * MPH) r.t100m = lt;
      if (r.t200 == null && sp >= 200 * MPH) r.t200 = lt;
      const d = this.dist;
      for (const [k, m] of [['ft60', 18.288], ['eighth', 201.168], ['quarter', 402.336], ['km', 1000], ['mile', 1609.344]]) if (r[k] == null && d >= m) { r[k] = this.t; if (k === 'quarter') { r.trap = sp; this.state = 'done'; this.hud.toast(`1/4 mile ${this.t.toFixed(3)} s @ ${(sp / MPH).toFixed(1)} mph`, 3); } this.drawBoard(); }
      if (r.t60 != null && !this._t60shown) { this._t60shown = true; this.hud.toast(`0-60 mph: ${r.t60.toFixed(2)} s`, 2); this.drawBoard(); }
    }
  }
  timerInfo() {
    const r = this.res; const lt = this.state === 'run' || this.state === 'done' ? (r.quarter ?? this.t) : 0;
    return { label: this.state === 'staged' ? 'STAGED · press throttle/boost to start tree' : this.state === 'countdown' ? 'WATCH THE TREE' : 'ELAPSED (from green)', value: lt.toFixed(3),
      splits: `<span>0-60 ${fmt(r.t60)}</span><span>60ft ${fmt(r.ft60)}</span><span>1/8 ${fmt(r.eighth)}</span><span>1/4 ${fmt(r.quarter)}</span><span>trap ${r.trap ? (r.trap / MPH).toFixed(1) : '—'}</span>` };
  }
  objective() { const r = this.res; return this.state === 'done' ? `<b>Run complete.</b> 0-60 ${fmt(r.t60)} s · 0-100 km/h ${fmt(r.t100k)} s · 0-100 mph ${fmt(r.t100m)} s · 1/4 ${fmt(r.quarter)} s @ ${(r.trap / MPH).toFixed(1)} mph · top ${(this.topSpeed / MPH).toFixed(1)} mph.<br>Keep going for 1 km / 1 mile / top speed (>230 mph needs ~1.5 km) · <kbd>Enter</kbd> restart` : this.state === 'staged' ? 'Tip: set fan <b>MAX</b> (F) and Track Mode (T) for launch grip; Thrust/Rocket: hold <b>Space</b> for cold-gas boost.' : ''; }
  drawBoard() {
    const { canvas, tex } = this.env.dragBoard; const c = canvas.getContext('2d'); const r = this.res || {};
    c.fillStyle = '#05070a'; c.fillRect(0, 0, 1024, 384); c.fillStyle = '#ffb000'; c.font = 'bold 44px monospace';
    c.fillText(`${this.vehicle.spec.name.toUpperCase()}`, 30, 60);
    const rows = [['0-60 MPH', fmt(r.t60)], ['60 FT', fmt(r.ft60)], ['1/8 MILE', fmt(r.eighth)], ['1/4 MILE', fmt(r.quarter)], ['TRAP MPH', r.trap ? (r.trap / MPH).toFixed(1) : '—']];
    c.font = 'bold 50px monospace'; rows.forEach(([a, b], i) => { c.fillStyle = '#ff5a2a'; c.fillText(a, 30, 120 + i * 54); c.fillStyle = '#fff2c0'; c.fillText(b.padStart(8), 560, 120 + i * 54); });
    tex.needsUpdate = true;
  }
}

// ---------------- EVENT STUNT COURSE ----------------
export class StuntMode extends Base {
  reset() {
    const S = LAYOUT.stuntSpawn; this.vehicle.reset(S.x, undefined, S.z, S.yaw);
    this.phase = 'ramp'; this.score = 0; this.events = []; this.holdT = 0; this.held = false; this.inAir = false; this.t = 0; this.ap = 'approach'; this.apT = 0; this.lastRampT = -9; this.hitLineup = false; this.lineupClear = false; this.vyPrev = 0; this.maxInv = 0;
  }
  respawn() { if (this.phase === 'lineup') this.next(); else { const keep = { score: this.score, events: this.events }; this.reset(); Object.assign(this, keep); } }
  next() { const L = LAYOUT.lineup; this.vehicle.reset(L.spawnX, undefined, L.z, 0); this.phase = 'lineup'; this.ap = 'run'; this.apT = 0; this.hitLineup = false; this.lineupClear = false; this.inAir = false; this.passed = false; }
  add(name, pts) { this.score += pts; this.events.push(`${name} +${pts}`); this.hud.toast(`${name}<br><span style="font-size:24px">+${pts}</span>`, 2.4); }
  onCollide(body, v) { if (this.env.lineupCars.some(c => c.body === body)) { if (!this.hitLineup) this.hud.toast('<span style="color:#f55">Contact with lineup!</span>', 1.5); this.hitLineup = true; } }
  onRamp() { return this.vehicle.wheels.some(w => w.contact && this.env.rampSegments.includes(w.body)); }
  control(dt) {
    if (!this.autopilot) return; const v = this.vehicle, b = v.body, inp = this.ai(); this.apT += dt; const { up, fwd } = axes(b); const vF = v.forwardSpeed;
    v.fanMode = 2; v.assist = true; v.landAssist = true;
    const rocket = v.spec.id === 'rocket';
    switch (this.ap) {
      case 'approach': speedCtl(inp, vF, 9); inp.steer = laneSteer(b, 0); if (this.onRamp() && b.position.y > 0.8) { this.ap = 'climb'; this.apT = 0; } break;
      case 'climb': speedCtl(inp, vF, 5.5); inp.steer = laneSteer(b, 0); if (up.y < -0.97) { this.ap = 'stop'; this.apT = 0; } break;
      case 'stop': inp.park = 1; inp.steer = laneSteer(b, 0); if (Math.abs(vF) < 0.2 && this.apT > 0.5) { this.ap = 'hold'; this.apT = 0; } break;
      case 'hold': inp.park = 1; if (this.apT > 2.8) { this.ap = rocket ? 'exit' : 'descend'; this.apT = 0; } break;
      case 'descend': inp.brake = 0.35; if (up.y > 0.95 && b.position.y < 1) { this.ap = 'end'; } break;
      case 'exit': inp.throttle = 0.7; inp.steer = laneSteer(b, 0); if (v.contacts === 0) { this.ap = 'air'; this.apT = 0; } break;
      case 'air': if (v.contacts >= 3 && this.apT > 0.5) { this.ap = 'settle'; this.apT = 0; } if (this.apT > 6 && v.speed < 0.3) { this.respawnAt('landing'); } break;
      case 'settle': inp.park = 1; if (this.apT > 2.5 && this.phase === 'ramp') { this.next(); } break;
      case 'run': speedCtl(inp, vF, 22); inp.steer = laneSteer(b, LAYOUT.lineup.z); if (rocket && b.position.x > LAYOUT.lineup.x0 - 22) { this.ap = 'hop'; this.apT = 0; } break;
      case 'hop': inp.lift = this.apT < 0.55 ? 1 : 0; inp.boost = this.apT < 0.5 ? 0.3 : 0; if (this.apT > 1 && v.contacts >= 3) { this.ap = 'brake'; this.apT = 0; } break;
      case 'brake': inp.brake = 0.8; inp.park = v.speed < 1 ? 1 : 0; inp.steer = laneSteer(b, LAYOUT.lineup.z); break;
      default: inp.park = 1;
    }
  }
  respawnAt(where) { if (this.phase === 'lineup') { this.next(); this.ap = 'brake'; return; } const z = this.env.landingZone; this.vehicle.reset(z.x - 8, undefined, z.z, 0); this.ap = 'settle'; this.apT = 0; this.hud.toast('Recovered', 1); }
  update(dt) {
    this.t += dt; const v = this.vehicle, b = v.body; const { up } = axes(b);
    // stuck on the roof / side → recovery prompt (auto for autopilot)
    this.stuckT = (((up.y < 0.3 && !this.onRamp()) || v.contacts === 0) && v.speed < 0.4) ? (this.stuckT || 0) + dt : 0;
    if (this.stuckT > 2.5) { if (this.autopilot) this.respawnAt('landing'); else if (!this._stuckToast) { this._stuckToast = true; this.hud.toast('Stuck · press R to recover', 2.5); } } else this._stuckToast = false;
    const onRamp = this.onRamp(); if (onRamp) this.lastRampT = this.t;
    if (onRamp && up.y < -0.85) { this.maxInv = Math.max(this.maxInv, -up.y); if (v.speed < 1.5) { this.holdT += dt; if (this.holdT > 2 && !this.held) { this.held = true; this.add(`Inverted hold (${(v.suctionN / (b.mass * 9.81)).toFixed(2)} g suction)`, 1000); } } }
    else if (!onRamp || up.y > -0.5) this.holdT = 0;
    if (v.contacts === 0) {
      if (!this.inAir) { this.inAir = true; this.airStart = this.t; this.rot = 0; this.maxH = 0; this.fromRamp = this.t - this.lastRampT < 0.4; this.startUpY = up.y; }
      this.rot += b.angularVelocity.length() * dt; this.maxH = Math.max(this.maxH, b.position.y);
      this.vyPrev = b.velocity.y;
    } else if (this.inAir && v.contacts >= 2) {
      const airT = this.t - this.airStart; this.inAir = false;
      if (airT > 0.5) {
        const vy = Math.abs(this.vyPrev);
        if (up.y > 0.8) {
          const halfTurns = Math.floor(this.rot / Math.PI + 0.2);
          const soft = Math.round(Math.max(0, 1 - vy / 7) * 1000);
          this.add(`Landing ${vy.toFixed(1)} m/s · ${airT.toFixed(1)} s air`, 400 + soft);
          if (halfTurns > 0) this.add(`${halfTurns * 180}° rotation`, halfTurns * 600);
          if (this.fromRamp) { const d = Math.hypot(b.position.x - this.env.landingZone.x, b.position.z - this.env.landingZone.z); if (d < 6) this.add(d < 2 ? 'Bullseye landing' : 'Landing zone', d < 2 ? 800 : 300); if (this.phase === 'ramp') this.rampDone = true; }
          if (this.phase === 'lineup' && this.passed && !this.hitLineup) { this.add('Cleared all 5 vehicles', 2000); this.phase = 'done'; this.finish(); }
          else if (this.phase === 'lineup' && this.passed) { this.phase = 'done'; this.finish(); }
        } else { this.hud.toast('<span style="color:#f55">CRASH LANDING</span>', 2); this.events.push('Crash landing +0'); }
      }
    }
    if (this.phase === 'lineup' && b.position.x > this.env.lineupEnd + 0.5 && !this.passed) { this.passed = true; if (v.contacts !== 0) this.hitLineup = true; }
    if (this.phase === 'ramp' && this.rampDone && v.speed < 0.5 && !this.autopilot && !this._prompted) { this._prompted = true; }
  }
  finish() { const s = this.score; this.grade = s > 6500 ? 'S' : s > 5000 ? 'A' : s > 3500 ? 'B' : s > 2000 ? 'C' : 'D'; setTimeout(() => this.hud.toast(`RUN COMPLETE · ${s} pts · grade ${this.grade}`, 5), 2500); }
  timerInfo() { return { label: `SCORE · ${this.phase.toUpperCase()}`, value: `${this.score}`, splits: `<span>t ${this.t.toFixed(1)} s</span><span>${this.inAir ? 'AIR ' + (this.t - this.airStart).toFixed(1) + ' s' : ''}</span><span>${this.holdT > 0 ? 'HOLD ' + this.holdT.toFixed(1) + ' s' : ''}</span>` }; }
  objective() {
    const ev = this.events.slice(-3).join(' · ');
    const rocket = this.vehicle.spec.id === 'rocket';
    if (this.phase === 'ramp') return `<b>Stage 1 · C-ramp:</b> drive up the ramp (fan suction MAX), stop upside-down for 2 s${rocket ? ', then drive off the top, flip upright and hover-land in the ring' : ' (no thrusters: back down carefully)'}. ${this.rampDone || !rocket ? '<kbd>N</kbd> → Stage 2' : ''}<br><small>${ev}</small>`;
    if (this.phase === 'lineup') return `<b>Stage 2 · Lineup jump:</b> build speed, hold <b>Shift</b> (lift thrusters) ~12 m before the cars and clear all five, then land. ${rocket ? '' : '<i>Needs the Rocket variant.</i>'}<br><small>${ev}</small>`;
    return `<b>Run complete · ${this.score} pts · grade ${this.grade}</b><br><small>${this.events.join(' · ')}</small><br><kbd>Enter</kbd> restart`;
  }
}

// ---------------- FREE ROAM ----------------
export class FreeMode extends Base {
  reset() { const F = LAYOUT.freeSpawn; this.vehicle.reset(F.x, undefined, F.z, F.yaw); this.t = 0; this.top = 0; }
  control(dt) {
    if (!this.autopilot) return; const v = this.vehicle, b = v.body, inp = this.ai();
    const c = new THREE.Vector3(180, 0, 120), R = 40; const p = new THREE.Vector3(b.position.x, 0, b.position.z);
    const ang = Math.atan2(p.z - c.z, p.x - c.x) + 0.35; const tgt = new THREE.Vector3(c.x + Math.cos(ang) * R, 0, c.z + Math.sin(ang) * R);
    const { fwd, right } = axes(b); const d = tgt.sub(p); inp.steer = clamp(Math.atan2(d.dot(right), d.dot(fwd)) * 1.5, -1, 1); speedCtl(inp, v.forwardSpeed, 16);
  }
  update(dt) { this.t += dt; this.top = Math.max(this.top, this.vehicle.forwardSpeed); }
  timerInfo() { return { label: 'FREE ROAM · session', value: this.t.toFixed(1), splits: `<span>top ${(this.top / MPH).toFixed(1)} mph</span>` }; }
  objective() { return this.t < 12 ? 'Open test site: C-ramp (center), lineup (north), drag strip (south), skidpad + cone slalom (east). Blue pads refill the air tank.' : ''; }
}
