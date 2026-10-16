import * as THREE from 'three';
// Chase (spring), cockpit (driver eye), cinematic (auto-cut trackside + drone orbit).
export class CameraRig {
  constructor(camera, world) { this.camera = camera; this.mode = 0; this.names = ['Chase', 'Cockpit', 'Cinematic']; this.world = world; this.pos = new THREE.Vector3(-8, 3, 0); this.look = new THREE.Vector3(); this.cineIdx = 0; this.cineT = 0; this.upS = new THREE.Vector3(0, 1, 0); }
  next() { this.mode = (this.mode + 1) % 3; this.cineT = 99; }
  update(dt, car, model, forceCine = false) {
    const cam = this.camera; const mode = forceCine ? 2 : this.mode;
    const p = car.position, q = car.quaternion;
    const fwd = new THREE.Vector3(1, 0, 0).applyQuaternion(q), up = new THREE.Vector3(0, 1, 0).applyQuaternion(q);
    model.interior.visible = true; model.robot.visible = mode !== 1;
    if (mode === 0) {
      const vel = car.velocity; const sp = vel.length();
      const dir = sp > 3 ? new THREE.Vector3(vel.x, vel.y, vel.z).normalize().lerp(fwd, 0.5).normalize() : fwd.clone();
      this.upS.lerp(up.y < 0.2 ? up : new THREE.Vector3(0, 1, 0), Math.min(1, dt * 1.5)).normalize();
      const dist = 7.5 + Math.min(sp, 80) * 0.03;
      const target = p.clone().addScaledVector(dir, -dist).addScaledVector(this.upS, 2.2);
      if (target.y < 0.6) target.y = 0.6;
      if (this.occluder) { const pivot = p.clone().addScaledVector(up, 2.0); const d = this.occluder(pivot, target); if (d != null) target.copy(pivot).addScaledVector(target.clone().sub(pivot).normalize(), Math.max(0.8, d - 0.4)); }
      this.pos.lerp(target, 1 - Math.exp(-dt * (this.occluder && this._occl ? 20 : 6)));
      this.look.lerp(p.clone().addScaledVector(fwd, 2).addScaledVector(this.upS, 0.6), 1 - Math.exp(-dt * 12));
      cam.position.copy(this.pos); cam.up.copy(this.upS); cam.lookAt(this.look); cam.fov += ((62 + Math.min(sp, 100) * 0.12) - cam.fov) * dt * 3;
    } else if (mode === 1) {
      const eye = model.driverEye.clone(); eye.y -= car.cg; eye.applyQuaternion(q).add(p);
      cam.position.copy(eye); cam.up.copy(up); cam.lookAt(eye.clone().addScaledVector(fwd, 10).addScaledVector(up, -0.6)); cam.fov += (78 - cam.fov) * dt * 4;
    } else {
      this.cineT += dt; const cams = this.world.cinematicCams;
      if (this.cineT > 4.5) { // cut to best spot near the car or orbit drone
        this.cineT = 0; let best = -1, bd = 1e9;
        cams.forEach((c, i) => { const d = c.distanceTo(p); if (d < bd && i !== this.cineIdx) { bd = d; best = i; } });
        this.cineIdx = bd < 70 ? best : -1; this.droneA = Math.random() * 6.28;
      }
      if (this.cineIdx >= 0) { cam.position.copy(cams[this.cineIdx]); const d = cam.position.distanceTo(p); cam.fov += (THREE.MathUtils.clamp(900 / (d + 5), 12, 60) - cam.fov) * dt * 2; }
      else { this.droneA += dt * 0.25; cam.position.set(p.x + Math.cos(this.droneA) * 14, Math.max(p.y + 5, 3), p.z + Math.sin(this.droneA) * 14); cam.fov += (50 - cam.fov) * dt * 2; }
      cam.up.set(0, 1, 0); this.look.lerp(p, 1 - Math.exp(-dt * 8)); cam.lookAt(this.look);
    }
    cam.updateProjectionMatrix();
  }
}
