// Procedural WebAudio: tri-motor whine + inverter harmonics, suction fans, cold-gas thrusters, tire squeal, wind.
export class CarAudio {
  constructor() { this.ctx = null; this.enabled = true; }
  start() {
    if (this.ctx) { this.ctx.resume(); return; }
    const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
    const ctx = this.ctx = new C(); const master = this.master = ctx.createGain(); master.gain.value = 0.5;
    const comp = ctx.createDynamicsCompressor(); master.connect(comp); comp.connect(ctx.destination);
    const noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate); const d = noiseBuf.getChannelData(0); let last = 0;
    for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = w * 0.6 + last * 3; }
    const noise = () => { const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true; s.start(); return s; };
    // motor: 3 oscillators (fundamental + gear mesh + inverter)
    this.motor = [['sawtooth', 0.08], ['square', 0.03], ['sine', 0.05]].map(([type, g]) => { const o = ctx.createOscillator(); o.type = type; const gn = ctx.createGain(); gn.gain.value = 0; const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 3000; o.connect(f); f.connect(gn); gn.connect(master); o.start(); return { o, gn, g, f }; });
    const mk = (type, freq, q) => { const n = noise(); const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q; const gn = ctx.createGain(); gn.gain.value = 0; n.connect(f); f.connect(gn); gn.connect(master); return { f, gn }; };
    this.fan = mk('bandpass', 900, 0.8); this.fanTone = ctx.createOscillator(); this.fanTone.type = 'triangle'; this.fanToneG = ctx.createGain(); this.fanToneG.gain.value = 0; this.fanTone.connect(this.fanToneG); this.fanToneG.connect(master); this.fanTone.start();
    this.thrust = mk('lowpass', 2500, 0.5); this.thrustHi = mk('highpass', 4000, 0.7);
    this.tire = mk('bandpass', 1400, 6); this.wind = mk('lowpass', 500, 0.3);
    this.impactBuf = noiseBuf;
  }
  impact(strength) {
    if (!this.ctx) return; const ctx = this.ctx; const s = ctx.createBufferSource(); s.buffer = this.impactBuf; const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 300; const g = ctx.createGain();
    g.gain.setValueAtTime(Math.min(1, strength), ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5); s.connect(f); f.connect(g); g.connect(this.master); s.start(); s.stop(ctx.currentTime + 0.6);
  }
  update(v) {
    if (!this.ctx) return; const t = this.ctx.currentTime, r = 0.05; const set = (p, val) => p.setTargetAtTime(val, t, r);
    set(this.master.gain, this.enabled ? 0.5 : 0);
    const spd = Math.abs(v.speed); const load = Math.min(1, v.motorKW / 800);
    const f0 = 60 + spd * 22; // motor rpm proportional to speed (single gear)
    this.motor.forEach((m, i) => { set(m.o.frequency, f0 * [1, 2.97, 7.3][i]); set(m.gn.gain, m.g * (0.25 + load) * Math.min(1, spd / 3 + load)); });
    set(this.fan.gn.gain, v.fan * 0.35); set(this.fan.f.frequency, 400 + v.fan * 1800); set(this.fanTone.frequency, 180 + v.fan * 520); set(this.fanToneG.gain, v.fan * 0.03);
    const th = Math.min(1, v.thrust / 60000); set(this.thrust.gn.gain, th * 0.9); set(this.thrustHi.gn.gain, th * 0.25);
    set(this.tire.gn.gain, Math.min(0.25, v.slip * 0.4) * (spd > 2 ? 1 : 0)); set(this.wind.gn.gain, Math.min(0.5, spd * spd / 9000));
  }
}
