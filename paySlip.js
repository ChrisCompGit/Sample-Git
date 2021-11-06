const prompt = require("prompt-sync")();


console.log("\n");

const TAX_RATE = 0.25;
const employeeName =  prompt("Please enter the employee name : ");
const rateOfPay = parseFloat(prompt(`Please enter ${employeeName}'s rate of pay: `));
const hoursWorked =  parseFloat(prompt(`Please enter the number of hours ${employeeName} worked for the week : `));


const grossPay = hoursWorked * rateOfPay;


const deductions = TAX_RATE * grossPay; 

const netPay = grossPay - deductions;


console.log("\n\n"); //THis creates the new lines in our output
console.log("**************EMPLOYEE PAY SLIP *********************");
console.log(`Employee : ${employeeName}`);
console.log(`Gross Pay : $${grossPay.toFixed(2)}`);
console.log(`Total Deductions : $${deductions.toFixed(2)}`);
console.log(`Net Pay : ${netPay.toFixed(2)}`);

