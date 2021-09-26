/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */

 //const firstNumber = ("Please enter first number:  ");
 //const secondNumber = ("Please enter second number:");
// const operation = ("Please enter an operation (+, -, *, /)");

 let result = 
    if (isNaN(parseInt(firstNumber)) || isNaN(parseInt(secondNumber))){
    console.log("not a number")
  function buttonClick(text) {
  console.log("Clicking", text);

  printOnConsole(text);

  if (operation == '+') {
    result = parseInt(firstNumber) + parseInt(secondNumber);
    console.log(firstNumber+ " " + operation+ " "+ secondNumber +" = "+ result);
}



//  if (buttonClick === 'clear'){
  //  indexedDB.html = "";
  //  onlydecimal= false;

 // }


  //function deleteItems() {
    //localStorage.clear();

 
 //onclick(buttonClick('AC'))
  // Write your code here
}



/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
printOnConsole("123");
updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
