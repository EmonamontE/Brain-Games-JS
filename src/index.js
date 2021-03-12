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
/*
const isPrime = (value) => {
  let result = 0;

  for (let i = 1; i <= value; i += 1) {
    if (value % i === 0) {
      result += 1;
    }
  }

  if (result > 2) {
    return false;
  } else {
    return true;
  }
};
*/

// Brain-even.js
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
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.`);
    return false;
  }

  return null;
};
