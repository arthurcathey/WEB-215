'use strict';

// parseFloat(); // convert string to floating point number/decimal
// let decimalString = '5.99';
// let decStrConv = parseFloat(decimalString);
// console.log(decStrConv); // 5.99
// console.log(typeof decStrConv); // number 

// parseInt(); // convert string to integer/whole number, similar to Math.floor()
// let intString = '5.99';
// let intStrConv = parseInt(intString);
// console.log(intStrConv); // 5

// toFixed(2); // convert number to a rounded string, keeping specified number of decimals
// let total = 16.456;
// // let totalConv = total.toFixed(2);
// let totalConv = parseFloat(total.toFixed(2)); // convert back to number
// // Mdnwebdoc.com javascript will give definitions of builtin functions 

// let  microphone = 'Blue snowball';
// console.log(microphone.includes('snow')); 
// let text = 'javascript';
// let sub = text.substring(1,3); // from index 1 to index 3, not including index 3. any negative value goes in the opposite direction if 3 is -3 for example
// console.log(sub);

// Custom Functions
// function calculateArea() {
//   console.log('Calculating Area...');
//   let l = 10;
//   let w = 5;
//   let area = l * w;
//   return area;
// }

// calculateArea(); 

// hoisting allows this to be called before declaration
// console.log('Area is: ' + area);

//when using return replace everything with: 

// console.log(calculateArea());
// let theArea = calculateArea();
// console.log('Area is: ' + theArea);

// //variable interpolation:

// console.log(`Area is: ${theArea}`);

// function whatDoesReturnDo() {
//   console.log('Running');
//   return; // function stops running here after return
//   console.log('Still running');
// }

// whatDoesReturnDo();

// simplify with return statement: 
// function whatDoesReturnDo() {
//   let a = 1;
//   let b = 2;
//   let sum = a + b;
//   if (sum > 5) {
//     console.log('Sum is greater than 5');
// } else {
//   console.log('Sum is less than 5');
// }
// }
// whatDoesReturnDo();

// Simplifying: 

// function whatDoesReturnDo() {
//   let a = 1;
//   let b = 2;
//   let sum = a + b;
//   if (sum > 5) {
//     console.log('Sum is greater than 5');
//     return; // function stops running here after return
// } else {
//   console.log('Sum is less than 5');
// }
// }
// whatDoesReturnDo();

// Parameters vs Arguments

// parameters are variables in the declaration of the function
// arguments are the actual values passed to the function

// parameter = placeholder
// argument = actual value

// function calculateArea() {
//   let l = 10;
//   let w = 5;
//   let area = l * w;
//   return area;
// }

// let smallRect = calculateArea();
// console.log(smallRect);

// function calculateArea(l, w) {
//   let area = l * w;
//   return area;
// }

// let smallRect = calculateArea(5, 6);
// let bigRect = calculateArea(10, 20);
// console.log(bigRect);
// console.log(smallRect);

// let teenyWidth = 2;
// let teenyLength = 3;
// let teenyArea = calculateArea(teenyLength, teenyWidth);

// console.log(teenyArea);

// l and w are parameters
// 5 and 6 are arguments  
// you can have as many parameters as you want, but they must be in the same order as the arguments when calling the function

// Passing Data between Functions

// How not to pass data between functions

// function add(){
//   let a = 1;
//   let b = 2;
//   return a + b;
// }

// function sub() {
//   return a - b;
// }

//   console.log(add());
//   console.log(sub()); // NaN because a and b are not defined in sub function 

// add();

// //global: dangerous practice, avoid it
// // should be using variable declarations
// let a = 1;
// let b = 2;

// function add(){
//   let a = 1;
//   let b = 2;
//   return a + b;
// }

// Correct way to pass data between functions

// function formatCurrency(totalCents) {
//   let dollars = (totalCents / 100).toFixed(2);
//   dollars = `$${dollars}`; // using interpolation to add dollar sign
//   return dollars;
// }

// console.log(formatCurrency(2000)); // $20.00

// function makeChange(totalBill, totalPaid) {
//   totalBill *= 100;
//   totalPaid *= 100;
//   let changeInCents = totalPaid - totalBill;
//   let formattedChange = formatCurrency(changeInCents);
//   return formattedChange;
// }

// console.log(makeChange(9.50, 10));
// console.log(makeChange(13.75, 15));

