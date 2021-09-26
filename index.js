/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */

 //const firstNumber =  ("please enter the first number:  ");
  //console.log(`${firstNumber}` );
 
  //const secondNumber =  ("please enter the second number:  ");
  //console.log(`${secondNumber}` );
 //const operation = prompt("Please enter an operation (+, -, *, /)");
  
  //if (firstNumber >=0){
 //   printOnConsole(firstNumber);
//} 
//else {
////  printOnConsole('')
//}


  function buttonClick(text) {

  const firstNumber =  ("");
 const secondNumber =  ("");
 const operation = prompt(" (+, -, *, /)");
 const result = ("=")
  console.log("Clicking", text);

  

  if( text === "=" ||text === "AC" || text === "+" || text === "-" ||text === "*" ||text === "%" || text === "±" ||text === "÷"){

    printOnConsole('')
  }
    if (text >=0 && text<=9){
      printOnConsole(text)
    }
      
    if (firstNumber >= 0 && firstNumber  <= 9){
      console.log(firstNumber operation secoundNumber)
    }

}



/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
printOnConsole("123");
updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
