import * as THREE from 'three';
// Original procedural low-poly model inspired by the proportions of the 2026 Roadster prototype:
// angular wedge (SR-71/F-35-inspired), hidden headlight slit, full-width taillight, gold-tinted canopy,
// rear fans + diffuser, perimeter cold-gas nozzles. No logos / trademarks.
// Frame: +X forward, +Y up, +Z right. Built with ground at y=0.

const lerp = (a, b, t) => a + (b - a) * t;
function interp(keys, x) { // keys: [[x, v], ...] sorted by x ascending
  if (x <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (x <= keys[i][0]) { const t = (x - keys[i - 1][0]) / (keys[i][0] - keys[i - 1][0]); return lerp(keys[i - 1][1], keys[i][1], t); }
  }
  return keys[keys.length - 1][1];
}

export const AXLE_F = 1.40, AXLE_R = -1.35;
let _scr = null;
function screenTex() { // simple original UI mock (speed / map tiles) for the cabin displays
  if (_scr) return _scr; const c = document.createElement('canvas'); c.width = 256; c.height = 160; const x = c.getContext('2d');
  x.fillStyle = '#05080f'; x.fillRect(0, 0, 256, 160); x.fillStyle = '#1b2a44'; for (let i = 0; i < 6; i++) x.fillRect(10 + i * 40, 90, 34, 60);
  x.fillStyle = '#7fd0ff'; x.font = 'bold 48px system-ui'; x.fillText('0', 20, 60); x.font = '16px system-ui'; x.fillText('mph · TRACK', 70, 58);
  _scr = new THREE.CanvasTexture(c); _scr.colorSpace = THREE.SRGBColorSpace; return _scr;
}

