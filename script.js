'use strict';

const containerApp = document.querySelector('.main');
const app = document.querySelector('.section-1');
const lenPlus = document.querySelector('.length-change-plus');
const lenMinus = document.querySelector('.length-change-minus');
const lengthDisplay = document.querySelector('.length-display');
const minusSign = document.querySelector('.length--minus');
const PlusSign = document.querySelector('.length--plus');
const generatePassword = document.querySelector('.genPassword');
const passwordGen = document.querySelector('.passGenerated');
const btnExit = document.querySelector('.exit');
const btnGo = document.querySelector('.go');

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
  if (parseInt(lengthDisplay.textContent) < 20) {
    lengthDisplay.textContent++;
    console.log('This is plus');
  }
});

// generating random
const letters = 'abcdefghijklmnopqrstuvwxyz';
const letterUpper = letters.toUpperCase();
const numbers = '0123456789';
const symbols = '#$%&()=~|*}@:;/?><+*]';

const password = [letters, letterUpper];

let newPassword = '';

function genPassword(length) {
  let result = letters + letterUpper;

  // const passwordLength = result.length;

  if (setSymbol) {
    result += symbols;
  }
  if (setNumber) {
    result += numbers;
  }

  var a = result.split(''),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  result = a.join('');

  return result.slice(2, parseInt(length) + 2);
}

generatePassword.addEventListener('click', () => {
  passwordGen.innerText = genPassword(lengthDisplay.textContent);
});

btnExit.addEventListener('click', () => {
  // document.getElementById('set1').style.display = 'block';
  containerApp.style.opacity = 0;

  app.style.opacity = 100;
});
btnGo.addEventListener('click', () => {
  console.log('hello');

  containerApp.style.opacity = 100;
  app.style.opacity = 0;
});
