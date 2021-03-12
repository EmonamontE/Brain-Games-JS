#!/usr/bin/env node

import askName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

function Greetings() {
  askName();
}

Greetings();
