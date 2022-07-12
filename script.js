'use strict';

const lenPlus = document.querySelector('.length-change-plus');
const lenMinus = document.querySelector('.length-change-minus');

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

  console.log(setSymbol);
});

let setNumber = false;
const number = document.querySelector('#number');

number.addEventListener('click', e => {
  const value = e.target.getAttribute('value');

  if (value == 'false') {
    e.target.setAttribute('value', true);
    setNumber = true;
  } else {
    e.target.setAttribute('value', 'false');
    setNumber = false;
  }
  console.log(setNumber);
});
