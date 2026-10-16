import * as THREE from 'three';
// Pooled GPU particle system (single draw call): cold-gas plumes, tire smoke, dust.
export class Particles {
  constructor(scene, max = 6000) {
    this.max = max; this.n = 0; this.i = 0;
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 3); this.vel = new Float32Array(max * 3); this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.size = new Float32Array(max); this.grow = new Float32Array(max); this.alpha = new Float32Array(max); this.col = new Float32Array(max * 3); this.drag = new Float32Array(max);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3)); g.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1)); g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    const tex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.4, 'rgba(255,255,255,0.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
    const mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: tex }, scale: { value: 600 } }, transparent: true, depthWrite: false,
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale;
        void main(){ vA=alpha; vC=color; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*scale/max(-mv.z,0.1); gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `uniform sampler2D map; varying float vA; varying vec3 vC; void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC, t.a*vA); if(gl_FragColor.a<0.01) discard; }`,
    });
    this.points = new THREE.Points(g, mat); this.points.frustumCulled = false; scene.add(this.points); this.geo = g;
  }
  emit(p, v, { life = 1, size = 0.5, grow = 1, color = [1, 1, 1], alpha = 0.6, drag = 1.5, spread = 0 } = {}) {
    const i = this.i; this.i = (this.i + 1) % this.max;
    this.pos.set([p.x, p.y, p.z], i * 3);
    this.vel.set([v.x + (Math.random() - 0.5) * spread, v.y + (Math.random() - 0.5) * spread, v.z + (Math.random() - 0.5) * spread], i * 3);
    this.life[i] = life; this.maxLife[i] = life; this.size[i] = size; this.grow[i] = grow; this.alpha[i] = alpha; this.col.set(color, i * 3); this.drag[i] = drag;
    this.a0 = this.a0 || new Float32Array(this.max); this.a0[i] = alpha;
  }
  update(dt) {
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) { this.alpha[i] = 0; continue; }
      this.life[i] -= dt; const k = Math.exp(-this.drag[i] * dt);
      for (let j = 0; j < 3; j++) { this.vel[i * 3 + j] *= k; this.pos[i * 3 + j] += this.vel[i * 3 + j] * dt; }
      this.vel[i * 3 + 1] += 0.3 * dt; if (this.pos[i * 3 + 1] < 0.05) { this.pos[i * 3 + 1] = 0.05; this.vel[i * 3 + 1] *= -0.2; }
      this.size[i] += this.grow[i] * dt; const t = this.life[i] / this.maxLife[i]; this.alpha[i] = this.a0[i] * t * Math.min(1, (1 - t) * 8 + 0.2);
    }
    this.geo.attributes.position.needsUpdate = this.geo.attributes.size.needsUpdate = this.geo.attributes.alpha.needsUpdate = this.geo.attributes.color.needsUpdate = true;
  }
}
