// Caclulator App Script

// Set up screen and current number tracking
const screenValue = document.querySelector("#screen");

let args = ["", "", ""];
let currentArg = 0;

// Render calculations to screen
let widthCount = 0;
const MAXWIDTH = 12;

// Array for checking if the button was a number
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Function for Number Input
function addValue(arg) {
  if (arg === "0" && args[currentArg] === "0") {
    return;
  } else if (numbers.includes(arg) && args[currentArg].length < 5) {
    args[currentArg] = args[currentArg] + arg;
  }
}

// Addition Function
function calcAdd() {
  let num1 = parseFloat(args[0]);
  let num2 = parseFloat(args[2]);
  let result = (num1 + num2).toFixed(2);
  return Number(result);
}

// Subtraction Function
function calcSubtract() {
  let num1 = parseFloat(args[0]);
  let num2 = parseFloat(args[2]);
  let result = (num1 - num2).toFixed(2);
  return Number(result);
}

// Multiplication Function
function calcMultiply() {
  let num1 = parseFloat(args[0]);
  let num2 = parseFloat(args[2]);
  let result = (num1 * num2).toFixed(2);
  return Number(result);
}

// Division Function
function calcDivide() {
  let num1 = parseFloat(args[0]);
  let num2 = parseFloat(args[2]);
  let result = (num1 / num2).toFixed(2);
  return Number(result);
}

function renderScreen() {
  if (args[1] === "") {
    widthCount = args[0].length;
    screenValue.value = `${args[0]}`;
  } else {
    widthCount = args[0].length + args[1].length + args[2].length + 1;
    screenValue.value = `${args[0]} ${args[1]} ${args[2]}`;
  }
}

// Initialize all the buttons on the numpad
const Button = {
  zero: document.querySelector("#zero"),
  one: document.querySelector("#one"),
  two: document.querySelector("#two"),
  three: document.querySelector("#three"),
  four: document.querySelector("#four"),
  five: document.querySelector("#five"),
  six: document.querySelector("#six"),
  seven: document.querySelector("#seven"),
  eight: document.querySelector("#eight"),
  nine: document.querySelector("#nine"),
  add: document.querySelector("#add"),
  subtract: document.querySelector("#subtract"),
  multiply: document.querySelector("#multiply"),
  divide: document.querySelector("#divide"),
  one: document.querySelector("#one"),
  period: document.querySelector("#period"),
  enter: document.querySelector("#enter"),
  clear: document.querySelector("#clear"),
  backspace: document.querySelector("#backspace"),
};

Button.zero.addEventListener("click", function (e) {
  addValue("0");
  renderScreen();
});

Button.one.addEventListener("click", function (e) {
  addValue("1");
  renderScreen();
});

Button.two.addEventListener("click", function (e) {
  addValue("2");
  renderScreen();
});

Button.three.addEventListener("click", function (e) {
  addValue("3");
  renderScreen();
});

Button.four.addEventListener("click", function (e) {
  addValue("4");
  renderScreen();
});

Button.five.addEventListener("click", function (e) {
  addValue("5");
  renderScreen();
});

Button.six.addEventListener("click", function (e) {
  addValue("6");
  renderScreen();
});

Button.seven.addEventListener("click", function (e) {
  addValue("7");
  renderScreen();
});

Button.eight.addEventListener("click", function (e) {
  addValue("8");
  renderScreen();
});

Button.nine.addEventListener("click", function (e) {
  addValue("9");
  renderScreen();
});

Button.add.addEventListener("click", function (e) {
  if (args[0] === "") {
    return;
  } else if (currentArg === 0) {
    args[currentArg + 1] = `+`;
    currentArg += 2;
  } else if (currentArg === 2) {
    calculate();
    args[currentArg + 1] = `+`;
    currentArg += 2;
  } else {
    return;
  }
  renderScreen();
});

Button.subtract.addEventListener("click", function (e) {
  if (args[0] === "") {
    return;
  } else if (currentArg === 0) {
    args[currentArg + 1] = `-`;
    currentArg += 2;
  } else if (currentArg === 2) {
    calculate();
    args[currentArg + 1] = `-`;
    currentArg += 2;
  } else {
    return;
  }
  renderScreen();
});

Button.multiply.addEventListener("click", function (e) {
  if (args[0] === "") {
    return;
  } else if (currentArg === 0) {
    args[currentArg + 1] = `*`;
    currentArg += 2;
  } else if (currentArg === 2) {
    calculate();
    args[currentArg + 1] = `*`;
    currentArg += 2;
  } else {
    return;
  }
  renderScreen();
});

Button.divide.addEventListener("click", function (e) {
  if (args[0] === "") {
    return;
  } else if (currentArg === 0) {
    args[currentArg + 1] = `/`;
    currentArg += 2;
  } else if (currentArg === 2) {
    calculate();
    args[currentArg + 1] = `/`;
    currentArg += 2;
  } else {
    return;
  }
  renderScreen();
});

Button.clear.addEventListener("click", function (e) {
  args = ["", "", ""];
  currentArg = 0;
  renderScreen();
});

Button.enter.addEventListener("click", function (e) {
  calculate();
});

function calculate() {
  if (args[2] === "") {
    return;
  } else if (args[1] === "+") {
    args[0] = String(calcAdd());
    args[1] = "";
    args[2] = "";
    currentArg = 0;
    renderScreen();
  } else if (args[1] === "-") {
    args[0] = String(calcSubtract());
    args[1] = "";
    args[2] = "";
    currentArg = 0;
    renderScreen();
  } else if (args[1] === "*") {
    args[0] = String(calcMultiply());
    args[1] = "";
    args[2] = "";
    currentArg = 0;
    renderScreen();
  } else if (args[1] === "/") {
    args[0] = String(calcDivide());
    args[1] = "";
    args[2] = "";
    currentArg = 0;
    renderScreen();
  }
}

Button.backspace.addEventListener("click", function (e) {
  if (args[0].length <= 0) {
    return;
  } else if (currentArg === 2 && args[currentArg] === "") {
    args[1] = "";
    currentArg = 0;
    renderScreen();
  } else {
    args[currentArg] = args[currentArg].slice(0, args[currentArg].length - 1);
    renderScreen();
  }
});

Button.period.addEventListener("click", function (e) {
  if (args[currentArg] === "") {
    return;
  } else if (args[currentArg].includes(".") === false) {
    args[currentArg] += ".";
    renderScreen();
  }
});