export function buildCar(spec, opts = {}) {
  const g = new THREE.Group(); g.name = 'roadster';
  const L = spec.length / 2;
  const mats = {
    paint: new THREE.MeshPhysicalMaterial({ side: THREE.DoubleSide, color: 0xeef0ee, roughness: 0.38, metalness: 0.05, clearcoat: 0.6, clearcoatRoughness: 0.35, sheen: 0.4, sheenColor: new THREE.Color(0xdfe6ff), flatShading: true }),
    glass: new THREE.MeshPhysicalMaterial({ side: THREE.DoubleSide, depthWrite: false, color: 0xc9a24a, roughness: 0.05, metalness: 0.85, transparent: true, opacity: 0.72, flatShading: true, envMapIntensity: 1.6 }),
    carbon: new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.55, metalness: 0.3, flatShading: true, side: THREE.DoubleSide }),
    black: new THREE.MeshStandardMaterial({ color: 0x07080a, roughness: 0.7, metalness: 0.1 }),
    metal: new THREE.MeshStandardMaterial({ color: 0x9aa3ad, roughness: 0.25, metalness: 1.0 }),
    nozzle: new THREE.MeshStandardMaterial({ color: 0x6d6f73, roughness: 0.3, metalness: 1.0, side: THREE.DoubleSide }),
    tire: new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.92 }),
    rim: new THREE.MeshStandardMaterial({ color: 0x2a2d31, roughness: 0.3, metalness: 0.9 }),
    head: new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xe8f4ff, emissiveIntensity: 3 }),
    tail: new THREE.MeshStandardMaterial({ color: 0x550000, emissive: 0xff1a12, emissiveIntensity: 2.5 }),
    seat: new THREE.MeshStandardMaterial({ color: 0xf2f2ef, roughness: 0.8 }),
    suede: new THREE.MeshStandardMaterial({ color: 0x55585c, roughness: 1 }),
    screen: new THREE.MeshStandardMaterial({ color: 0x05070c, emissive: 0xffffff, emissiveMap: screenTex(), emissiveIntensity: 0.9 }),
    caliper: new THREE.MeshStandardMaterial({ color: 0x8c8f94, roughness: 0.4, metalness: 0.8 }),
  };

  // ---------- body loft ----------
  const stations = [];
  const N = 46;
  for (let i = 0; i <= N; i++) stations.push(lerp(-L, L, i / N));
  // add exact crease stations
  [-0.75, 0.95, 1.55, -1.6].forEach(s => stations.push(s)); stations.sort((a, b) => a - b);

  const roofK = [[-L, 0.80], [-L + 0.06, 0.86], [-1.7, 0.90], [-0.95, 0.99], [-0.45, 1.09], [-0.1, spec.height], [0.35, 1.08], [0.95, 0.80], [1.55, 0.66], [L - 0.15, 0.52], [L, 0.36]];
  const beltK = [[-L, 0.78], [-1.7, 0.84], [-0.75, 0.86], [0.95, 0.76], [1.55, 0.64], [L - 0.15, 0.50], [L, 0.35]];
  const shoulderK = [[-L, 0.66], [-1.35, 0.72], [-0.6, 0.62], [0.4, 0.58], [1.40, 0.66], [L - 0.2, 0.44], [L, 0.30]];
  const halfWK = [[-L, 0.90], [-L + 0.15, 0.97], [-1.35, 1.0], [-0.55, 0.93], [0.4, 0.94], [1.40, 0.99], [L - 0.25, 0.92], [L, 0.80]];
  const beltWK = [[-L, 0.80], [-1.35, 0.86], [-0.6, 0.72], [0.2, 0.74], [0.95, 0.80], [1.4, 0.88], [L, 0.72]];
  const roofWK = [[-L, 0.62], [-1.0, 0.56], [-0.3, 0.46], [0.4, 0.48], [0.95, 0.64], [L, 0.62]];
  const floorBase = 0.14;
  const archR = 0.46;
  function floorAt(x) {
    let f = floorBase;
    for (const ax of [AXLE_F, AXLE_R]) {
      const r = ax === AXLE_F ? spec.wheelRadiusF : spec.wheelRadiusR;
      const dx = x - ax;
      if (Math.abs(dx) < archR) f = Math.max(f, r + Math.sqrt(archR * archR - dx * dx) - 0.02);
    }
    return f;
  }
  const sec = []; // per station: array of 7 [z, y]
  for (const x of stations) {
    const hw = interp(halfWK, x), fl = floorAt(x), sh = interp(shoulderK, x), be = interp(beltK, x), ro = interp(roofK, x);
    const bw = Math.min(interp(beltWK, x), hw - 0.03), rw = Math.min(interp(roofWK, x), bw - 0.05);
    const inArch = fl > floorBase + 0.001;
    const sill = inArch ? Math.min(fl + 0.02, sh - 0.05) : floorBase + 0.13;
    sec.push([[0, floorBase], [hw * 0.9, floorBase], [hw, Math.max(sill, Math.min(fl, sh - 0.04))], [hw * 0.985, Math.max(sh, fl + 0.03)], [bw, Math.max(be, sh + 0.02)], [rw, Math.max(ro - 0.03, be + 0.02)], [0, Math.max(ro, be + 0.03)]]);
  }
  const pos = [], idx = [], groups = [];
  const P = sec[0].length;
  // vertices: per station, full ring right side (P) + left mirrored (P) => ring of 2P (duplicates fine with flat shading)
  for (let s = 0; s < stations.length; s++) {
    for (let k = 0; k < P; k++) pos.push(stations[s], sec[s][k][1], sec[s][k][0]);
    for (let k = 0; k < P; k++) pos.push(stations[s], sec[s][k][1], -sec[s][k][0]);
  }
  const tris = { 0: [], 1: [], 2: [] };
  for (let s = 0; s < stations.length - 1; s++) {
    const x = (stations[s] + stations[s + 1]) / 2;
    const cabin = x > -0.75 && x < 0.95;
    for (let side = 0; side < 2; side++) {
      for (let k = 0; k < P - 1; k++) {
        const a = s * 2 * P + side * P + k, b = a + 1, c = a + 2 * P, d = b + 2 * P;
        let m = 0;
        if (k <= 1) m = 2;                      // underbody + carbon sill
        if (cabin && k >= 4) m = 1;              // canopy glass (roof + side glass)
        if (cabin && k === 3 && x > -0.45 && x < 0.75) m = 1;
        if (side === 0) tris[m].push(a, c, b, b, c, d); else tris[m].push(a, b, c, b, d, c);
      }
    }
  }
  let start = 0;
  for (const m of [0, 1, 2]) { idx.push(...tris[m]); groups.push([start, tris[m].length, m]); start += tris[m].length; }
  // end caps
  const capStart = idx.length;
  for (const s of [0, stations.length - 1]) {
    const base = s * 2 * P; const front = s !== 0;
    for (let k = 0; k < P - 1; k++) {
      const r1 = base + k, r2 = base + k + 1, l1 = base + P + k, l2 = base + P + k + 1;
      if (front) idx.push(r1, r2, l1, l1, r2, l2); else idx.push(r1, l1, r2, l1, l2, r2);
    }
  }
  groups.push([capStart, idx.length - capStart, 2]);
  const bodyGeo = new THREE.BufferGeometry();
  bodyGeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  bodyGeo.setIndex(idx);
  groups.forEach(([s, c, m]) => bodyGeo.addGroup(s, c, m));
  const nonIndexed = bodyGeo.toNonIndexed(); nonIndexed.computeVertexNormals();
  const body = new THREE.Mesh(nonIndexed, [mats.paint, mats.glass, mats.carbon]);
  body.castShadow = true; body.receiveShadow = true; g.add(body);

  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0, parent = g) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = true; parent.add(m); return m; };

  // ---------- lights ----------
  const noseY = interp(beltK, L - 0.06);
  add(new THREE.BoxGeometry(0.03, 0.022, 1.42), mats.head, L - 0.04, noseY - 0.03, 0);              // hidden-headlight light slit
  add(new THREE.BoxGeometry(0.02, 0.05, 1.86), mats.tail, -L - 0.005, 0.74, 0);                     // full-length taillight bar
  add(new THREE.BoxGeometry(0.06, 0.32, 1.75), mats.black, -L + 0.02, 0.45, 0);                      // rear fascia
  // front splitter + intakes
  add(new THREE.BoxGeometry(0.35, 0.03, 1.80), mats.carbon, L - 0.12, 0.13, 0);
  add(new THREE.BoxGeometry(0.04, 0.09, 1.2), mats.black, L - 0.02, 0.22, 0);
  // side intakes (behind doors)
  for (const sgn of [-1, 1]) {
    const intake = add(new THREE.BoxGeometry(0.62, 0.16, 0.04), mats.black, -0.72, 0.5, sgn * 0.935, 0, 0, -0.18);
    intake.rotation.y = sgn * 0.08;
    add(new THREE.BoxGeometry(0.14, 0.04, 0.10), mats.carbon, 0.72, 0.80, sgn * 0.84);             // camera "mirror" pods
    add(new THREE.BoxGeometry(2.3, 0.05, 0.05), mats.carbon, 0.0, 0.12, sgn * 0.93);               // ground-seal skirts
  }
  // diffuser fins
  for (let i = -3; i <= 3; i++) add(new THREE.BoxGeometry(0.55, 0.16, 0.012), mats.carbon, -L + 0.28, 0.18, i * 0.22, 0, 0, 0.18);

  // ---------- rear fans (suction system exhaust) ----------
  const fans = [];
  const bladeGeo = new THREE.BoxGeometry(0.01, 0.16, 0.045);
  for (const z of [-0.5, 0.5]) {
    const ring = add(new THREE.TorusGeometry(0.19, 0.025, 8, 24), mats.metal, -L - 0.01, 0.42, z, 0, Math.PI / 2, 0);
    ring.castShadow = false;
    const hub = new THREE.Group(); hub.position.set(-L + 0.0, 0.42, z); g.add(hub);
    for (let b = 0; b < 9; b++) { const bl = new THREE.Mesh(bladeGeo, mats.rim); const a = b / 9 * Math.PI * 2; bl.position.set(0, Math.cos(a) * 0.09, Math.sin(a) * 0.09); bl.rotation.x = -a; bl.rotation.y = 0.5; hub.add(bl); }
    hub.add(new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.04, 12).rotateZ(Math.PI / 2), mats.metal));
    fans.push(hub);
  }

  // ---------- active wing ----------
  const wing = new THREE.Group(); wing.position.set(-1.78, 0.86, 0); g.add(wing);
  add(new THREE.BoxGeometry(0.32, 0.025, 1.72), mats.carbon, 0, 0.14, 0, 0, 0, 0, wing);
  for (const z of [-0.55, 0.55]) add(new THREE.BoxGeometry(0.08, 0.16, 0.02), mats.carbon, 0.02, 0.06, z, 0, 0, 0, wing);
  for (const z of [-0.87, 0.87]) add(new THREE.BoxGeometry(0.3, 0.09, 0.012), mats.carbon, 0, 0.15, z, 0, 0, 0, wing);
  wing.userData.blade = wing.children[0];

  // ---------- thruster nozzles ----------
  const nozzles = {};
  const bell = new THREE.LatheGeometry([new THREE.Vector2(0.035, 0), new THREE.Vector2(0.045, 0.03), new THREE.Vector2(0.07, 0.09), new THREE.Vector2(0.085, 0.12)], 16);
  for (const t of spec.thrusters) {
    const scale = t.max > 15000 ? 1.25 : t.max > 9000 ? 1.0 : 0.6;
    const n = new THREE.Mesh(bell, mats.nozzle); n.scale.setScalar(scale);
    const p = new THREE.Vector3(...t.pos); p.y += 0.0;
    n.position.copy(p);
    // bell opens toward exhaust direction = -dir
    const ex = new THREE.Vector3(...t.dir).negate();
    n.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), ex);
    n.userData.exhaust = ex; g.add(n); nozzles[t.id] = n;
  }

  // ---------- wheels ----------
  const wheels = [];
  const mkWheel = (r, w) => {
    const spin = new THREE.Group();
    const tireProfile = []; const rr = r, ri = r * 0.74;
    for (let i = 0; i <= 10; i++) { const a = -Math.PI / 2 + i / 10 * Math.PI; tireProfile.push(new THREE.Vector2(ri + (rr - ri) * (0.55 + 0.45 * Math.cos(a)), w / 2 * Math.sin(a))); }
    const tire = new THREE.Mesh(new THREE.LatheGeometry(tireProfile, 32).rotateX(Math.PI / 2), mats.tire); tire.castShadow = true; spin.add(tire);
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(ri, ri, w * 0.7, 28).rotateX(Math.PI / 2), mats.rim); spin.add(disc);
    // aero spokes (outer face)
    for (let s = 0; s < 6; s++) { const sp = new THREE.Mesh(new THREE.BoxGeometry(0.05, ri * 0.95, 0.03), mats.metal); sp.rotation.z = s / 6 * Math.PI * 2; sp.position.z = w * 0.36; spin.add(sp); }
    spin.add(new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, w * 0.8, 12).rotateX(Math.PI / 2), mats.metal));
    return spin;
  };
  const wheelDefs = [
    { x: AXLE_F, z: spec.trackF / 2, r: spec.wheelRadiusF, w: spec.wheelWidthF, front: true },
    { x: AXLE_F, z: -spec.trackF / 2, r: spec.wheelRadiusF, w: spec.wheelWidthF, front: true },
    { x: AXLE_R, z: spec.trackR / 2, r: spec.wheelRadiusR, w: spec.wheelWidthR, front: false },
    { x: AXLE_R, z: -spec.trackR / 2, r: spec.wheelRadiusR, w: spec.wheelWidthR, front: false },
  ];
  for (const d of wheelDefs) {
    const pivot = new THREE.Group(); pivot.position.set(d.x, d.r, d.z); g.add(pivot);
    const spin = mkWheel(d.r, d.w); if (d.z < 0) spin.rotation.y = Math.PI; // outer face outward
    const holder = new THREE.Group(); holder.add(spin); pivot.add(holder);
    // brake disc + caliper (do not spin)
    const bd = new THREE.Mesh(new THREE.CylinderGeometry(d.r * 0.62, d.r * 0.62, 0.03, 24).rotateX(Math.PI / 2), mats.metal); bd.position.z = -Math.sign(d.z) * 0.04; pivot.add(bd);
    const cal = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.09, 0.06), mats.caliper); cal.position.set(-0.12, 0.12, Math.sign(d.z) * 0.0); pivot.add(cal);
    wheels.push({ pivot, spin, holder, ...d, baseY: d.r });
    // wheel tub (dark arch liner)
    const tub = new THREE.Mesh(new THREE.CylinderGeometry(archR - 0.01, archR - 0.01, 0.34, 20, 1, true, 0, Math.PI).rotateX(Math.PI / 2).rotateZ(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x050505, side: THREE.DoubleSide }));
    tub.rotation.set(Math.PI / 2, 0, 0); tub.geometry = new THREE.CylinderGeometry(archR - 0.01, archR - 0.01, 0.36, 20, 1, true, Math.PI / 2, Math.PI);
    tub.rotation.set(Math.PI / 2, 0, 0); tub.position.set(d.x, d.r, d.z * 0.98); g.add(tub);
  }

  // ---------- interior (visible through canopy, used by cockpit cam) ----------
  const interior = new THREE.Group(); g.add(interior);
  add(new THREE.BoxGeometry(0.5, 0.12, 1.5), mats.suede, 0.62, 0.66, 0, 0, 0, -0.2, interior);  // dash
  add(new THREE.BoxGeometry(0.02, 0.20, 0.30), mats.screen, 0.42, 0.78, 0, 0, 0, 0.35, interior); // center touchscreen
  const seatZ = spec.seats === 1 ? [0] : [-0.33, 0.33];
  const driverZ = seatZ[0];
  for (const z of seatZ) {
    add(new THREE.BoxGeometry(0.55, 0.10, 0.48), mats.seat, -0.25, 0.26, z, 0, 0, 0, interior);
    add(new THREE.BoxGeometry(0.10, 0.62, 0.46), mats.seat, -0.58, 0.55, z, 0, 0, 0.32, interior);
  }
  // yoke + two forward displays
  const yoke = new THREE.Group(); yoke.position.set(0.30, 0.62, driverZ); yoke.rotation.z = 0.35; interior.add(yoke);
  add(new THREE.BoxGeometry(0.03, 0.08, 0.30), mats.black, 0, 0, 0, 0, 0, 0, yoke);
  for (const z of [-0.15, 0.15]) add(new THREE.BoxGeometry(0.035, 0.16, 0.035), mats.black, 0, 0.04, z, 0, 0, 0, yoke);
  for (const z of [-0.12, 0.12]) add(new THREE.BoxGeometry(0.015, 0.07, 0.11), mats.screen, 0.46, 0.76, driverZ + z, 0, 0, 0.4, interior);
  // humanoid robot driver (generic, original)
  const robot = new THREE.Group(); robot.position.set(-0.2, 0.32, driverZ); interior.add(robot);
  const rWhite = new THREE.MeshStandardMaterial({ color: 0xf4f4f4, roughness: 0.35, metalness: 0.2 });
  const rBlack = new THREE.MeshStandardMaterial({ color: 0x111215, roughness: 0.2, metalness: 0.6 });
  add(new THREE.BoxGeometry(0.22, 0.42, 0.34), rWhite, -0.16, 0.30, 0, 0, 0, 0.3, robot);           // torso
  add(new THREE.SphereGeometry(0.105, 16, 12), rWhite, -0.04, 0.62, 0, 0, 0, 0, robot);             // head
  add(new THREE.SphereGeometry(0.09, 16, 12, -Math.PI / 2.4, Math.PI / 1.2, Math.PI / 3, Math.PI / 3), rBlack, 0.0, 0.62, 0, 0, 0, 0, robot); // visor
  for (const z of [-0.15, 0.15]) {
    add(new THREE.BoxGeometry(0.36, 0.06, 0.06), rBlack, 0.08, 0.36, z, 0, 0, -0.35, robot);          // arms to yoke
    add(new THREE.BoxGeometry(0.40, 0.08, 0.09), rWhite, 0.15, 0.04, z * 0.8, 0, 0, 0, robot);        // thighs
  }
  g.traverse(o => { if (o.isMesh) o.receiveShadow = true; });
  return { group: g, wheels, fans, wing, nozzles, interior, robot, mats, driverEye: new THREE.Vector3(-0.12, 1.0, driverZ) };
}
