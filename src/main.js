import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { VARIANTS, MPH, G } from './specs.js';
import { buildWorld, LAYOUT } from './world.js';
import { buildCar } from './carModel.js';
import { Vehicle } from './vehicle.js';
import { Particles } from './particles.js';
import { CarAudio } from './audio.js';
import { Input } from './input.js';
import { CameraRig } from './cameras.js';
import { Hud } from './hud.js';
import { DragMode, StuntMode, FreeMode } from './modes.js';

const params = new URLSearchParams(location.search);
const $ = id => document.getElementById(id);
const state = { variant: params.get('variant') || 'rocket', mode: params.get('mode') || 'stunt', quality: params.get('q') || 'medium', units: 'mph', paused: false, running: false };

// ---------- renderer / scene ----------
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: params.has('shot') });
renderer.setPixelRatio(Math.min(devicePixelRatio, state.quality === 'high' ? 2 : 1.25));
renderer.setSize(innerWidth, innerHeight); renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.85; renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.05, 30000);
addEventListener('resize', () => { renderer.setSize(innerWidth, innerHeight); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); });

const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -G, 0) });
world.broadphase = new CANNON.SAPBroadphase(world); world.solver.iterations = 12; world.allowSleep = false;
world.defaultContactMaterial.friction = 0.15; world.defaultContactMaterial.restitution = 0.05;
const env = buildWorld(scene, world, renderer, state.quality);
const particles = new Particles(scene, state.quality === 'low' ? 2500 : 7000);
const audio = new CarAudio(); const input = new Input(); const rig = new CameraRig(camera, env); const hud = new Hud(env);
if (params.get('cam')) rig.mode = +params.get('cam');
{ const ray = new CANNON.RaycastResult(); rig.occluder = (a, b) => { ray.reset(); world.raycastClosest(new CANNON.Vec3(a.x, a.y, a.z), new CANNON.Vec3(b.x, b.y, b.z), { collisionFilterMask: 1 | 8, skipBackfaces: false }, ray); rig._occl = ray.hasHit; return ray.hasHit ? ray.distance : null; }; }

let vehicle = null, model = null, carRoot = null, mode = null;
const replay = { buf: [], max: 3600, active: false, idx: 0, speed: 1, acc: 0 };

function spawnCar() {
  if (vehicle) { vehicle.dispose(); scene.remove(carRoot); }
  const spec = VARIANTS[state.variant];
  vehicle = new Vehicle(world, spec); model = buildCar(spec);
  carRoot = new THREE.Group(); model.group.position.y = -spec.cgHeight; carRoot.add(model.group); scene.add(carRoot);
  vehicle.body.addEventListener('collide', e => { const v = Math.abs(e.contact.getImpactVelocityAlongNormal()); if (v > 2) { audio.impact(v / 12); hud.shake = Math.min(1, v / 10); } mode?.onCollide?.(e.body, v); });
}
function startRun() {
  spawnCar();
  const M = { drag: DragMode, stunt: StuntMode, free: FreeMode }[state.mode];
  mode = new M({ vehicle, env, hud, autopilot: $('autopilot').checked || params.has('autopilot'), particles });
  mode.reset(); replay.buf.length = 0; replay.active = false; state.running = true;
  $('menu').style.display = 'none'; hud.setStatic(vehicle, state, rig);
}

// ---------- menu ----------
const modes = { drag: ['Drag Strip', '0-60 / 60 ft / 1/8 / 1/4 mile timing with a christmas tree start'], stunt: ['Event Stunt Course', 'C-ramp inverted hold → jump-off flip → hover landing → hop over the 5-vehicle lineup'], free: ['Free-Roam Test Track', 'Open test site: skidpad, cones, ramp, strip and lineup'] };
function renderMenu() {
  $('variants').innerHTML = Object.values(VARIANTS).map(v => `<div class="card ${v.id === state.variant ? 'sel' : ''}" data-v="${v.id}"><b>${v.name}</b><small>${v.tag}</small><small>0-60 mph ${v.claim0to60} · &gt;230 mph</small><small>${v.desc}</small><small>${v.thrusters.length} thrusters · ${v.price}</small></div>`).join('');
  $('modes').innerHTML = Object.entries(modes).map(([k, [n, d]]) => `<div class="card ${k === state.mode ? 'sel' : ''}" data-m="${k}"><b>${n}</b><small>${d}</small></div>`).join('');
  document.querySelectorAll('[data-v]').forEach(e => e.onclick = () => { state.variant = e.dataset.v; renderMenu(); });
  document.querySelectorAll('[data-m]').forEach(e => e.onclick = () => { state.mode = e.dataset.m; renderMenu(); });
}
renderMenu();
$('units').onchange = e => state.units = e.target.value;
$('go').onclick = () => { audio.start(); startRun(); };
if (params.has('autostart')) { if (params.has('autopilot')) $('autopilot').checked = true; startRun(); }

