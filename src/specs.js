// Vehicle variant specifications.
// Public figures (Oct 15/16 2026 reveal): 0-60 mph <1.6 s (Performance), <0.9 s (Thrust),
// <0.59 s (Rocket, event timer showed 0.81 s), top speed >230 mph, 300+ mi range,
// 10 cold-gas thrusters on Rocket, ~600 L compressed air in COPVs, fan suction holding the car
// inverted (sim limit 2 g). Unpublished values (mass split, power, thrust per nozzle, tank pressure)
// are ENGINEERING ESTIMATES chosen so the sim reproduces the public numbers.
export const G = 9.81;
export const MPH = 0.44704;

const common = {
  length: 4.25, width: 2.0, height: 1.12, wheelbase: 2.75, trackF: 1.70, trackR: 1.72,
  wheelRadiusF: 0.345, wheelRadiusR: 0.36, wheelWidthF: 0.28, wheelWidthR: 0.34,
  cgHeight: 0.42, weightFront: 0.43,            // fraction of static weight on front axle
  suspension: { rest: 0.20, travel: 0.15, kF: 115000, kR: 128000, damp: 9000, antiRoll: 26000 },
  tire: { mu: 1.45, muLat: 1.40, peakSlipAngle: 0.13, peakSlipRatio: 0.10, rollRes: 0.012 },
  aero: { CdA_low: 0.36, CdA_high: 0.55, ClA_low: 0.30, ClA_high: 1.25 },
  steerMax: 0.52,                                // rad (steer-by-wire yoke, ratio adapts with speed)
  vMax: 104.5,                                   // m/s electronic limit (~234 mph)
  battery: { peakPowerKW: 1500, kWh: 200 },
  fan: { maxPowerKW: 180, maxSuctionG: 2.0, spoolTime: 0.35, sealGap: 0.30, sealFull: 0.18 },
};

export const VARIANTS = {
  performance: {
    ...common, id: 'performance', name: 'Performance', tag: 'Road ready · 2 seats',
    seats: 2, massDry: 1790, motorForce: 34000, motorPowerKW: 1050,
    claim0to60: '< 1.6 s', price: '$50,000 reservation',
    tank: null, thrusters: [],
    desc: 'Active aero + multi-mode fan suction. No thrusters.',
  },
  thrust: {
    ...common, id: 'thrust', name: 'Thrust', tag: 'Race ready · 2 seats',
    seats: 2, massDry: 1830, motorForce: 34000, motorPowerKW: 1050,
    claim0to60: '< 0.9 s', price: '$250,000 reservation (limited)',
    tank: { volumeL: 600, fillBar: 350, minBar: 20, fullThrustBar: 60, isp: 72, compressorKgS: 1.2 },
    thrusters: [
      { id: 'R1', pos: [-2.08, 0.42, -0.42], dir: [1, 0, 0], max: 21000, group: 'boost' },
      { id: 'R2', pos: [-2.08, 0.42, 0.42], dir: [1, 0, 0], max: 21000, group: 'boost' },
    ],
    desc: 'Fan suction + twin rear cold-gas thrusters for sub-second launches.',
  },
  rocket: {
    ...common, id: 'rocket', name: 'Rocket', tag: 'Air ready · 1 seat · invite only',
    seats: 1, massDry: 1860, motorForce: 34000, motorPowerKW: 1050,
    claim0to60: '< 0.59 s (event timer 0.81 s)', price: 'Invite only · not road legal',
    tank: { volumeL: 600, fillBar: 350, minBar: 20, fullThrustBar: 60, isp: 72, compressorKgS: 1.2 },
    // 10 perimeter thrusters: 2 rear (forward), 4 ventral corners (lift / pitch / roll), 4 lateral (yaw / side)
    thrusters: [
      { id: 'R1', pos: [-2.08, 0.42, -0.45], dir: [1, 0, 0], max: 18500, group: 'boost' },
      { id: 'R2', pos: [-2.08, 0.42, 0.45], dir: [1, 0, 0], max: 18500, group: 'boost' },
      { id: 'DFL', pos: [1.45, 0.18, -0.80], dir: [0, 1, 0], max: 14000, group: 'lift' },
      { id: 'DFR', pos: [1.45, 0.18, 0.80], dir: [0, 1, 0], max: 14000, group: 'lift' },
      { id: 'DRL', pos: [-1.50, 0.18, -0.82], dir: [0, 1, 0], max: 14000, group: 'lift' },
      { id: 'DRR', pos: [-1.50, 0.18, 0.82], dir: [0, 1, 0], max: 14000, group: 'lift' },
      { id: 'LFL', pos: [1.70, 0.45, -0.98], dir: [0, 0, 1], max: 4500, group: 'side' },
      { id: 'LFR', pos: [1.70, 0.45, 0.98], dir: [0, 0, -1], max: 4500, group: 'side' },
      { id: 'LRL', pos: [-1.75, 0.45, -0.98], dir: [0, 0, 1], max: 4500, group: 'side' },
      { id: 'LRR', pos: [-1.75, 0.45, 0.98], dir: [0, 0, -1], max: 4500, group: 'side' },
    ],
    desc: '10 perimeter cold-gas thrusters: boost, lift, flips and hover landings.',
  },
};
