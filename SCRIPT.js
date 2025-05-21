let display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  // Prevent adding two operators in a row
  if (display.value === '' || '+-*/'.includes(display.value.slice(-1))) return;
  display.value += op;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}