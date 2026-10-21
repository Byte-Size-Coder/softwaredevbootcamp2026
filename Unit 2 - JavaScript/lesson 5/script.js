// // DOM
// // Document Object Model
// // The DOM represents the page so that programs can change the document structure, style, and content.

// // acess element in dom with id

// // document represents the whole HTML page
// // get element by id searches the document for an element that matches the specified id

// const pageTitle = document.getElementById("page-title");

// console.log(pageTitle);

// // change element content
// // text content allows you to change the content within an element
// if (pageTitle) {
//   // text content assumes you want change the text only
//   pageTitle.textContent = "Welcome to my updated website";

//   // innerHTML allows you to change the HTML content within an element and add additional HTML elements
//   //pageTitle.innerHTML = "<p>Welcome to my updated website Inner Html</p>";
// }

// // other ways to select elements in the DOM

// // select elements by class name
// const cards = document.getElementsByClassName("card");
// console.log(cards);

// // query selector allows you to select elements using CSS selectors
// const firstCard = document.querySelector(".card");
// console.log(firstCard);

// // query selector by id
// const sameFirstCard = document.querySelector("#card-1");
// console.log(sameFirstCard);

// // query selector all allows you to select all elements that match a CSS selector
// const allCards = document.querySelectorAll(".card");
// console.log(allCards);

// const paragraph = document.querySelectorAll("p");
// console.log(paragraph);

// for (let i = 0; i < paragraph.length; i++) {
//   console.log(paragraph[i].innerHTML);
//   paragraph[i].textContent = "Updated paragraph " + (i + 1);
// }

// const firstParagraph = document.querySelector("p");
// console.log(firstParagraph);

// firstParagraph.textContent = "Updating first paragraph";

// CRUD
// C - Create
// R - Read
// U - Update
// D - Delete
// Example of CRUD operations on the task list

// Create
const newTask = document.createElement("li");
newTask.textContent = "Learn JavaScript DOM";

// place the item somewhere in the DOM
// access the task list element by its id
const taskList = document.getElementById("task-list");
if (taskList) {
  // append child adds the new element as the last child of the parent element
  taskList.appendChild(newTask);
}

// Read
if (taskList) {
  const tasks = taskList.querySelectorAll("li");
  console.log(tasks);
}

// Update - change the content of the first task
if (taskList) {
  const firstTask = taskList.querySelector("li");
  if (firstTask) {
    firstTask.textContent = `${firstTask.textContent} (Completed!)`;
  }
}

const secondTask = document.createElement("li");
secondTask.textContent = "Learn CSS";

if (taskList) {
  taskList.appendChild(secondTask);
}

// search the task list for tasks containing "Learn" and remove them
// if (taskList) {
//   const tasks = taskList.querySelectorAll("li");

//   tasks.forEach((task) => {
// check if the task contains "Learn" and remove it if it does
//     if (task.textContent.includes("Learn")) {
//       task.remove();
//     }
//   });
// }

//Delete
if (taskList) {
  // :last-child
  const lastTask = taskList.querySelector("li:last-child");
  if (lastTask) {
    // remove deletes the element from the dom
    lastTask.remove();
  }
}

// Event
// something that happens within the browser, like a click or a key press
// examples: click, input, submit, keypress, hover etc.

// to setup an event
// first, get access to the element
// second, register an "event listener"
// event listener = a function that gets called when the event occurs

const addTaskButton = document.getElementById("add-task");

const addTask = function (event) {
  const newTask = document.createElement("li");
  newTask.textContent = "New Task";
  if (taskList) {
    taskList.appendChild(newTask);
  }
};

if (addTaskButton) {
  addTaskButton.addEventListener("click", addTask);
}

const toggleBackgroundButton = document.getElementById("toggle-background");

if (toggleBackgroundButton) {
  toggleBackgroundButton.addEventListener("click", function () {
    const body = document.body;

    if (body.classList.contains("background-color-light")) {
      body.classList.add("background-color-dark");
      body.classList.remove("background-color-light");
      body.style.color = "white";
    } else {
      body.classList.add("background-color-light");
      body.classList.remove("background-color-dark");
      body.style.color = "black";
    }

    console.log(body.className);
  });
}

// steps to set up our counter logic in our site

// get access to my counter and my buttons
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

// set up a variable to keep track of the counter value
let counterValue = 0;

// add listeners to increment and decrement that variable when clicked,
// and update the counter element

const updateCounter = function (isAdding) {
  if (isAdding) {
    counterValue++;
  } else {
    counterValue--;
  }

  if (counterElement) {
    counterElement.textContent = counterValue;
  }
};

if (incrementButton) {
  // one way when you need to pass an argument to the event handler function
  //   incrementButton.addEventListener("click", function (event) {
  //     updateCounter(true);
  //   });

  // another way (arrow function)
  incrementButton.addEventListener("click", () => updateCounter(true));

  //another way bind
  //incrementButton.addEventListener("click", updateCounter.bind(null, true));
}

if (decrementButton) {
  decrementButton.addEventListener("click", () => updateCounter(false));
  //   decrementButton.addEventListener("click", function (event) {
  //     updateCounter(false);
  //   });
}
