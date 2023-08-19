`use strict`;
// Notating the theme colors for each theme
// toggle 1 - background = bg-slate-600, outputBox = bg-slate-800, text = white, buttonText = text-slate-600, buttonBackground = bg-slate-700, buttonColor = bg-stone-300
// toggle 2 -  bg-pink-300,
// toggle 3 -  bg-stone-800,

// Declaring radio button input selections
const themeOne = document.getElementById(`toggleOne`);
const themeTwo = document.getElementById(`toggleTwo`);
const themeThree = document.getElementById(`toggleThree`);

// Declaring all the variables that are needing styling when changing the calc theme
const main = document.querySelector(`body`);
const outputBox = document.getElementById(`outputField`);
const buttonContainer = document.getElementById(`buttonContainer`);
const inputButtons = document.getElementById(`inputButtons`);

// Declaring buttons and functionality variables
const btnOne = document.getElementById(`btn1`);
const btnTwo = document.getElementById(`btn2`);
const btnThree = document.getElementById(`btn3`);
const btnFour = document.getElementById(`btn4`);
const btnFive = document.getElementById(`btn5`);
const btnSix = document.getElementById(`btn6`);
const btnSeven = document.getElementById(`btn7`);
const btnEight = document.getElementById(`btn8`);
const btnNine = document.getElementById(`btn9`);
const btnZero = document.getElementById(`btn0`);
const btnDel = document.getElementById(`btnDel`);
const btnReset = document.getElementById(`btnReset`);
const btnEquals = document.getElementById(`btnEquals`);
const btnPlus = document.getElementById(`btnPlus`);
const btnMinus = document.getElementById(`btnMinus`);
const btnMultiply = document.getElementById(`btnMultiply`);
const btnDivide = document.getElementById(`btnDivide`);
const btnPeriod = document.getElementById(`btnPeriod`);

// Declaring output field(s)

const results = document.getElementById(`results`);

// Creating an array for the buttons sharing colors to make styling them all easier

const btnNumbersAndOperators = [
  btnOne,
  btnTwo,
  btnThree,
  btnFour,
  btnFive,
  btnSix,
  btnSeven,
  btnEight,
  btnNine,
  btnZero,
  btnPlus,
  btnMinus,
  btnMultiply,
  btnDivide,
  btnPeriod,
];

// Functions to clear classes prior to applying themes
function clearColors() {
  main.classList.remove(`bg-slate-600`, `bg-red-400`, `bg-stone-700`);
  outputBox.classList.remove(`bg-slate-800`, `bg-red-300`, `bg-stone-900`);
  buttonContainer.classList.remove(
    `bg-slate-700`,
    `bg-red-200`,
    `bg-stone-600`
  );
  inputButtons.classList.remove(`bg-slate-700`, `bg-red-200`, `bg-stone-600`);
  btnDel.classList.remove(`bg-slate-400`, `bg-red-400`, `bg-zinc-800`);
  btnReset.classList.remove(`bg-slate-400`, `bg-red-400`, `bg-zinc-800`);
  // For loop to select every individual button in the array. Same for loop will be used to add the element colors
  for (let i = 0; i < btnNumbersAndOperators.length; i++) {
    btnNumbersAndOperators[i].classList.remove(
      `bg-stone-300`,
      `bg-red-100`,
      `bg-stone-500`,
      `text-slate-600`,
      `text-red-400`,
      `text-slate-300`
    );
  }
}

// Event handlers for the different themes

// Default : blue/gray
themeOne.addEventListener(`click`, function () {
  clearColors();
  main.classList.add(`bg-slate-600`);
  outputBox.classList.add(`bg-slate-800`);
  buttonContainer.classList.add(`bg-slate-700`);
  inputButtons.classList.add(`bg-slate-700`);
  btnDel.classList.add(`bg-slate-400`);
  btnReset.classList.add(`bg-slate-400`);
  for (let i = 0; i < btnNumbersAndOperators.length; i++) {
    btnNumbersAndOperators[i].classList.add(`bg-stone-300`, `text-slate-600`);
  }
});

// Pink/salmon
themeTwo.addEventListener(`click`, function () {
  clearColors();
  main.classList.add(`bg-red-400`);
  outputBox.classList.add(`bg-red-300`);
  buttonContainer.classList.add(`bg-red-200`);
  inputButtons.classList.add(`bg-red-200`);
  btnDel.classList.add(`bg-red-400`);
  btnReset.classList.add(`bg-red-400`);
  for (let i = 0; i < btnNumbersAndOperators.length; i++) {
    btnNumbersAndOperators[i].classList.add(`bg-red-100`, `text-red-400`);
  }
});

