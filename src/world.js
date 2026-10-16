import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

export const LAYOUT = {
  ramp: { R: 7.0, Ls: 9, segLen: 0.6, width: 7.5, x0: 0, z: 0, thetaMax: Math.PI * 200 / 180 },
  stuntSpawn: { x: -70, z: 0, yaw: 0 },
  lineup: { z: 46, x0: 34, spacing: 3.1, spawnX: -90 },
  drag: { z: -60, startX: -200, length: 402.336 },
  freeSpawn: { x: 120, z: 90, yaw: Math.PI },
};
export const GROUP_STATIC = 1, GROUP_CAR = 2, GROUP_DYN = 4, GROUP_RAMP = 8;

function canvasTex(w, h, draw, repeat = 1) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const ctx = c.getContext('2d'); draw(ctx, w, h);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat, repeat); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
function noise(ctx, w, h, base, amp, n = 9000, size = 2) {
  ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < n; i++) { const v = (Math.random() - 0.5) * amp; ctx.fillStyle = `rgba(${v > 0 ? 255 : 0},${v > 0 ? 255 : 0},${v > 0 ? 255 : 0},${Math.abs(v)})`; ctx.fillRect(Math.random() * w, Math.random() * h, size, size); }
}

function textSprite(text, { w = 1024, h = 256, font = 'bold 120px system-ui', color = '#fff', bg = 'rgba(0,0,0,0)' } = {}) {
  const tex = canvasTex(w, h, (ctx) => { ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h); ctx.font = font; ctx.fillStyle = color; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, w / 2, h / 2); });
  return tex;
}