// the function makeChange needs both parameters to work or it will break
// makeChange(9.50); // NaN
// makeChange(); // NaN
// makeChange(9.50, 10, 20, 30); // ignores extra parameters
// makeChange('hello', 'world'); // NaN
// makeChange(true, false); // 0.00 because true is 1 and false is 0
// makeChange(null, null); // 0.00 because null is 0 
// default parameters can be set in the function declaration to avoid NaN errors

// Example of default parameters    
// function makeChange(totalBill = 0, totalPaid = 0) {
//   totalBill *= 100;
//   totalPaid *= 100;
//   let changeInCents = totalPaid - totalBill;
//   let formattedChange = formatCurrency(changeInCents);
//   return formattedChange;
// }

// console.log(makeChange(9.50)); // 0.00
// console.log(makeChange()); // 0.00 
// console.log(makeChange(?????, 10)); 
// console.log(makeChange(undefined, 10));

// anonymous functions - functions without a name
// often used as arguments to other functions or assigned to variables funtion expressions

// function() {
//   console.log('Hello World'); // syntax error because function has no name
// }    
const sayHello = function(name) {
  return `Hello ${name}`; // function expression assigned to variable
}

console.log(sayHello('Arthur')); // Hello Arthur

// function expressions are not hoisted, so they must be declared before they are used

// arrow functions delete the function keyword and use a fat arrow (=>) instead
// also do not have their own 'this' context, they inherit 'this' from the surrounding code
// often used in array methods and event handlers
const sayHi = (name) => {
  return `Hi ${name}`;
}
console.log(sayHi('Cathey')); // Hi Cathey

// if the function has only one parameter, the parentheses can be omitted
const greet = name => {
  return `Greetings ${name}`;
}
console.log(greet('Programmer')); // Greetings Programmer

// if the function has no parameters, use empty parentheses
const greetWorld = () => {
  return 'Greetings World';
} 
console.log(greetWorld()); // Greetings World
// if the function body has only one expression, the curly braces and return statement can be omitted
const greetEveryone = () => `Greetings Everyone`;
console.log(greetEveryone()); // Greetings Everyone
// arrow functions do not have their own 'this' context, they inherit 'this' from the surrounding code
// often used in array methods and event handlers
const sayHiShort = name => `Hi ${name}`;
console.log(sayHiShort('Short')); // Hi Short
// Callback functions - functions passed as arguments to other functions and executed later
// often used in event handling and asynchronous programming

function formatCurrency(totalCents) {
  let dollars = (totalCents / 100).toFixed(2);
  dollars = `$${dollars}`; // using interpolation to add dollar sign
  return dollars;
}
console.log(formatCurrency(298)); // $2.98

//convert into arrow function
//using const to prevent reassignment

const centsToDollars = totalCents => {  
  let dollars = (totalCents / 100).toFixed(2);
  dollars = `$${dollars}`;
  return dollars;
}
console.log(centsToDollars(450)); // $4.50

function whereAmI() {
  const url = window.location.href;
  return url;
}
console.log(whereAmI()); // logs current URL
//convert into arrow function
const currentPage = () => window.location.href;

console.log(currentPage()); // logs current URL

function buildGuitar(body, neck, pickups) {
  const guitar = {
    body: `${body}`,
    neck: `${neck}`,
    pickups: `${pickups}`
  };
  return guitar;
}

const gtr1 = buildGuitar('Les Paul', 'Mahogany', 'Humbuckers');
const gtr2 = buildGuitar('Stratocaster', 'Maple', 'Single Coils');

//convert into arrow function
const customGuitarMaker = (body, neck, pickups) =>({
  body: `${body}`,
  neck: `${neck}`, 
  pickups: `${pickups}`
});

console.log(gtr1); // logs guitar object
console.log(gtr2); // logs guitar object

//IIFE - Immediately Invoked Function Expression
// function that runs as soon as it is defined
// often used to create a new scope and avoid polluting the global namespace  
// (function() {
//   let name = 'IIFE';
//   console.log(`The function ${name} runs immediately`);
// })(); // This function IIFE runs immediately
// // cannot be called again because it has no name

(function(name, job) {
  let name = 'IIFE';
  console.log(`The ${job} ${name} runs immediately`);
})('name', 'job');
