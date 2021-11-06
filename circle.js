const prompt = require("prompt-sync")(); // this line imports the lib and assign it to a variable called prompt
const PI = 22/7;

// prompt and capture the radius enterd by the user in the console
const radius = parseFloat(prompt("Please enter a radius : "));

//calculate the area of the circle (BODMAS )
const areaOfCircle  = PI * radius ** 2; 

// calculate the circumference of the  circle
const circumferenceOfCircle = 2*PI*radius;

//output the area of the circle
console.log(`The area of the circle based on the radius (${radius}) is ${areaOfCircle.toFixed(2)}`);

//output the circumference of the circle 
console.log(`The circumference of the circle based on the radius (${radius}) is ${circumferenceOfCircle.toFixed(2)}`);

