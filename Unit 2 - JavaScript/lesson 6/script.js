// synchronous
// console.log("Start");
// console.log("Middle");
// console.log("End");

// asynchronous

// fetching information from an api
// reading file
// waiting for a timer or delay
// communicating with a database (server)

// asynchronous example with setTimeout

// console.log("The Program has started");

// // expecting a "callback" function after a delay
// setTimeout(function () {
//   console.log("This message appears later");
// }, 3000); // 3000 milliseconds = 3 seconds

// console.log("The Program has ended");

console.log("Loading Profile....");

setTimeout(function () {
  console.log("Profile Loaded");
  console.log("Display profiles on screen");
}, 5000); // 3000 milliseconds = 3 seconds

console.log("Display loading spinner");
console.log("do something else...");