// Brown/green
themeThree.addEventListener(`click`, function () {
  clearColors();
  main.classList.add(`bg-stone-700`);
  outputBox.classList.add(`bg-stone-900`);
  buttonContainer.classList.add(`bg-stone-600`);
  inputButtons.classList.add(`bg-stone-600`);
  btnDel.classList.add(`bg-zinc-800`);
  btnReset.classList.add(`bg-zinc-800`);
  for (let i = 0; i < btnNumbersAndOperators.length; i++) {
    btnNumbersAndOperators[i].classList.add(`bg-stone-500`, `text-slate-300`);
  }
});

// Array(s) for storing input, output, and calculated results

let displayArr = [];
let savedInput = ``;
let selectedOperation = ``;
let displayNumber = ``;
let output = ``;

// Function to reset displayArr for the reset button and for selecting an operator

function resetDisplayArr() {
  displayArr = [0];
  results.innerText = 0;
}

// function for joining the clicked input into the display array

function joinArr(num) {
  if (displayArr[0] == 0) {
    displayArr.pop();
  }
  displayArr.push(num);
  displayNumber = displayArr.join(``);
  results.innerHTML = displayNumber;
}

// Functions for when operators are selected to store the first number and reset display with the new number/operator

function storeInput() {
  savedInput = displayNumber;
  displayNumber = 0;
}

// Calculate function

function calculate() {
  if (selectedOperation === `+`) {
    output = parseFloat(savedInput) + parseFloat(displayNumber);
    results.innerText = output;
    displayNumber = output;
  } else if (selectedOperation === `-`) {
    output = parseFloat(savedInput) - parseFloat(displayNumber);
    results.innerText = output;
    displayNumber = output;
  } else if (selectedOperation === `*`) {
    output = parseFloat(savedInput) * parseFloat(displayNumber);
    results.innerText = output;
    displayNumber = output;
  } else if (selectedOperation === `/`) {
    output = parseFloat(savedInput) / parseFloat(displayNumber);
    results.innerText = output;
    displayNumber = output;
  }
}

// Event listeners for the buttons
//

// Del, Reset, Equals

btnDel.addEventListener(`click`, function () {
  if (displayNumber.length > 0) {
    displayArr.pop(); // Remove the last digit from displayArr
    displayNumber = displayArr.join(""); // Update displayNumber by joining displayArr
    results.innerHTML = displayNumber;
  } else {
    results.innerHTML = 0;
  }
});

btnReset.addEventListener(`click`, function () {
  resetDisplayArr();
});

btnEquals.addEventListener(`click`, function () {
  calculate();
});

// Operations

btnPlus.addEventListener(`click`, function () {
  storeInput();
  calculate();
  selectedOperation = `+`;
  displayArr = [];
  results.innerText = selectedOperation;
});
btnMinus.addEventListener(`click`, function () {
  storeInput();
  selectedOperation = `-`;
  displayArr = [];
  results.innerText = selectedOperation;
});
btnDivide.addEventListener(`click`, function () {
  storeInput();
  selectedOperation = `/`;
  displayArr = [];
  results.innerText = selectedOperation;
});
btnMultiply.addEventListener(`click`, function () {
  storeInput();
  selectedOperation = `*`;
  displayArr = [];
  results.innerText = selectedOperation;
});
btnPeriod.addEventListener(`click`, function () {
  joinArr(`.`);
});

// Numbers

btnOne.addEventListener(`click`, function () {
  joinArr(1);
});
btnTwo.addEventListener(`click`, function () {
  joinArr(2);
});
btnThree.addEventListener(`click`, function () {
  joinArr(3);
});
btnFour.addEventListener(`click`, function () {
  joinArr(4);
});
btnFive.addEventListener(`click`, function () {
  joinArr(5);
});
btnSix.addEventListener(`click`, function () {
  joinArr(6);
});
btnSeven.addEventListener(`click`, function () {
  joinArr(7);
});
btnEight.addEventListener(`click`, function () {
  joinArr(8);
});
btnNine.addEventListener(`click`, function () {
  joinArr(9);
});
btnZero.addEventListener(`click`, function () {
  joinArr(0);
});
