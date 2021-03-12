#!/usr/bin/env node

import {
  start, end, brainPrime, brainPrimeTask,
} from '../src/index.js';

const MAX_ITERATIONS = 3;
let step;

start();
brainPrimeTask();

for (step = 0; step < MAX_ITERATIONS; step += 1) {
  if (!brainPrime()) {
    break;
  }
}

if (step === MAX_ITERATIONS) {
  end();
}
