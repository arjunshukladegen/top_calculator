// Caclulator App Script

// Set up screen and current number tracking
const screenValue = document.querySelector("#screen");

// Render calculations to screen
let currentScreen = "";
let screenArgs = {};
let currentValue = 0;

function renderScreen(currentScreen) {
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
