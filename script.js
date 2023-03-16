// отримання посилань на елементи HTML
const result = document.querySelector('#result');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

// функції для виконання математичних операцій
function add() {
  result.value = parseFloat(input1.value) + parseFloat(input2.value);
}

function subtract() {
  result.value = parseFloat(input1.value) - parseFloat(input2.value);
}

function multiply() {
  result.value = parseFloat(input1.value) * parseFloat(input2.value);
}

function divide() {
  result.value = parseFloat(input1.value) / parseFloat(input2.value);
}

// додавання обробників подій
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