// ---------- per-frame visuals ----------
const _v = new THREE.Vector3(), _q = new THREE.Quaternion();
function applyVisual(st) {
  carRoot.position.set(...st.p); carRoot.quaternion.set(...st.q);
  const spec = vehicle.spec;
  model.wheels.forEach((w, i) => { const [len, steer, spin] = st.w[i]; const vw = vehicle.wheels[i]; w.pivot.position.y = vw.mount.y + spec.cgHeight - len; w.pivot.rotation.y = -steer; w.holder.rotation.z = spin; });
  model.fans.forEach(f => f.rotation.x += st.fan * 1.4);
  const wb = model.wing; const hi = vehicle.wingHigh; wb.position.y += ((hi ? 0.96 : 0.84) - wb.position.y) * 0.1; wb.rotation.z += ((hi ? 0.18 : 0.0) - wb.rotation.z) * 0.1;
  model.group.position.y = -spec.cgHeight - (vehicle.trackMode ? 0.0 : 0);
}
function emitEffects(dt, st) {
  const body = vehicle.body; const vel = body.velocity;
  vehicle.thrusters.forEach((t, i) => {
    const lvl = st.t[i]; if (lvl < 0.03) return; const noz = model.nozzles[t.id];
    noz.getWorldPosition(_v); const ex = noz.userData.exhaust.clone().applyQuaternion(carRoot.quaternion);
    const n = Math.ceil(lvl * (state.quality === 'low' ? 3 : 7));
    for (let k = 0; k < n; k++) particles.emit(_v.clone().addScaledVector(ex, 0.1 + Math.random() * 0.4), { x: vel.x + ex.x * 45 * lvl, y: vel.y + ex.y * 45 * lvl, z: vel.z + ex.z * 45 * lvl }, { life: 0.5 + Math.random() * 0.6, size: 0.25 + lvl * 0.4, grow: 5 * lvl, alpha: 0.35 + lvl * 0.3, color: [0.93, 0.95, 1], drag: 4, spread: 4 * lvl });
  });
  if (replay.active) return;
  vehicle.wheels.forEach(w => {
    if (w.contact && w.slip > 0.25 && vehicle.speed > 2) particles.emit(w.point, { x: vel.x * 0.2, y: 0.6, z: vel.z * 0.2 }, { life: 1.6, size: 0.5, grow: 2.5, alpha: 0.25 * w.slip, color: [0.75, 0.75, 0.75], drag: 1.2, spread: 1 });
    if (w.contact && (w.comp - w.prevComp) / 0.0083 > 2.5) { for (let k = 0; k < 10; k++) particles.emit(w.point, { x: 0, y: 1.5, z: 0 }, { life: 1.4, size: 0.6, grow: 3, alpha: 0.4, color: [0.62, 0.52, 0.4], drag: 2, spread: 6 }); }
  });
  if (vehicle.fan > 0.4 && vehicle.contacts >= 3 && Math.random() < vehicle.fan * 0.6) { const p = new THREE.Vector3(-2.2, 0.3 - vehicle.spec.cgHeight, (Math.random() - 0.5) * 1.2).applyQuaternion(carRoot.quaternion).add(carRoot.position); particles.emit(p, { x: vel.x * 0.5, y: 0.5, z: vel.z * 0.5 }, { life: 1.2, size: 0.4, grow: 1.8, alpha: 0.12 * vehicle.fan, color: [0.7, 0.62, 0.52], drag: 1.5, spread: 2 }); }
}

// ---------- main loop ----------
const FIXED = 1 / 120; let acc = 0, last = performance.now(), frames = 0, fpsT = 0, fps = 0, stepCount = 0;
window.__sim = { get vehicle() { return vehicle; }, get mode() { return mode; }, state, errors: [], world, env,
  // headless test hook: advance the simulation n fixed steps synchronously
  step(n) { for (let i = 0; i < n; i++) { mode.control?.(FIXED); world.step(FIXED); mode.update(FIXED); stepCount++; if (stepCount % 2 === 0) { replay.buf.push(vehicle.getState()); if (replay.buf.length > replay.max) replay.buf.shift(); } } applyVisual(vehicle.getState()); },
  settleCam(cam) { if (cam != null) rig.mode = cam; const car = { position: carRoot.position, quaternion: carRoot.quaternion, velocity: vehicle.body.velocity, cg: vehicle.spec.cgHeight }; for (let i = 0; i < 80; i++) rig.update(0.05, car, model); } };
