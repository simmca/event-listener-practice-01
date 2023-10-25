let display;
let previous = null;
let operator = null;
let operatorClicked = false;

function performOperation() {
  let result;
  const current = parseNumber(display.value);
  previous = parseNumber(previous);

  switch (operator) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      result = previous / current;
      break;
  }

  display.value = result;
  operator = null;
}

/**
 * Parses the display value into a number.
 * @param {String} num 
 */
function parseNumber(num) {
  return num.includes('.') ? parseFloat(num) : parseInt(num);
}

/**
 * Capture the previous value and the clicked operator so that an operation can be performed.
 */
function clickOperator(event) {
  operator = event.target.value;
  previous = display.value;
  operatorClicked = true;
}

function clickNumber(event) {
  const val = event.target.value;

  if (operatorClicked) {
    display.value = val;
    operatorClicked = false;
  } else {
    display.value == 0 ? display.value = val : display.value += val;
  }

}

function clear() {
  display.value = 0;
}

document.addEventListener('DOMContentLoaded', () => {

  display = document.getElementById('display');

  numberButtons = document.querySelectorAll('.number');
  numberButtons.forEach(button => {
    button.addEventListener('click', clickNumber);
  })

  decimalButton = document.querySelector('.decimal');
  decimalButton.addEventListener('click', clickNumber);

  clearButton = document.querySelector('.all-clear');
  clearButton.addEventListener('click', clear);

  operatorButtons = document.querySelectorAll('.operator');
  operatorButtons.forEach(button => {
    button.addEventListener('click', clickOperator);
  })

  equalButton = document.querySelector('.equal-sign');
  equalButton.addEventListener('click', performOperation);

});

