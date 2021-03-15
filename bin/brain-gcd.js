#!/usr/bin/env node

import {
  start, end, brainGCD, brainGCDTask,
} from '../src/index.js';

const MAX_ITERATIONS = 3;
let step;

start();
brainGCDTask();

for (step = 0; step < MAX_ITERATIONS; step += 1) {
  if (!brainGCD()) {
    break;
  }
}

if (step === MAX_ITERATIONS) {
  end();
}
