// This is a comment
/*
 This is a multi-line comment
 more to this comment
*/

// console log
// console.log("Hello World!");
// console.log(10);
// console.log(10 + 10);
// console.log(10 < 5);

// variables
let Name = "Matt"; // variable that can be reassigned
console.log(Name);
const age = 30; // constant - cannot be reassigned
Name = 15;
console.log(Name);
console.log(age);

// Data types

// string - text data "" OR ''
const myString = "Hello World"; // string data type
const myString2 = "Hello World"; // string data type using single quotes

//const stringThatsBad = "The man said "hey!""; // bad does not understand
const stringThatsGood = 'The man said "hey!"'; // good uses single quotes to include double quotes inside
const anotherGoodString = 'The man said "hey!"'; // good uses double quotes with escape character for inner double quotes

const newName = "Matt";

const greeting = "Hello, " + newName + "!"; // concatenating strings to create a greeting message
const greeting2 = `Hello, ${newName}!`; // using template literals for string interpolation
console.log(greeting);
console.log(greeting2);

// Number - whole or decimal numeric values (positive and negative)
let myNumber = 42; // whole number
let myDecimal = 3.14; // decimal number
let temperature = -5; // negative number

let pretendnumber = "100";

console.log(myNumber);
console.log(myDecimal);
console.log(temperature);
console.log(pretendnumber);

let sum = myNumber + myDecimal; // adding a whole number and a decimal number
console.log(sum);

let sumWithPretend = myNumber + pretendnumber; // adding a number and a string "42100"
console.log(sumWithPretend);

// arithmetic operations
// addition
let addition = myNumber + myDecimal;
console.log(addition);

// subtraction
let subtraction = myNumber - myDecimal;
console.log(subtraction);

// multiplication
let multiplication = myNumber * myDecimal;
console.log(multiplication);

// division
let division = myNumber / myDecimal;
console.log(division);

// modulus (remainder)
let modulus = myNumber % myDecimal;
console.log(modulus);

// Booleans - true or false values
let isTrue = true;
let isFalse = false; // 0 is false, any non-zero number is truthy
console.log(isTrue);
console.log(isFalse);

// comparison operators
console.log(10 > 5); // greater than
console.log(10 < 5); // less than
console.log(5 >= 5); // greater than or equal to
console.log(10 <= 5); // less than or equal to
console.log(10 === 5); // strictly equal to
console.log(10 !== 5); // not equal to
console.log(isTrue !== isFalse);

// logical operators
console.log(isTrue && isFalse); // logical AND // both must be true to return true
console.log(isTrue || isFalse); // logical OR // one must be true to return true
console.log(!isTrue); // logical NOT // inverts the boolean value

console.log(!isFalse === isTrue);

// undefined - a variable that has been declared but not assigned a value
let myUndefined;
console.log(myUndefined); // undefined value

console.log(myUndefined + 5); // undefined value // NaN - Not a Number

// null - a variable that explicitly has no value
let myNull = null;
console.log(myNull); // null value

// Arrays - a group of elements stored in a single variable
let myArray = [1, 2, "tree", { key: "value" }, 5];
console.log(myArray); // output the array to the console

// accessing array elements
console.log(myArray[0]); // first element
console.log(myArray[2]); // third element (the string "tree")

// Objects - a collection of key-value pairs
let student = {
  name: "Matt",
  age: 30,
  grade: "A",
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.grade);

// typeof - returns the type of a variable
console.log(typeof myNumber); // number
myNumber = "blash";
console.log(typeof myNumber); // string
console.log(typeof myDecimal); // number
console.log(typeof temperature); // number
console.log(typeof pretendnumber); // string
console.log(typeof isTrue); // boolean
console.log(typeof myUndefined); // undefined
console.log(typeof myNull); // object (this is a known quirk in JavaScript)
console.log(typeof myArray); // object
console.log(typeof student); // object
