#!/usr/bin/env node

import {
  start, end, brainProgression, brainProgressionTask,
} from '../src/index.js';

const MAX_ITERATIONS = 3;
let step;

start();
brainProgressionTask();

for (step = 0; step < MAX_ITERATIONS; step += 1) {
  if (!brainProgression()) {
    break;
  }
}

if (step === MAX_ITERATIONS) {
  end();
}
