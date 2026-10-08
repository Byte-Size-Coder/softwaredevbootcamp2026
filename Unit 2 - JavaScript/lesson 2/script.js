// let game = "Elden Ring";
// let price = 79.99;
// let quantity = 3;
// let isTrue = true;

// let total = price * quantity;
// console.log(total);

// Conditional Statements
// first syntax for an if statement
// if (condition) {
//     // true, do this
// }

// first if statement
let age = 20;

if (age >= 19) {
  console.log("You are old enough.");
}

// if else statement

if (age >= 19) {
  console.log("You are old enough.");
} else {
  console.log("You are not old enough.");
}

// if else if else statement

if (age >= 18) {
  console.log("You are an adult");
} else if (age >= 13) {
  console.log("You are a teenager");
} else {
  console.log("You are a child");
}

// comparison operators
console.log(age > 18); // true
console.log(age < 18); // false
console.log(age >= 18); // true
console.log(age <= 18); // false
console.log(age == 18); // false
console.log(age != 18); // true

age = null;

if (age) {
  console.log("Age is defined and truthy.");
} else {
  console.log("Age is undefined or falsy.");
}

// logic operators
console.log(age && true); // false
console.log(age || true); // true
console.log(!age); // true

// if statement with logic operators

age = 16;
let money = 100;

if (!age) {
  console.log("Age is not defined or falsy.");
}

if (age >= 18 && money >= 50) {
  console.log("You are able to buy this game.");
}

if (age >= 18 || money >= 50) {
  console.log("You are able to buy this game.");
}
// order does matter in if else if else statements

let total = 75;

if (total <= 50) {
  console.log("5% discount");
} else if (total <= 100 && total <= 150) {
  console.log("10% discount");
} else if (total <= 200) {
  console.log("20% discount");
} else {
  console.log("No discount");
}

// Not Operator
// not operator (!) is used to invert the truthiness of a value
let isRaining = false;

//console.log("Not operator on is raining: " + !isRaining);

if (!isRaining) {
  console.log("It is raining.");
} else {
  console.log("It is not raining.");
}

let hello = null; // or undefined;

if (!hello) {
  console.log("this variable has no data!");
}

// Switch Statements.

let day = "afsafdsfasda";

// if (day === "Monday") {
//   console.log("The food item of the day is pizza.");
// } else if (day === "Tuesday") {
//   console.log("The food item of the day is burgers.");
// } else if (day === "Wednesday") {
//   console.log("The food item of the day is pasta.");
// } else if (day === "Thursday") {
//   console.log("The food item of the day is sushi.");
// } else if (day === "Friday") {
//   console.log("The food item of the day is tacos.");
// } else if (day === "Saturday") {
//   console.log("The food item of the day is salad.");
// } else if (day === "Sunday") {
//   console.log("The food item of the day is roast chicken.");
// }

// Switch statems are only for comparing a single value against multiple possible cases.
switch (day) {
  case "Monday":
    console.log("The food item of the day is pizza.");
    break; // to make sure to "break" out of the switch statement after this case
  case "Tuesday":
    console.log("The food item of the day is burgers.");
    break;
  case "Wednesday":
    console.log("The food item of the day is pasta.");
    break;
  case "Thursday":
    console.log("The food item of the day is sushi.");
    break;
  case "Friday":
    console.log("The food item of the day is tacos.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("No food items available on weekends.");
    break;
  default:
    console.log("Invalid day.");
    break;
}

// Arrays

let games = [
  "The Legend of Zelda",
  "Super Mario Odyssey",
  "Minecraft",
  "Fortnite",
];

// get first element of the array

// index starts at 0
// zero base indexing
console.log(games);
console.log(games[0]);
console.log(games[1]);
console.log(games[2]);
console.log(games[3]);

console.log(typeof games);
// // object
// let obj = {
//     x: 10,
//     y: "hello"
// }

// // example of what an array looks like
// let arr = {
//     elements:

//     lenght:
// }

// get the number of elements in an array
console.log(games.length);
console.log(games[games.length - 1]); // last element of the array

games.push("Among Us"); // add a new game to the back of the array

console.log(games);

games.pop(); // remove the last game from the array

console.log(games);

games.shift(); // remove the first game from the array

console.log(games);

games.unshift("New Games"); // adds a new element to FRONT of the array
console.log(games);

games = [
  "The Legend of Zelda",
  "Super Mario Odyssey",
  "Minecraft",
  "Fortnite",
  "Among Us",
  "Battlefield",
];

console.log(games);

// slice grabs a portion of the array without modifying the original array
let popularGames = games.slice(1, 4);
console.log(popularGames);
console.log(games);

// splice modifies the original array by removing or replacing elements
let removedGames = games.splice(2, 2); // remove 2 elements starting from index 2
console.log(removedGames);
console.log(games);
games.splice(1, 0, "New Game"); // add "New Game" at index 1 without removing any elements
console.log(games);

games.splice(1, 1, "Replaced Game"); // replace the element at index 1 with "Replaced Game"
console.log(games);
