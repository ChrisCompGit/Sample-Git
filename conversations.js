const prompt = require("prompt-sync")();
console.log("\n")


const AGE_DEDUCTION = 5;

const name =  prompt("Hi, what's your name : ");
console.log(`\nWelcome to our show, ${name}`);

const age =  parseInt(prompt("How old are you? : "));
const mamaguy_age = age-AGE_DEDUCTION;
console.log(`Hmmmmmmm, you don't look like a day over ${mamaguy_age}`)


console.log('\n');
const location = prompt(`Tell me, ${name}, where do you live? : `);
console.log(`\nOh, I've heard that ${location} is a lovely place`);


