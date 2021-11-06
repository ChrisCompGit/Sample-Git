const prompt = require("prompt-sync")(); // this line imports the lib and assign it to a variable called prompt

console.log("\n");

const firstNumber = parseFloat(prompt("Please enter a number : "));
const secondNumber = parseFloat(prompt("Please enter another number : "));

//calculate the sum
const sum  = firstNumber + secondNumber; 

//output answer
console.log(`\nThe sum of ${firstNumber} + ${secondNumber} is ${sum}`);


