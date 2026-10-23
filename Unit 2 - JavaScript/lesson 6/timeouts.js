// synchronous
console.log("Start");
console.log("Middle");
console.log("End");

// asynchronous

// fetching information from an api
// reading file
// waiting for a timer or delay
// communicating with a database (server)

// asynchronous example with setTimeout

console.log("The Program has started");

// expecting a "callback" function after a delay
setTimeout(function () {
  console.log("This message appears later");
}, 3000); // 3000 milliseconds = 3 seconds

console.log("The Program has ended");

console.log("Loading Profile....");

setTimeout(function () {
  console.log("Profile Loaded");
  console.log("Display profiles on screen");
}, 5000); // 3000 milliseconds = 3 seconds

// console.log("Display loading spinner");
// console.log("do something else...");

// create a countdown

// have the console print 3....2....1... GO! exactly each second that it should be
// for example 3 in 1 second, 2 in the next second, 1 in the next second, and GO! in the final second

// starting countdown
// 1 second later 3....
// 1 second later 2....
// 1 second later 1....
// 1 second later GO!

console.log("Starting countdown...");

setTimeout(function () {
  console.log("3....");
}, 1000);

setTimeout(function () {
  console.log("2....");
}, 2000);

setTimeout(function () {
  console.log("1....");
}, 3000);

setTimeout(function () {
  console.log("GO!");
}, 4000);

//nested example with setTimeout
setTimeout(function () {
  console.log("3....");
  setTimeout(function () {
    console.log("2....");
    setTimeout(function () {
      console.log("1....");
      setTimeout(function () {
        console.log("GO!");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
