// Caclulator App Script

// Set up screen and current number tracking
const screenValue = document.querySelector("#screen");

// Render calculations to screen
let currentScreen = "";
let argCount = 0;
let currentValue = 0;

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function addValue(arg) {
  if (numbers.includes(arg)) {
    currentScreen = currentScreen + arg;
    currentValue = currentValue + arg;
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
  addValue(0);
  renderScreen();
});
