#!/usr/bin/env node

import {
  start, end, brainCalc, brainCalcTask,
} from '../src/index.js';

const MAX_ITERATIONS = 3;
let step;

start();
brainCalcTask();

for (step = 0; step < MAX_ITERATIONS; step += 1) {
  if (!brainCalc()) {
    break;
  }
}

if (step === MAX_ITERATIONS) {
  end();
}
