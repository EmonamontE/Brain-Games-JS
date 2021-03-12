#!/usr/bin/env node

import {
  start, end, brainEven, brainEvenTask,
} from '../src/index.js';

const MAX_ITERATIONS = 3;
let step;

start();
brainEvenTask();

for (step = 0; step < MAX_ITERATIONS; step += 1) {
  if (!brainEven()) {
    break;
  }
}

if (step === MAX_ITERATIONS) {
  end();
}
