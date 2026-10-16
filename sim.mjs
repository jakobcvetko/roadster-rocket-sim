import puppeteer from 'puppeteer-core';
// usage: node sim.mjs "<query>" <seconds> <printEvery> [extraJS-per-sample]
const [,, query, secs = '20', every = '0.5', extra = "''"] = process.argv;
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage(); await page.setViewport({ width: 320, height: 200 });
const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => m.type() === 'error' && errs.push(m.text()));
await page.goto(`http://localhost:4173/?${query}&turbo=0.000001`, { waitUntil: 'load' }); await new Promise(r => setTimeout(r, 1500));
const out = await page.evaluate((secs, every, extra) => {
  const S = __sim, lines = []; const n = Math.round(every * 120);
  for (let t = 0; t < secs; t += every) {
    S.step(n); const v = S.vehicle, b = v.body, m = S.mode; const up = b.quaternion.vmult(new b.position.constructor(0, 1, 0));
    lines.push(`t=${(m.t ?? 0).toFixed(2)} p=${b.position.x.toFixed(1)},${b.position.y.toFixed(2)},${b.position.z.toFixed(1)} up=${up.x.toFixed(2)},${up.y.toFixed(2)} v=${v.forwardSpeed.toFixed(1)} c=${v.contacts} suc=${(v.suctionN / 9.81 / b.mass).toFixed(2)} thr=${(v.thrustTotal / 1000).toFixed(0)} air=${v.airKg.toFixed(0)} ap=${m.ap || m.state} sc=${m.score ?? ''} ${eval(extra)}`);
  }
  return lines.join('\n') + '\nEVENTS ' + JSON.stringify(S.mode.events || S.mode.res);
}, +secs, +every, extra);
console.log(out); console.log('ERR', errs); await browser.close();
