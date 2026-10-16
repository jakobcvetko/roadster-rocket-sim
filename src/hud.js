import { MPH } from './specs.js';
const $ = id => document.getElementById(id);
export class Hud {
  constructor(env) { this.env = env; this.t = 0; this.shake = 0; this.gctx = $('gcv').getContext('2d'); this.trail = []; this.toastT = 0; this.helpOn = false; }
  setStatic(v, state, rig) {
    $('variantName').textContent = `${v.spec.name} · ${v.spec.tag}`;
    $('modeName').textContent = { drag: 'DRAG STRIP', stunt: 'EVENT STUNT COURSE', free: 'FREE ROAM' }[state.mode];
    $('airBlock').style.display = v.spec.tank ? '' : 'none';
    $('thr').innerHTML = v.thrusters.map(t => `<div id="th_${t.id}">${t.id}</div>`).join('');
    $('spdUnit').textContent = state.units === 'kmh' ? 'km/h' : 'mph';
  }
  toast(msg, time = 2.2) { const el = $('toast'); el.innerHTML = msg; el.style.opacity = msg ? 1 : 0; this.toastT = time; }
  toggleHelp() { this.helpOn = !this.helpOn; const h = $('help'); h.style.display = this.helpOn ? 'block' : 'none'; h.innerHTML = document.querySelector('.keys').innerHTML; }
  update(dt, v, mode, state, rig, fps, replay) {
    if (this.toastT > 0) { this.toastT -= dt; if (this.toastT <= 0) $('toast').style.opacity = 0; }
    this.drawG(v);
    this.t += dt; if (this.t < 0.06) return; this.t = 0;
    const kmh = state.units === 'kmh'; const sp = Math.abs(v.forwardSpeed);
    $('spd').textContent = Math.round(kmh ? sp * 3.6 : sp / MPH);
    $('pwr').textContent = `${Math.round(v.powerKW)} kW`; $('pwrBar').style.width = `${Math.min(100, v.powerKW / v.spec.battery.peakPowerKW * 100)}%`;
    $('df').textContent = `${((v.downforceN || 0) / 1000).toFixed(1)} kN`; $('bat').textContent = `${Math.max(0, v.energyKWh / v.spec.battery.kWh * 100).toFixed(1)} %`;
    const sg = v.suctionN / (v.body.mass * 9.81);
    $('suc').textContent = `${sg.toFixed(2)} g / ${v.spec.fan.maxSuctionG.toFixed(1)} g`; $('sucBar').style.width = `${sg / v.spec.fan.maxSuctionG * 100}%`;
    $('fanMode').textContent = ['OFF', 'AUTO', 'MAX'][v.fanMode]; $('fanKW').textContent = `fan ${Math.round(v.fanKW)} kW · ${Math.round(v.fan * 100)}%`; $('seal').textContent = `seal ${Math.round(v.seal * 100)}% · gap ${v.gap < 1 ? (v.gap * 1000).toFixed(0) + ' mm' : '—'}`;
    if (v.spec.tank) {
      const p = v.pressureBar; $('air').textContent = `${p.toFixed(0)} bar · ${v.airKg.toFixed(0)} kg${v.refilling ? ' ⟳ REFILL' : ''}`; $('airBar').style.width = `${p / v.spec.tank.fillBar * 100}%`;
      $('airBar').style.background = p < v.spec.tank.fullThrustBar ? 'var(--bad)' : 'var(--ok)';
      $('thrust').textContent = `${(v.thrustTotal / 1000).toFixed(1)} kN`; $('thrBar').style.width = `${Math.min(100, v.thrustTotal / 1000)}%`;
      v.thrusters.forEach(t => { const el = $('th_' + t.id); if (el) el.style.background = `rgba(255,${150 - t.level * 100},90,${0.1 + t.level * 0.9})`; });
    }
    $('camName').textContent = `cam: ${rig.names[rig.mode]}${replay.active ? ' (replay)' : ''}`; $('fps').textContent = `${fps.toFixed(0)} fps`;
    $('flags').textContent = [v.trackMode ? 'TRACK MODE' : 'STREET', v.wingHigh ? 'WING: HIGH DF' : 'WING: LOW DRAG', v.spec.id === 'rocket' ? (v.assist ? 'ATT-ASSIST' : 'ATT-MANUAL') : '', v.landAssist ? 'LAND-ASSIST' : '', state.paused ? 'PAUSED' : ''].filter(Boolean).join(' · ');
    const ti = mode.timerInfo?.() || { label: 'TIMER', value: '', splits: '' };
    $('timerLbl').textContent = ti.label; $('timerVal').textContent = ti.value; $('splits').innerHTML = ti.splits || '';
    $('objective').innerHTML = mode.objective?.() || ''; $('objective').style.display = $('objective').innerHTML ? '' : 'none';
    $('replaybar').style.display = replay.active ? 'block' : 'none'; if (replay.active) $('replayInfo').textContent = `${(replay.idx / 60).toFixed(1)} s / ${(replay.buf.length / 60).toFixed(1)} s · ${replay.speed}×`;
  }
  drawG(v) {
    const c = this.gctx, W = 150, cx = 75, cy = 75, R = 62; c.clearRect(0, 0, W, 170);
    c.strokeStyle = 'rgba(255,255,255,.18)'; c.lineWidth = 1;
    for (const r of [1, 2, 3]) { c.beginPath(); c.arc(cx, cy, R * r / 3, 0, 7); c.stroke(); }
    c.beginPath(); c.moveTo(cx - R, cy); c.lineTo(cx + R, cy); c.moveTo(cx, cy - R); c.lineTo(cx, cy + R); c.stroke();
    const g = v.gForce; const x = cx + Math.max(-3, Math.min(3, g.z)) / 3 * R, y = cy - Math.max(-3, Math.min(3, g.x)) / 3 * R;
    this.trail.push([x, y]); if (this.trail.length > 40) this.trail.shift();
    c.strokeStyle = 'rgba(127,208,255,.4)'; c.beginPath(); this.trail.forEach(([a, b], i) => i ? c.lineTo(a, b) : c.moveTo(a, b)); c.stroke();
    c.fillStyle = '#7fd0ff'; c.beginPath(); c.arc(x, y, 5, 0, 7); c.fill();
    c.fillStyle = '#cfd8e4'; c.font = '11px system-ui'; c.fillText(`long ${g.x.toFixed(2)}g  lat ${g.z.toFixed(2)}g`, 4, 152); c.fillText(`vert ${g.y.toFixed(2)}g  (1g/ring)`, 4, 166);
  }
}
