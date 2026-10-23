// // Promises
// const order = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     const success = Math.random() > 0.3;

//     if (success) {
//       resolve("Your food is ready!");
//     } else {
//       reject("Something went wrong!");
//     }
//   }, 2000);
// });

// // then key is used to handle the resolved value of the promise

// console.log("Your order has been placed");

// order
//   .then(function (message) {
//     console.log(message);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// console.log("You can continu to browse our menu..");

// expand the order promise following
// add random success or failure to the order promise
// use Math.random() to determine success or failure and resolve or reject accodingly
// put console.logs in front and below the promise to indicate the start and end of the order process

// async and await
// async keyword is used to define an asynchronous function (goes before the function keyword or before an arrow function)

// a asynchronous function always returns a promise
// note: cant do a timeout in an async function and expect it to return a value directly
async function greet() {
  return "Hello, world!";
}

greet().then(function (message) {
  console.log(message);
});

const waitTwoSeconds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done waiting for 2 seconds");
    }, 2000);
  });
};

// await keyword is used to wait for a promise to resolve inside an async function
// important to note you can ONLY use the await keyword inside async function
async function startProgram() {
  console.log("Starting the program...");

  const message = await waitTwoSeconds();

  console.log(message);

  console.log("Finish");

  // same as
  //     waitTwoSeconds.then((message) => {
  //     console.log(message);

  //     console.log("Finish");
  //   })
}

// startProgram();
// console.log("This runs while startProgram is waiting");

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Failed to get user");
    }, 2000);
  });
}

// try and catch is used to handle errors in async functions
// wrap your logic ina "try" block ({}) and catch errors in the "catch" block ({})
async function fetchUser() {
  try {
    const user = await getUser();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

fetchUser();

// challenge - create a file downloading logic

// first, create a function "download file" that returns a promise
// once again simulate a sucess rate (with Math.random()) and a delay (with setTimeout)

// next, create an async function "startDownload" that will use "try" and "catch" to handle the download process
// make sure to use the await keyword to call the previously defined "downloadFile" function
