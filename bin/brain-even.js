#!/usr/bin/env node

import readlineSync from 'readline-sync';

let name = '';

const getRandomInt = (min, max) => {
  const low = Math.ceil(min);
  const high = Math.floor(max);
  return Math.floor(Math.random() * (high - low)) + low;
};

export const start = () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const brainEvenTask = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const brainEven = () => {
  const num = getRandomInt(1, 20);

  const evenOdd = (value) => value % 2 === 0;

  const answer = readlineSync.question(`${num} \nYour answer: `);

  if (evenOdd(num) === true && answer === 'yes') {
    console.log('Correct!');
    return true;
  }

  if (evenOdd(num) === true && answer === 'no') {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".');
    return false;
  }

  if (evenOdd(num) !== true && answer === 'no') {
    console.log('Correct!');
    return true;
  }

  if (evenOdd(num) !== true && answer === 'yes') {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    return false;
  }

  return null;
};

export const end = () => {
  console.log(`Congratulations, ${name}!`);
};

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
