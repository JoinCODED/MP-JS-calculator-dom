/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */

var firstNumber = "";
var secondNumber = "";
var operation = "";
var nextValue = 0;

function buttonClick(text) {
  console.log("Clicking", text);

  if (text == "AC") {
    firstNumber = "";
    secondNumber = "";
    operation = "";
    nextValue = 0;
    printOnConsole("");
  }

  if (
    text === "+" ||
    text === "-" ||
    text === "x" ||
    text === "%" ||
    text === "±" ||
    text === "÷"
  ) {
    console.log(text, "operaion");
    if (firstNumber != "") {
      printOnConsole(firstNumber + " " + text);
      operation = text;
      nextValue = 1;
    } else {
      printOnConsole("");
    }
  }
  if (text >= 0 && text <= 9) {
    if (nextValue == 0) {
      printOnConsole((firstNumber += text));
    } else if (nextValue == 1) {
      printOnConsole(
        firstNumber + " " + operation + " " + (secondNumber += text)
      );
    }
  }
  if (text === "=") {
    if (operation == "+") {
      result = parseInt(firstNumber) + parseInt(secondNumber);
      printOnConsole(result);
    } else if (operation == "-") {
      result = parseInt(firstNumber) - parseInt(secondNumber);
      printOnConsole(result);
    } else if (operation == "*" || operation == "x") {
      result = parseInt(firstNumber) * parseInt(secondNumber);
      printOnConsole(result);
    } else if (operation == "/" || operation == "÷") {
      result = parseInt(firstNumber) / parseInt(secondNumber);
      printOnConsole(result);
    }
    history.push(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
    updateHistory(history);
    firstNumber = result;
    secondNumber = "";
    operation = "";
    nextValue = 1;
  }
}
// if (firstNumber >= 0 && firstNumber  <= 9){
// console.log(firstNumber operation secoundNumber)

/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing

let history = [];
history = [];
printOnConsole("123");
updateHistory([]);
