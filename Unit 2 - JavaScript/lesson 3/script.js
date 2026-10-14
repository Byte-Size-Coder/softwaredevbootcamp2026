// output 1 to 5 without loops
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// output 1 to 5 using a loop
// for loop
// loop "for" x many times

// first input, intitalize index variable (counter)
// second input, condition to check
// third input, increment/decrement the counter
for (let i = 0; i < 10; i++) {
  // code that repeats
  console.log(i + 1);
  console.log(i);
}

let x = 1;

x++; // adds 1 to x (variable)
// short hand x = x + 1;
console.log(x);

x++;
console.log(x);

x--; // subtracts 1 from x (variable)
// short hand x = x - 1;
console.log(x);

x += 2; // adds 2 to x (variable)
console.log(x);

x -= 2; // subtracts 2 from x (variable)
console.log(x);

let counter = 1;
for (let i = 1; i <= 10; i++) {
  // code that repeats
  console.log("counter: " + counter);
  console.log("index: " + i);

  counter += 2;
}

console.log(
  "-----------------------------------------------------------------",
);

// break loop
for (let i = 1; i <= 10; i++) {
  // code that repeats
  if (i === 5) {
    console.log("Breaking loop at index: " + i);
    break;
  }
  console.log("index: " + i);
}

console.log("now we are out of the loop!");

console.log(
  "-----------------------------------------------------------------",
);

// continue loop
for (let i = 1; i <= 10; i++) {
  // code that repeats
  if (i === 5) {
    console.log("Skipping index: " + i);
    continue;
  }
  console.log("index: " + i);
}

console.log("now we are out of the loop!");

// skip the odd numbers
for (let i = 1; i <= 10; i++) {
  // how to check odd or even numbers
  if (i % 2 === 1) {
    continue; // skip odd numbers
  }
  console.log(i);
}

console.log(
  "-----------------------------------------------------------------",
);
// Array Iteration

const scores = [45, 72, 88, 56, 95, 32, 78];

// using for loops to print scores
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);

  if (scores[i] >= 50) {
    console.log("this is a passing score");
  } else {
    console.log("this is a failing score");
  }
}

console.log(
  "-----------------------------------------------------------------",
);

console.log("for each loop");

// foreach function on array
//use for each to print scores
scores.forEach(function (i) {
  console.log(i);

  if (i >= 50) {
    console.log("this is a passing score");
  } else {
    console.log("this is a failing score");
  }
});

// map function to double each score in the array
const doubledScores = scores.map(function (score) {
  return score * 2;
});

console.log(doubledScores);

// filter function to get passing scores

const passingScores = scores.filter(function (score) {
  return score >= 50;
});
console.log("Passing scores: " + passingScores);

console.log(
  "-----------------------------------------------------------------",
);

// while and do while loops

// for loops loop "for" a specific number of times based on a condition

// while loop loops "while" a condition is true

// while (condition) {
//     // code repeats while the condition is true
// }

let y = 0;

while (y < 5) {
  console.log("y: " + y);
  y++;
}

let money = 10;
console.log("Initial money: " + money);
while (money < 100) {
  console.log("incruing interest");

  money *= 1.05; // assuming 5% interest per iteration
  console.log("money: " + money);
}

// while (true){
//     // infinite loop BAAAAAAAAAAAAAAD
// }
console.log("Final money: " + money);
console.log(
  "-----------------------------------------------------------------",
);

let isLoggedIn = false;
while (isLoggedIn) {
  console.log("User is logged in");
  // code that repeats while the user is logged in
  // set isLoggedInFalse when the user logs out
  isLoggedIn = false; // simulate user logging out
}
console.log("User has logged out");
console.log(
  "-----------------------------------------------------------------",
);

console.log("now do while");
console.log(isLoggedIn);
do {
  console.log("User is logged in");
  // code that repeats while the user is logged in
  // set isLoggedInFalse when the user logs out
  isLoggedIn = false; // simulate user logging out
} while (isLoggedIn);
console.log("User has logged out");

// do while loop loops "do" a block of code at least once and then "while" a condition is true
