document.addEventListener('DOMContentLoaded', function () {
  const display = document.querySelector('.display');
  const buttons = document.querySelectorAll('button');

  let currentInput = '0';
  let operator = '';
  let previousInput = '';

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let buttonValue = button.textContent;

      if (!isNaN(buttonValue) || buttonValue === '.') {
        handleNumber(buttonValue);
      } else if (['+', '-', '×', '÷'].includes(buttonValue)) {
        handleOperator(buttonValue);
      } else if (button.dataset.action === 'equals') {
        calculate();
      } else if (buttonValue === 'AC') {
        clear();
      }
    });
  });

  function handleNumber(buttonValue) {
    if (currentInput === '0' && buttonValue !== '.') {
      currentInput = buttonValue;
    } else {
      currentInput = buttonValue;
    }
    displayUpdate(currentInput);
  }

  function displayUpdate(currentInput) {
    display.textContent = currentInput;
  }

  function handleOperator(buttonValue) {
    if (currentInput) {
      previousInput = currentInput;
      currentInput = '';
      operator = buttonValue;
    }
  }

  function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) {
      console.error('Invalid input');
      return;
    }

    switch (operator) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '×':
        result = prev * curr;
        break;
      case '÷':
        result = curr !== 0 ? prev / curr : 'Error';
        break;

      default:
        break;
    }

    currentInput = result.toString();
    operator = '';
    displayUpdate(currentInput);
  }

  function clear() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    displayUpdate(currentInput);
  }
});
