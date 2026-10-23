// Promises
const order = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const success = Math.random() > 0.3;

    if (success) {
      resolve("Your food is ready!");
    } else {
      reject("Something went wrong!");
    }
  }, 2000);
});

// then key is used to handle the resolved value of the promise

console.log("Your order has been placed");

order
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.log(error);
  });

// console.log("You can continu to browse our menu..");

// expand the order promise following
// add random success or failure to the order promise
// use Math.random() to determine success or failure and resolve or reject accodingly
// put console.logs in front and below the promise to indicate the start and end of the order process
