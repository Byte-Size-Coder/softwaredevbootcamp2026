// Basic function
function sayHello() {
  console.log("Hello, everyone!");
}

// calling a function
sayHello();

// parameters and arguements
// parameters are variables that are passed into a function
function greetPerson(name) {
  console.log("Hello, " + name + "!");
}

// calling the function with an argument
greetPerson("Matt");
greetPerson("Nicolas");

function calculateTotal(price, quantity) {
  const total = price * quantity;
  console.log(total);
}

calculateTotal(10, 5);

// return statement
// hey, return me some data back from your function
function calculateTotalWithReturn(price, quantity) {
  return price * quantity;
}

// create a variable to store the returned value
const total = calculateTotalWithReturn(7, 5);
console.log(total);

console.log(calculateTotalWithReturn(3, 4));
//console.log(12);

// const firstTotal = calculateTotalWithReturn(2, 3);
// console.log(firstTotal);

// const secondTotal = calculateTotalWithReturn(4, 5);
// console.log(secondTotal);

// const finalTotal = calculateTotalWithReturn(firstTotal, secondTotal);
// console.log(finalTotal);

// nested function calls
const total1 = calculateTotalWithReturn(
  calculateTotalWithReturn(calculateTotalWithReturn(2, 3), 3),
  calculateTotalWithReturn(4, 5),
);

console.log(total1);

// ECMAScript  ES6
// arrow functions
// modern look to functions
const calculateTotalArrowFunction = (price, quantity) => {
  const total = price * quantity;
  return total;
};

// short hand return example
const CalculateTotalArrowFunctionShort = (price, quantity) => price * quantity;

const calculateTotalArrowFunctionShort = (price, quantity) => price - quantity;

// same as
// function calculateTotalArrowFunctionShort(price, quantity) {
//   return price * quantity;
// }

const variableToStoreTotal = calculateTotalArrowFunctionShort(10, 8);
console.log(variableToStoreTotal);

const anotherTotal = calculateTotalArrowFunctionShort(5, 6);

// Part 2 - Scope

// global scope
// accessing anywhere "global"

const globalVariable = "I am a global variable";

function useGlobalVariable() {
  console.log(globalVariable);
}

useGlobalVariable();

// local scope refers to variables that are accessible only within the function they are defined in

// function scope
// lives within the function it is defined in
function useFunctionScopeVariable() {
  const functionScopeVariable = "I am a local variable";
  console.log(functionScopeVariable);

  const functionInside = () => {
    const functionInsideVariable = "I am inside the nested function";
    console.log(functionInsideVariable);
  };

  functionInside();
  //console.log(functionInsideVariable);

  // im at the end of the function, I no longer need the functionScopeVariable
  // functionScopeVariable is deleted
}

useFunctionScopeVariable();

//functionInside();

// block scope
// another example of local scope within a block
// anything defined when see squily braces {} is only accessible within that block
if (true) {
  let secretCode = "1234";
  const userName = "John Doe";

  console.log(secretCode);
  console.log(userName);
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//console.log(i); // BAAAD

//console.log(secretCode); // BAAAD

const gScore = 100;

function playGame() {
  const score = 50;
  console.log(score);
  console.log(gScore);
}

playGame();
console.log(gScore);
