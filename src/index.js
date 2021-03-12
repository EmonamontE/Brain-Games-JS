import readlineSync from 'readline-sync';

// Методы старта и окончания программы;
let name = '';

export const start = () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const end = () => {
  console.log(`Congratulations, ${name}!`);
};

// Задание
export const brainEvenTask = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const brainCalcTask = () => {
  console.log('What is the result of the expression?');
};

export const brainGCDTask = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const brainProgressionTask = () => {
  console.log('What number is missing in the progression?');
};

export const brainPrimeTask = () => {
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');
};

// Random number
const getRandomInt = (min, max) => {
  const low = Math.ceil(min);
  const high = Math.floor(max);
  return Math.floor(Math.random() * (high - low)) + low;
};

// Random ariphmetic operation
const getRandomOper = () => {
  const operList = ['+', '-', '*'];
  return operList[getRandomInt(0, 3)];
};

// Prime number
const isPrime = (value) => {
  let result = 0;

  for (let i = 1; i <= value; i += 1) {
    if (value % i === 0) {
      result += 1;
    }
  }

  /*
  if (result > 2) {
    return false;
  } else {
    return true;
  }
  */

  return (!(result > 2));
};

// Brain-even.js
export const brainEven = () => {
  const num = getRandomInt(1, 20);

  const evenOdd = (value) => value % 2 === 0;

  const answer = readlineSync.question(`Question: ${num} \nYour answer: `);

  if (evenOdd(num) === true && answer === 'yes') {
    console.log('Correct!');
    return true;
  }

  if (evenOdd(num) === true && answer === 'no') {
    console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${name}!`);
    return false;
  }

  if (evenOdd(num) !== true && answer === 'no') {
    console.log('Correct!');
    return true;
  }

  if (evenOdd(num) !== true && answer === 'yes') {
    console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${name}!`);
    return false;
  }

  return null;
};

// brain-calc
export const brainCalc = () => {
  const firstInt = getRandomInt(1, 12);
  const secondInt = getRandomInt(1, 12);
  const randomOper = getRandomOper();
  const expression = `${firstInt} ${randomOper} ${secondInt}`;
  let solution = null;

  if (randomOper === '+') {
    solution = firstInt + secondInt;
  }

  if (randomOper === '-') {
    solution = firstInt - secondInt;
  }

  if (randomOper === '*') {
    solution = firstInt * secondInt;
  }

  const answer = readlineSync.question(`Question: ${expression} \nYour answer: `);

  if (Number(answer) === solution) {
    console.log('Correct!');
    return true;
  }

  if (Number(answer) !== solution) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.\nLet's try again, ${name}!`);
    return false;
  }

  return null;
};

// brain-gcd
export const brainGCD = () => {
  const firstInt = getRandomInt(1, 100);
  const secondInt = getRandomInt(1, 100);

  let counter;
  if (firstInt >= secondInt) {
    counter = secondInt;
  } else {
    counter = firstInt;
  }

  let solution;
  for (let i = 1; i <= counter; i += 1) {
    if (firstInt % i === 0 && secondInt % i === 0) {
      solution = i;
    }
  }

  const answer = readlineSync.question(`Question: ${firstInt} ${secondInt} \nYour answer: `);

  if (Number(answer) === solution) {
    console.log('Correct!');
    return true;
  }

  if (Number(answer) !== solution) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.\nLet's try again, ${name}!`);
    return false;
  }

  return null;
};

// brain-progression
export const brainProgression = () => {
  const arr = [];

  const begin = getRandomInt(2, 50);
  const counter = getRandomInt(2, 5);

  arr.push(begin);

  let result = begin + counter;
  do {
    arr.push(result);
    result += counter;
  } while (arr.length < 10);

  const target = getRandomInt(1, 10);
  const miss = arr[target];
  arr[target] = '..';
  const str = arr.join(' ');

  const answer = readlineSync.question(`Question: ${str} \nYour answer: `);

  if (Number(answer) === miss) {
    console.log('Correct!');
    return true;
  }

  if (Number(answer) !== miss) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${miss}'.\nLet's try again, ${name}!`);
    return false;
  }

  return null;
};

// brain-prime
export const brainPrime = () => {
  const num = getRandomInt(2, 200);

  const answer = readlineSync.question(`Question: ${num} \nYour answer: `);

  if (isPrime(num) === true && answer === 'yes') {
    console.log('Correct!');
    return true;
  }

  if (isPrime(num) === true && answer === 'no') {
    console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${name}!`);
    return false;
  }

  if (isPrime(num) !== true && answer === 'no') {
    console.log('Correct!');
    return true;
  }

  if (isPrime(num) !== true && answer === 'yes') {
    console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${name}!`);
    return false;
  }

  return null;
};
