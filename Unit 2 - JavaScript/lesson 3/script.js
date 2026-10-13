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