function frame(now) {
  requestAnimationFrame(frame);
  let dt = Math.min(0.05, (now - last) / 1000); last = now; frames++; fpsT += dt; if (fpsT > 0.5) { fps = frames / fpsT; frames = 0; fpsT = 0; }
  if (params.has('fixeddt')) dt = 1 / 60;
  handleKeys();
  if (state.running && vehicle) {
    if (replay.active) updateReplay(dt);
    else if (!state.paused) {
      const ctl = input.read();
      Object.assign(vehicle.input, { park: 0, throttle: ctl.throttle, brake: ctl.brake, steer: ctl.steer, handbrake: ctl.handbrake, boost: ctl.boost, lift: ctl.lift, pitch: ctl.pitch, roll: ctl.roll, yaw: ctl.yaw });
      if (vehicle.contacts > 0) { vehicle.input.pitch = vehicle.input.roll = 0; } // stick is steering/throttle on ground
      vehicle.refilling = env.refillPads.some(p => Math.hypot(p.x - vehicle.body.position.x, p.z - vehicle.body.position.z) < 3.5);
      const turbo = +(params.get('turbo') || 0); acc += turbo ? turbo : dt; let n = 0; const maxN = turbo ? 1e5 : 8;
      while (acc >= FIXED && n < maxN) {
        mode.control?.(FIXED); world.step(FIXED); mode.update(FIXED); acc -= FIXED; n++; stepCount++;
        if (stepCount % 2 === 0) { replay.buf.push(vehicle.getState()); if (replay.buf.length > replay.max) replay.buf.shift(); }
      }
      if (n === maxN) acc = 0;
      env.dynamic.forEach(d => { d.mesh.position.copy(d.body.position); d.mesh.quaternion.copy(d.body.quaternion); });
      applyVisual(vehicle.getState());
      audio.update({ speed: vehicle.speed, motorKW: vehicle.motorKW, fan: vehicle.fan, thrust: vehicle.thrustTotal, slip: vehicle.slipMax || 0 });
    }
    const st = replay.active ? replay.buf[replay.idx | 0] : vehicle.getState();
    if (st) emitEffects(dt, st);
    rig.update(dt, replay.active ? { position: carRoot.position, quaternion: carRoot.quaternion, velocity: new THREE.Vector3(), cg: vehicle.spec.cgHeight } : { position: carRoot.position, quaternion: carRoot.quaternion, velocity: vehicle.body.velocity, cg: vehicle.spec.cgHeight }, model, replay.active && rig.mode === 0);
    env.sun.position.copy(carRoot.position).addScaledVector(env.sunDir, 200); env.sun.target.position.copy(carRoot.position);
    hud.update(dt, vehicle, mode, state, rig, fps, replay);
  } else {
    const t = now / 1000; camera.position.set(Math.cos(t * 0.1) * 30, 9, Math.sin(t * 0.1) * 30 - 3); camera.lookAt(0, 5, 0);
  }
  particles.update(dt);
  if (hud.shake > 0) { camera.position.x += (Math.random() - 0.5) * hud.shake * 0.15; camera.position.y += (Math.random() - 0.5) * hud.shake * 0.15; hud.shake *= 0.9; if (hud.shake < 0.01) hud.shake = 0; }
  renderer.render(scene, camera);
  input.endFrame();
}
function handleKeys() {
  const tp = c => input.tap(c);
  if (tp('Escape')) { $('menu').style.display = $('menu').style.display === 'none' ? 'flex' : 'none'; }
  if (!vehicle) return;
  if (tp('KeyC')) rig.next();
  if (tp('KeyP')) state.paused = !state.paused;
  if (tp('KeyM')) audio.enabled = !audio.enabled;
  if (tp('KeyH')) hud.toggleHelp();
  if (tp('KeyF')) vehicle.fanMode = (vehicle.fanMode + 1) % 3;
  if (tp('KeyT')) vehicle.trackMode = !vehicle.trackMode;
  if (tp('KeyG')) vehicle.wingHigh = !vehicle.wingHigh;
  if (tp('KeyL')) vehicle.assist = !vehicle.assist;
  if (tp('KeyB')) vehicle.landAssist = !vehicle.landAssist;
  if (tp('KeyR')) mode.respawn ? mode.respawn() : mode.reset();
  if (tp('Enter')) mode.reset();
  if (tp('KeyN')) mode.next?.();
  if (tp('KeyV')) { replay.active = !replay.active && replay.buf.length > 10; replay.idx = Math.max(0, replay.buf.length - 1200); hud.toast(replay.active ? 'REPLAY' : ''); }
  if (replay.active) {
    if (input.keys.has('ArrowLeft')) replay.idx = Math.max(0, replay.idx - 6);
    if (input.keys.has('ArrowRight')) replay.idx = Math.min(replay.buf.length - 1, replay.idx + 6);
    if (tp('ArrowUp')) replay.speed = replay.speed === 1 ? 0.25 : replay.speed === 0.25 ? 0.5 : 1;
  }
}
function updateReplay(dt) {
  replay.idx += dt * 60 * replay.speed; if (replay.idx >= replay.buf.length - 1) replay.idx = Math.max(0, replay.buf.length - 1200);
  const st = replay.buf[replay.idx | 0]; if (st) { applyVisual(st); }
}
addEventListener('error', e => window.__sim.errors.push(String(e.message)));
requestAnimationFrame(frame);
