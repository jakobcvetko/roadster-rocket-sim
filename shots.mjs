import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const errs = [];
async function shot(name, query, secs, cam, extra = '') {
  const page = await browser.newPage(); await page.setViewport({ width: 1280, height: 720 });
  page.on('console', m => { if (m.type() === 'error') errs.push(`${name}: ${m.text()}`); }); page.on('pageerror', e => errs.push(`${name}: ${e.message}`));
  await page.goto(`http://localhost:4173/?${query}`, { waitUntil: 'load' }); await new Promise(r => setTimeout(r, 1500));
  if (secs != null) await page.evaluate((secs, cam, extra) => { __sim.step(Math.round(secs * 120)); eval(extra); __sim.settleCam(cam); }, secs, cam, extra);
  await new Promise(r => setTimeout(r, 6000));
  await page.screenshot({ path: `/workspace/roadster/shot-${name}.png` }); await page.close(); console.log('ok', name);
}
const only = process.argv[2];
const list = [
  ['menu', 'q=medium', null],
  ['drag-launch', 'mode=drag&variant=thrust&autostart&autopilot&turbo=0.000001', 2.15, 0],
  ['ramp-inverted', 'mode=stunt&variant=rocket&autostart&autopilot&turbo=0.000001', 15.0, 2],
  ['ramp-chase', 'mode=stunt&variant=rocket&autostart&autopilot&turbo=0.000001', 11.0, 0],
  ['flip-thrusters', 'mode=stunt&variant=rocket&autostart&autopilot&turbo=0.000001', 18.15, 2],
  ['lineup-jump', 'mode=stunt&variant=rocket&autostart&autopilot&turbo=0.000001', 29.25, 2],
  ['cockpit', 'mode=drag&variant=rocket&autostart&autopilot&turbo=0.000001', 0.3, 1],
  ['car-closeup', 'mode=free&variant=rocket&autostart&turbo=0.000001', 1.0, 2, "__sim.forceCine=1"],
];
for (const s of list) if (!only || s[0] === only) await shot(...s);
console.log('ERRORS', JSON.stringify(errs)); await browser.close();
