const prompt = require("prompt-sync")();


console.log("\n");


const itemNo =  prompt("Please enter the product number: ");
console.log("\n");

const title =  prompt(`Please enter the name of the product for ${itemNo} : `);
console.log("\n");

const price = parseFloat(prompt(`Please enter the price of the item for ${itemNo}  :$`));
console.log("\n");

const discountRate =  parseFloat(prompt(`Please enter the discount rate that the customer is eligible for : `));
console.log("\n");

const discountAmount = (discountRate/100) * price;
const finalPrice = price - discountAmount;


console.log("\n\n");
console.log("**************CUSTOMER BILL *********************");
console.log(`Product Code :${itemNo}`);
console.log(`Product Title : ${title}`);
console.log(`Original Price : $${price.toFixed(2)}`);
console.log(`Discounted Amount : $${discountAmount.toFixed(2)}`);
console.log(`Customer Pay Amount: $${finalPrice.toFixed(2)}`);

