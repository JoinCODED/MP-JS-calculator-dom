let consoleText = "0";
let operation = null;

function buttonClick(text) {
  console.log("Clicking", text);
  if (text >= 0 && text <= 9) {
    // number
    if (operation !== null) {
      // There was a previous operation
      let consoleNumber = parseInt(consoleText);
    } else {
      // No previous operation
      if (parseInt(consoleText) === 0) {
        console.log("Text is 0");
        consoleText = `${text}`;
        printOnConsole(consoleText);
      } else {
        console.log(consoleText);
        consoleText += text;
        printOnConsole(consoleText);
      }
    }
  } else {
    // operation
    switch (text) {
      case "+":
        break;
      case "-":
        break;
      case "*":
        break;
      case "/":
        break;
      case "=":
        break;
    }
  }
}

function printOnConsole(text) {
  console.log(text);
  document.getElementById("console").innerText = `${text}`;
}

/***
 * Super challenging part
 * History function
 */

// DON'T TOUCH THIS CODE
function updateHistory(historyArray) {
  const listComponent = (text) =>
    `
          <li >${text}</li>
      `;
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = historyArray
    .map((historyInstance) => listComponent(historyInstance))
    .join("");
}