export function buildWorld(scene, world, renderer, quality) {
  const out = { dynamic: [], rampSegments: [], lineupCars: [], refillPads: [], cinematicCams: [], lights: [] };
  // ---------- sky + lights (dusk at the McGregor test site, event started 7:55 pm local) ----------
  const sky = new Sky(); sky.scale.setScalar(45000); scene.add(sky);
  const u = sky.material.uniforms; u.turbidity.value = 6; u.rayleigh.value = 2.2; u.mieCoefficient.value = 0.006; u.mieDirectionalG.value = 0.86;
  const sunDir = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(84), THREE.MathUtils.degToRad(235));
  u.sunPosition.value.copy(sunDir);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene(); const sky2 = new Sky(); sky2.scale.setScalar(1000); Object.assign(sky2.material.uniforms.sunPosition.value, sunDir); for (const k of ['turbidity', 'rayleigh', 'mieCoefficient', 'mieDirectionalG']) sky2.material.uniforms[k].value = u[k].value; envScene.add(sky2);
  scene.environment = pmrem.fromScene(envScene).texture;
  scene.fog = new THREE.FogExp2(0xcfa98a, 0.0011);

  const hemi = new THREE.HemisphereLight(0xbcd2ff, 0x5a4636, 0.9); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffc89a, 2.6); sun.position.copy(sunDir).multiplyScalar(200);
  sun.castShadow = true; const sm = quality === 'high' ? 4096 : 2048; sun.shadow.mapSize.set(sm, sm);
  const sc = sun.shadow.camera; sc.left = -70; sc.right = 70; sc.top = 70; sc.bottom = -70; sc.near = 10; sc.far = 500; sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.03;
  scene.add(sun); scene.add(sun.target); out.sun = sun; out.sunDir = sunDir;

  // ---------- ground ----------
  const concrete = canvasTex(1024, 1024, (ctx, w, h) => { noise(ctx, w, h, '#b9b2a6', 0.10, 40000, 2); ctx.strokeStyle = 'rgba(60,55,50,0.35)'; ctx.lineWidth = 3; for (let i = 0; i <= 4; i++) { ctx.beginPath(); ctx.moveTo(i * w / 4, 0); ctx.lineTo(i * w / 4, h); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, i * h / 4); ctx.lineTo(w, i * h / 4); ctx.stroke(); } for (let i = 0; i < 40; i++) { ctx.fillStyle = `rgba(40,35,30,${Math.random() * 0.08})`; ctx.beginPath(); ctx.arc(Math.random() * w, Math.random() * h, 20 + Math.random() * 120, 0, 7); ctx.fill(); } }, 60);
  const pad = new THREE.Mesh(new THREE.PlaneGeometry(1200, 1200), new THREE.MeshStandardMaterial({ map: concrete, roughness: 0.92 }));
  pad.rotation.x = -Math.PI / 2; pad.receiveShadow = true; scene.add(pad);
  const dirt = canvasTex(512, 512, (ctx, w, h) => noise(ctx, w, h, '#8a7155', 0.18, 30000, 3), 200);
  const outer = new THREE.Mesh(new THREE.PlaneGeometry(20000, 20000), new THREE.MeshStandardMaterial({ map: dirt, roughness: 1 }));
  outer.rotation.x = -Math.PI / 2; outer.position.y = -0.03; scene.add(outer);
  // large static slab instead of CANNON.Plane (Plane's infinite AABB breaks SAP ray queries for z>0)
  const groundBody = new CANNON.Body({ mass: 0, shape: new CANNON.Box(new CANNON.Vec3(4000, 1, 4000)), collisionFilterGroup: GROUP_STATIC, collisionFilterMask: -1 });
  groundBody.position.set(0, -1, 0); world.addBody(groundBody); out.ground = groundBody;

  const stdBox = (sx, sy, sz, mat, x, y, z, ry = 0, phys = true) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat); m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = true; m.receiveShadow = true; scene.add(m);
    if (phys) { const b = new CANNON.Body({ mass: 0, shape: new CANNON.Box(new CANNON.Vec3(sx / 2, sy / 2, sz / 2)), collisionFilterGroup: GROUP_STATIC }); b.position.set(x, y, z); b.quaternion.setFromEuler(0, ry, 0); world.addBody(b); }
    return m;
  };

  // ---------- drag strip ----------
  const D = LAYOUT.drag;
  const asphalt = canvasTex(512, 512, (ctx, w, h) => noise(ctx, w, h, '#2b2c2e', 0.16, 50000, 2), 1);
  asphalt.repeat.set(350, 6);
  const strip = new THREE.Mesh(new THREE.PlaneGeometry(1900, 26), new THREE.MeshStandardMaterial({ map: asphalt, roughness: 0.85 }));
  strip.rotation.x = -Math.PI / 2; strip.position.set(D.startX + 930, 0.012, D.z); strip.receiveShadow = true; scene.add(strip);
  const white = new THREE.MeshBasicMaterial({ color: 0xf2f2f2 }); const yellow = new THREE.MeshBasicMaterial({ color: 0xf0c020 });
  const line = (x, z, lx, lz, m) => { const p = new THREE.Mesh(new THREE.PlaneGeometry(lx, lz), m); p.rotation.x = -Math.PI / 2; p.position.set(x, 0.02, z); scene.add(p); };
  line(D.startX + 930, D.z - 12.5, 1900, 0.3, white); line(D.startX + 930, D.z + 12.5, 1900, 0.3, white);
  for (let x = D.startX; x < D.startX + 1850; x += 12) line(x, D.z, 6, 0.2, yellow);
  const marks = [[0, 'START'], [18.288, '60 FT'], [100.584, '330 FT'], [201.168, '1/8 MILE'], [304.8, '1000 FT'], [402.336, '1/4 MILE'], [1000, '1 KM'], [1609.344, '1 MILE']];
  const gantryMat = new THREE.MeshStandardMaterial({ color: 0x30343a, metalness: 0.6, roughness: 0.4 });
  for (const [d, label] of marks) {
    line(D.startX + d, D.z, 0.4, 25, label === 'START' || label === '1/4 MILE' ? white : yellow);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.5), new THREE.MeshBasicMaterial({ map: textSprite(label, { bg: '#111', color: label === '1/4 MILE' ? '#ff4040' : '#fff' }), side: THREE.DoubleSide }));
    sign.position.set(D.startX + d, 7.2, D.z); sign.rotation.y = -Math.PI / 2; scene.add(sign);
    stdBox(0.4, 7, 0.4, gantryMat, D.startX + d, 3.5, D.z - 14, 0, true); stdBox(0.4, 7, 0.4, gantryMat, D.startX + d, 3.5, D.z + 14, 0, true);
    stdBox(0.4, 0.4, 28.4, gantryMat, D.startX + d, 7.9, D.z, 0, false);
  }
  // christmas tree
  const tree = new THREE.Group(); tree.position.set(D.startX - 3, 0, D.z - 3); scene.add(tree);
  tree.add(new THREE.Mesh(new THREE.BoxGeometry(0.3, 3.2, 0.3), gantryMat).translateY(1.6));
  out.treeLights = [];
  const lightCols = [0xffaa00, 0xffaa00, 0xffaa00, 0x00ff44, 0xff0000];
  lightCols.forEach((c, i) => { const m = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: c, emissiveIntensity: 0 }); const s = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 8), m); s.position.set(0.25, 3.0 - i * 0.42, 0); tree.add(s); out.treeLights.push(m); });
  // drag timing board
  const boardCanvas = document.createElement('canvas'); boardCanvas.width = 1024; boardCanvas.height = 384;
  const boardTex = new THREE.CanvasTexture(boardCanvas); boardTex.colorSpace = THREE.SRGBColorSpace;
  const board = new THREE.Mesh(new THREE.PlaneGeometry(12, 4.5), new THREE.MeshBasicMaterial({ map: boardTex }));
  board.position.set(D.startX + 30, 6.5, D.z - 22); scene.add(board);
  stdBox(0.5, 4.5, 0.5, gantryMat, D.startX + 30, 2.2, D.z - 22.4, 0, false);
  out.dragBoard = { canvas: boardCanvas, tex: boardTex };

  // ---------- C-ramp (inverted loop section) ----------
  const RP = LAYOUT.ramp;
  // Centre-line of the C-ramp: clothoid entry (curvature ramps 0 → 1/R over Ls metres) then constant radius,
  // continuing past vertical to 200° so the car hangs upside-down at the top (C shape).
  const pts = []; { let x = RP.x0, y = 0, th = 0; const ds = 0.05; pts.push([x, y, th]); let sAcc = 0, last = 0;
    for (let s = 0; th < RP.thetaMax; s += ds) { const k = Math.min(s / RP.Ls, 1) / RP.R; th += k * ds; x += Math.cos(th) * ds; y += Math.sin(th) * ds; sAcc += ds; if (sAcc - last >= RP.segLen) { pts.push([x, y, th]); last = sAcc; } } }
  out.rampPath = pts; out.rampTop = Math.max(...pts.map(p => p[1]));
  const rampMat = new THREE.MeshStandardMaterial({ color: 0x3a3d42, roughness: 0.75, metalness: 0.25 });
  const rampSurf = canvasTex(256, 256, (ctx, w, h) => { noise(ctx, w, h, '#2e3136', 0.18, 8000, 2); ctx.fillStyle = '#e8e8e8'; ctx.fillRect(0, 0, 8, h); ctx.fillRect(w - 8, 0, 8, h); }, 1);
  const surfMat = new THREE.MeshStandardMaterial({ map: rampSurf, roughness: 0.8, metalness: 0.1 });
  const T = 0.4;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i], [x1, y1] = pts[i + 1];
    const am = Math.atan2(y1 - y0, x1 - x0); const chord = Math.hypot(x1 - x0, y1 - y0) + 0.05;
    // local +Y (surface normal, toward the inside of the C) = (-sin am, cos am); push box centre outward by T/2
    const cx = (x0 + x1) / 2 + Math.sin(am) * T / 2, cy = (y0 + y1) / 2 - Math.cos(am) * T / 2;
    const m = new THREE.Mesh(new THREE.BoxGeometry(chord, T, RP.width), [rampMat, rampMat, surfMat, rampMat, rampMat, rampMat]);
    m.position.set(cx, cy, RP.z); m.rotation.z = am; m.castShadow = true; m.receiveShadow = true; scene.add(m);
    const b = new CANNON.Body({ mass: 0, shape: new CANNON.Box(new CANNON.Vec3(chord / 2, T / 2, RP.width / 2)), collisionFilterGroup: GROUP_RAMP, collisionFilterMask: GROUP_DYN });
    b.position.set(cx, cy, RP.z); b.quaternion.setFromEuler(0, 0, am); world.addBody(b); out.rampSegments.push(b);
    for (const sd of [-1, 1]) { const rail = new THREE.Mesh(new THREE.BoxGeometry(chord, 0.9, 0.12), rampMat); rail.position.set((x0 + x1) / 2 - Math.sin(am) * 0.3, (y0 + y1) / 2 + Math.cos(am) * 0.3, RP.z + sd * (RP.width / 2 + 0.06)); rail.rotation.z = am; rail.castShadow = true; scene.add(rail);
      if (i % 3 === 0) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.04, 0.08), new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0x9fd3ff, emissiveIntensity: 2 })); l.position.set((x0 + x1) / 2 - Math.sin(am) * 0.03, (y0 + y1) / 2 + Math.cos(am) * 0.03, RP.z + sd * (RP.width / 2 - 0.15)); l.rotation.z = am; scene.add(l); } }
  }
  // steel truss support structure: columns from the outer skin to the ground + rear tower bracing
  const steel = new THREE.MeshStandardMaterial({ color: 0x8a8f96, roughness: 0.5, metalness: 0.8 });
  const xMax = Math.max(...pts.map(p => p[0]));
  for (const sd of [-1, 1]) {
    const z = RP.z + sd * (RP.width / 2 + 0.6);
    for (let i = 0; i < pts.length; i += 6) { const [px, py, th] = pts[i]; const ox = px + Math.sin(th) * 0.6, oy = py - Math.cos(th) * 0.6; if (oy > 0.6) stdBox(0.26, oy, 0.26, steel, ox, oy / 2, z, 0, false); }
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.3, out.rampTop + 1.5, 0.3), steel); back.position.set(xMax + 1.8, (out.rampTop + 1.5) / 2, z); back.castShadow = true; scene.add(back);
    for (let k = 0; k < Math.floor(out.rampTop / 2.1); k++) { const br = new THREE.Mesh(new THREE.BoxGeometry(0.12, 3.3, 0.12), steel); br.position.set(xMax + 1.1, 1.1 + k * 2.1, z); br.rotation.z = (k % 2 ? 0.6 : -0.6); scene.add(br); }
  }
  for (let i = 0; i < pts.length; i += 8) { const [px, py, th] = pts[i]; if (py < 1) continue; const cross = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, RP.width + 1.6), steel); cross.position.set(px + Math.sin(th) * 0.6, py - Math.cos(th) * 0.6, RP.z); scene.add(cross); }
  const R = RP.R;
  // landing zone + approach markings
  const ring = new THREE.Mesh(new THREE.RingGeometry(5.5, 6, 48), new THREE.MeshBasicMaterial({ color: 0xffffff })); ring.rotation.x = -Math.PI / 2; const LZX = pts[pts.length - 1][0] - 7; ring.position.set(LZX, 0.02, RP.z); scene.add(ring);
  const bull = new THREE.Mesh(new THREE.RingGeometry(1.6, 2.0, 40), new THREE.MeshBasicMaterial({ color: 0xff3030 })); bull.rotation.x = -Math.PI / 2; bull.position.set(LZX, 0.021, RP.z); scene.add(bull);
  out.landingZone = new THREE.Vector3(LZX, 0, RP.z);
  line(-40, RP.z - RP.width / 2, 80, 0.25, white); line(-40, RP.z + RP.width / 2, 80, 0.25, white);

  // ---------- lineup of five parked vehicles (original generic shapes) ----------
  const LU = LAYOUT.lineup;
  const vehicles = [
    { name: 'two-seat robotaxi', L: 4.3, W: 1.95, H: 1.25, col: 0xc9ccd0, shape: 'pod' },
    { name: 'angular pickup', L: 5.7, W: 2.2, H: 1.9, col: 0xa7adb3, shape: 'wedge', metal: 0.9 },
    { name: 'semi tractor', L: 7.0, W: 2.6, H: 3.9, col: 0xf0f0f0, shape: 'semi' },
    { name: 'crossover', L: 4.75, W: 1.95, H: 1.62, col: 0x1b2a4a, shape: 'suv' },
    { name: 'sedan', L: 4.72, W: 1.9, H: 1.44, col: 0x8b0f14, shape: 'sedan' },
  ];
  let xcur = LU.x0;
  vehicles.forEach((v, i) => {
    const x = xcur + v.W / 2; xcur += v.W + 0.9;
    const grp = new THREE.Group(); grp.position.set(x, 0, LU.z); grp.rotation.y = Math.PI / 2 * (i % 2 ? 1 : -1); scene.add(grp);
    const paint = new THREE.MeshPhysicalMaterial({ color: v.col, roughness: 0.3, metalness: v.metal ?? 0.4, clearcoat: 0.8, flatShading: true });
    const glass = new THREE.MeshStandardMaterial({ color: 0x111418, roughness: 0.1, metalness: 0.8 });
    const tireM = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
    const box = (sx, sy, sz, m, px, py, pz, rz = 0) => { const b = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), m); b.position.set(px, py, pz); b.rotation.z = rz; b.castShadow = b.receiveShadow = true; grp.add(b); return b; };
    if (v.shape === 'semi') { box(2.6, 3.0, v.W, paint, 2.0, 2.2, 0); box(0.1, 1.0, v.W * 0.9, glass, 3.31, 2.9, 0); box(4.2, 0.5, 1.2, new THREE.MeshStandardMaterial({ color: 0x333333 }), -1.2, 1.0, 0); box(2.6, 0.6, v.W, paint, 2.0, 0.9, 0); }
    else if (v.shape === 'wedge') { const sh = new THREE.Shape([new THREE.Vector2(-2.85, 0.45), new THREE.Vector2(2.85, 0.45), new THREE.Vector2(2.85, 1.15), new THREE.Vector2(0.2, 1.9), new THREE.Vector2(-2.85, 1.25)]); const e = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: v.W, bevelEnabled: false }), paint); e.position.z = -v.W / 2; e.castShadow = true; grp.add(e); }
    else { box(v.L, v.H * 0.5, v.W, paint, 0, v.H * 0.42, 0); box(v.L * (v.shape === 'pod' ? 0.55 : 0.5), v.H * 0.4, v.W * 0.86, glass, v.shape === 'suv' ? -0.2 : -0.1, v.H * 0.82, 0); }
    const wx = v.L * 0.33, r = v.shape === 'semi' ? 0.52 : 0.36;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const t = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.3, 16).rotateX(Math.PI / 2), tireM); t.position.set(sx * wx, r, sz * (v.W / 2 - 0.12)); t.castShadow = true; grp.add(t); }
    const b = new CANNON.Body({ mass: 0, shape: new CANNON.Box(new CANNON.Vec3(v.W / 2, v.H / 2, v.L / 2)), collisionFilterGroup: GROUP_STATIC });
    b.position.set(x, v.H / 2, LU.z); world.addBody(b);
    out.lineupCars.push({ ...v, x, body: b });
  });
  out.lineupEnd = xcur;
  line(0, LU.z - 4, 220, 0.25, white); line(0, LU.z + 4, 220, 0.25, white);

  // ---------- refill pads ----------
  const padMat = new THREE.MeshStandardMaterial({ color: 0x0a2030, emissive: 0x22aaff, emissiveIntensity: 1.2, transparent: true, opacity: 0.6 });
  for (const p of [[LAYOUT.stuntSpawn.x, LAYOUT.stuntSpawn.z], [LU.spawnX, LU.z], [D.startX - 25, D.z], [LAYOUT.freeSpawn.x, LAYOUT.freeSpawn.z]]) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(6, 4), padMat); m.rotation.x = -Math.PI / 2; m.position.set(p[0], 0.025, p[1]); scene.add(m); out.refillPads.push(new THREE.Vector3(p[0], 0, p[1]));
  }

  // ---------- free-roam features: skidpad + cones ----------
  const skid = new THREE.Mesh(new THREE.RingGeometry(39.7, 40.3, 128), white); skid.rotation.x = -Math.PI / 2; skid.position.set(180, 0.02, 120); scene.add(skid);
  const coneMat = new THREE.MeshStandardMaterial({ color: 0xff5a00, roughness: 0.6 });
  for (let i = 0; i < 14; i++) {
    const x = 60 + i * 14, z = 160 + (i % 2 ? 3 : -3);
    const m = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.7, 12), coneMat); m.castShadow = true; scene.add(m);
    const b = new CANNON.Body({ mass: 4, shape: new CANNON.Cylinder(0.05, 0.25, 0.7, 8), collisionFilterGroup: GROUP_DYN, linearDamping: 0.1, angularDamping: 0.3 });
    b.position.set(x, 0.36, z); world.addBody(b); out.dynamic.push({ mesh: m, body: b });
  }

  // ---------- venue: grandstands, crowd, light towers, LED screen, test-stand silhouettes ----------
  const standMat = new THREE.MeshStandardMaterial({ color: 0x4a4d52, roughness: 0.8 });
  const crowdGeo = new THREE.BoxGeometry(0.45, 0.9, 0.4);
  const crowdMat = new THREE.MeshStandardMaterial({ roughness: 0.9 });
  const crowdN = quality === 'low' ? 600 : 2400; const crowd = new THREE.InstancedMesh(crowdGeo, crowdMat, crowdN); let ci = 0;
  const dummy = new THREE.Object3D(); const col = new THREE.Color();
  const stands = [[-25, -26, 60, 0], [55, 20, 50, Math.PI], [-30, 26, 40, Math.PI]];
  for (const [sx, sz, len, ry] of stands) {
    for (let r = 0; r < 8; r++) {
      const step = stdBox(len, 0.5 * (r + 1), 1.2, standMat, sx, 0.25 * (r + 1), sz + (ry === 0 ? -r * 1.2 : r * 1.2), 0, false);
      for (let k = 0; k < len / 0.75 && ci < crowdN; k++) {
        if (Math.random() < 0.25) continue;
        dummy.position.set(sx - len / 2 + k * 0.75 + Math.random() * 0.2, 0.5 * (r + 1) + 0.45, step.position.z); dummy.rotation.y = ry; dummy.updateMatrix();
        crowd.setMatrixAt(ci, dummy.matrix); crowd.setColorAt(ci, col.setHSL(Math.random(), 0.5, 0.25 + Math.random() * 0.4)); ci++;
      }
    }
  }
  crowd.count = ci; crowd.castShadow = true; scene.add(crowd);
  const towerMat = new THREE.MeshStandardMaterial({ color: 0x9aa0a6, metalness: 0.7, roughness: 0.4 });
  const lampMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2d8, emissiveIntensity: 4 });
  for (const [x, z] of [[-45, -18], [30, -18], [-45, 18], [30, 22], [-140, -75], [60, -75], [260, -75]]) {
    stdBox(0.6, 22, 0.6, towerMat, x, 11, z, 0, true);
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(3, 1.6, 0.4), lampMat); lamp.position.set(x, 22.5, z); lamp.lookAt(0, 0, 0); scene.add(lamp);
  }
  if (quality !== 'low') {
    for (const [x, z, tx, tz] of [[-45, -18, 0, 0], [30, 22, 0, 0], [30, -18, 40, 46]]) {
      const sl = new THREE.SpotLight(0xfff0dd, 900, 140, 0.7, 0.5, 1.6); sl.position.set(x, 22, z); sl.target.position.set(tx, 2, tz); scene.add(sl, sl.target); out.lights.push(sl);
    }
  }
  // LED screen
  const scrTex = textSprite('ROADSTER ROCKET · FAN SIM', { w: 2048, h: 512, font: 'bold 150px system-ui', color: '#e8f2ff', bg: '#05070c' });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(24, 6), new THREE.MeshBasicMaterial({ map: scrTex })); screen.position.set(-10, 12, -40); scene.add(screen);
  stdBox(0.8, 9, 0.8, towerMat, -20, 4.5, -40.5, 0, false); stdBox(0.8, 9, 0.8, towerMat, 0, 4.5, -40.5, 0, false);
  // distant rocket test stands / towers / water tower (silhouettes evoking a Texas engine test site)
  const silMat = new THREE.MeshStandardMaterial({ color: 0x6f6a66, roughness: 0.9 });
  for (const [x, z, h] of [[-600, -900, 70], [-520, -860, 40], [300, -1100, 95], [900, 400, 60], [-1000, 600, 50]]) {
    stdBox(10, h, 10, silMat, x, h / 2, z, 0, false); stdBox(22, 4, 22, silMat, x, h * 0.8, z, 0, false);
  }
  const wt = new THREE.Mesh(new THREE.SphereGeometry(9, 16, 12), silMat); wt.position.set(450, 40, -700); scene.add(wt); stdBox(2, 36, 2, silMat, 450, 18, -700, 0, false);
  // cinematic camera spots
  out.cinematicCams = [new THREE.Vector3(-14, 1.2, 12), new THREE.Vector3(14, 3, -12), new THREE.Vector3(-30, 6, -10), new THREE.Vector3(48, 1.5, 54), new THREE.Vector3(20, 8, 36), new THREE.Vector3(-150, 1.2, -48), new THREE.Vector3(60, 2, -72), new THREE.Vector3(230, 1.5, -48)];
  // static bodies got their AABB computed at construction (origin); refresh after positioning
  world.bodies.forEach(b => { b.aabbNeedsUpdate = true; b.updateAABB(); });
  return out;
}
