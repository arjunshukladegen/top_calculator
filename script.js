// Caclulator App Script

// Set up screen and current number tracking
const screenValue = document.querySelector("#screen");

let args = ["", "", ""];
let currentArg = 0;

// Render calculations to screen
let currentScreen = "";
let widthCount = 0;
const MAXWIDTH = 12;

// Array for checking if the button was a number
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Function for Number Input
function addValue(arg) {
  if (arg === "0" && currentValue === "0") {
    return;
  } else if (numbers.includes(arg)) {
    currentScreen = currentScreen + arg;
    args[currentArg] = args[currentArg] + arg;
    widthCount += 1;
  }
}

// Addition Function
function calcAdd() {
  if (args[0] === "") {
    return;
  } else if (currentArg === 0) {
    currentScreen = currentScreen + ` + `;
    args[currentArg + 1] = `+`;
    widthCount += 3;
    currentArg += 2;
  } else {
    return;
  }
}

// Subtraction Function
function calcSubtract() {
  if (args[0] === "") {
    return;
  } else if (currentArg === 0) {
    currentScreen = currentScreen + ` - `;
    args[currentArg + 1] = `-`;
    widthCount += 3;
    currentArg += 2;
  } else {
    return;
  }
}

// Multiplication Function
function calcMultiply() {
  if (args[0] === "") {
    return;
  } else if (currentArg === 0) {
    currentScreen = currentScreen + ` * `;
    args[currentArg + 1] = `*`;
    widthCount += 3;
    currentArg += 2;
  } else {
    return;
  }
}

// Division Function
function calcDivide() {
  if (args[0] === "") {
    return;
  } else if (currentArg === 0) {
    currentScreen = currentScreen + ` / `;
    args[currentArg + 1] = `/`;
    widthCount += 3;
    currentArg += 2;
  } else {
    return;
  }
}

function renderScreen() {
  screenValue.value = currentScreen;
}

renderScreen(currentScreen);

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
  calcAdd();
  renderScreen();
});

Button.subtract.addEventListener("click", function (e) {
  calcSubtract();
  renderScreen();
});

Button.multiply.addEventListener("click", function (e) {
  calcMultiply();
  renderScreen();
});

Button.divide.addEventListener("click", function (e) {
  calcDivide();
  renderScreen();
});

Button.clear.addEventListener("click", function (e) {
  currentScreen = "";
  args = ["", "", ""];
  currentArg = 0;
  widthCount = 0;
  renderScreen();
});
