'use strict';

const lenPlus = document.querySelector('.length-change-plus');
const lenMinus = document.querySelector('.length-change-minus');
const lengthDisplay = document.querySelector('.length-display');
const minusSign = document.querySelector('.length--minus');
const PlusSign = document.querySelector('.length--plus');
const generatePassword = document.querySelector('.genPassword');
const passwordGen = document.querySelector('.passGenerated');

// symbols toggling
let setSymbol = false;
const symbol = document.querySelector('#symbol');

symbol.addEventListener('click', function (e) {
  const value = e.target.getAttribute('data-value');

  if (value == 'false') {
    e.target.setAttribute('data-value', true);
    setSymbol = true;
  } else {
    e.target.setAttribute('data-value', 'false');
    setSymbol = false;
  }
});

// Numbers Toggling
let setNumber = false;
const number = document.querySelector('#number');

number.addEventListener('click', e => {
  const value = e.target.getAttribute('data-value');

  if (value == 'false') {
    e.target.setAttribute('data-value', true);
    setNumber = true;
  } else {
    e.target.setAttribute('data-value', 'false');
    setNumber = false;
  }
});

// For the length Increment and decrement
lengthDisplay.textContent = 10;

minusSign.addEventListener('click', () => {
  if (parseInt(lengthDisplay.textContent) > 4) {
    --lengthDisplay.textContent;
  }
});
PlusSign.addEventListener('click', () => {
  if (parseInt(lengthDisplay.textContent) < 15) {
    lengthDisplay.textContent++;
    console.log('This is plus');
  }
});

// generating random
const letters = 'abcdefghijklmnopqrstuvwxyz';
const letterUpper = letters.toUpperCase();
const numbers = '0123456789';
const symbols = "#$%&'()=~|`*}@:;/.,?><,+*]";

let password = [letters, letterUpper, numbers, symbols];

// funtion for if the symbol is true
function symbolIsTrue() {
  if (setSymbol) console.log('symbol is true');
}

function genPassword(length) {
  let result = '';
  if (setNumber && setSymbol) {
    password === [letters, letterUpper, number, symbols].join('');

    const passwordLength = password.length;

    for (let i = 0; i < length; i++) {
      result += password.charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (setNumber) {
    password === [letters, letterUpper, numbers].join('');

    const passwordLength = password.length;

    for (let i = 0; i < length; i++) {
      result += password.charAt(Math.floor(Math.random() * passwordLength));
    }
  } else if (setSymbol) {
    password === [letters, letterUpper, symbols].join('');

    const passwordLength = password.length;

    for (let i = 0; i < length; i++) {
      result += password.charAt(Math.floor(Math.random() * passwordLength));
    }
  } else {
    password === [letters, letterUpper].join('');

    const passwordLength = password.length;

    for (let i = 0; i < length; i++) {
      result += password.charAt(Math.floor(Math.random() * passwordLength));
    }
  }

  return result;
}

generatePassword.addEventListener('click', () => {
  passwordGen.innerText = genPassword(lengthDisplay.textContent);
  // genPassword(lengthDisplay.textContent);
});
