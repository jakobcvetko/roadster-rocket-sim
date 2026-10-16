// Unified input: keyboard + Gamepad API (standard mapping) + touch overlay.
export class Input {
  constructor() {
    this.keys = new Set(); this.pressed = new Set(); this.touch = { steer: 0, pitch: 0, throttle: 0, brake: 0, boost: 0, lift: 0 }; this.gpPrev = [];
    addEventListener('keydown', e => { if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault(); if (!this.keys.has(e.code)) this.pressed.add(e.code); this.keys.add(e.code); });
    addEventListener('keyup', e => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());
    this.setupTouch();
  }
  setupTouch() {
    const el = document.getElementById('touch'); if (!el) return;
    if (!('ontouchstart' in window) && !navigator.maxTouchPoints) return; el.style.display = 'block';
    const stick = document.getElementById('stick'), knob = document.getElementById('knob'); let sid = null, c = null;
    stick.addEventListener('touchstart', e => { const t = e.changedTouches[0]; sid = t.identifier; const r = stick.getBoundingClientRect(); c = { x: r.left + r.width / 2, y: r.top + r.height / 2, R: r.width / 2 }; e.preventDefault(); }, { passive: false });
    addEventListener('touchmove', e => { for (const t of e.changedTouches) if (t.identifier === sid) { const dx = Math.max(-1, Math.min(1, (t.clientX - c.x) / c.R)), dy = Math.max(-1, Math.min(1, (t.clientY - c.y) / c.R)); this.touch.steer = dx; this.touch.pitch = -dy; knob.style.transform = `translate(${dx * 40}px,${dy * 40}px)`; } }, { passive: false });
    addEventListener('touchend', e => { for (const t of e.changedTouches) if (t.identifier === sid) { sid = null; this.touch.steer = this.touch.pitch = 0; knob.style.transform = ''; } });
    el.querySelectorAll('[data-hold]').forEach(b => { const k = b.dataset.hold; b.addEventListener('touchstart', e => { this.touch[k] = 1; b.classList.add('on'); e.preventDefault(); }, { passive: false }); b.addEventListener('touchend', () => { this.touch[k] = 0; b.classList.remove('on'); }); });
    el.querySelectorAll('[data-tap]').forEach(b => b.addEventListener('touchstart', e => { this.pressed.add(b.dataset.tap); e.preventDefault(); }, { passive: false }));
  }
  k(...codes) { return codes.some(c => this.keys.has(c)) ? 1 : 0; }
  tap(code) { return this.pressed.has(code); }
  read() {
    const s = { throttle: this.k('KeyW', 'ArrowUp'), brake: this.k('KeyS', 'ArrowDown'), steer: this.k('KeyD', 'ArrowRight') - this.k('KeyA', 'ArrowLeft'),
      handbrake: this.k('KeyX'), boost: this.k('Space'), lift: this.k('ShiftLeft', 'ShiftRight'), yaw: this.k('KeyE') - this.k('KeyQ'), pitch: 0, roll: 0, gamepad: false };
    // in the air, W/S pitch and A/D roll (attitude control)
    s.pitch = s.throttle - s.brake; s.roll = s.steer;
    const t = this.touch; s.steer = s.steer || t.steer; s.roll = s.roll || t.steer; s.pitch = s.pitch || t.pitch; s.throttle = Math.max(s.throttle, t.throttle); s.brake = Math.max(s.brake, t.brake); s.boost = Math.max(s.boost, t.boost); s.lift = Math.max(s.lift, t.lift);
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const gp of pads) {
      if (!gp) continue; s.gamepad = true; const ax = gp.axes, bt = gp.buttons.map(b => b.value ?? (b.pressed ? 1 : 0));
      const dz = v => Math.abs(v) < 0.12 ? 0 : v;
      if (dz(ax[0])) { s.steer = dz(ax[0]); s.roll = dz(ax[0]); }
      if (dz(ax[1])) s.pitch = -dz(ax[1]);
      if (dz(ax[2])) s.yaw = dz(ax[2]);
      s.throttle = Math.max(s.throttle, bt[7] || 0); s.brake = Math.max(s.brake, bt[6] || 0); s.boost = Math.max(s.boost, bt[0] || 0); s.lift = Math.max(s.lift, bt[1] || 0);
      if (bt[4]) s.yaw = -1; if (bt[5]) s.yaw = 1;
      const map = { 2: 'KeyF', 3: 'KeyC', 9: 'KeyR', 8: 'KeyV', 12: 'KeyT', 13: 'KeyG', 14: 'KeyL', 15: 'KeyB' };
      for (const [i, code] of Object.entries(map)) { if (bt[i] && !this.gpPrev[i]) this.pressed.add(code); }
      this.gpPrev = bt; break;
    }
    return s;
  }
  endFrame() { this.pressed.clear(); }
}
