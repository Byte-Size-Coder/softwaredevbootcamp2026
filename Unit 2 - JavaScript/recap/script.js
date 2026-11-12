// const = constant
// read only, can not be reassigned
// but the contents of an array can be modified

class Task {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}

// challenge 4
// refactor this code to now utlize the task class

// const tasksample = new Task("Sample Task");

// console.log(tasksample);
// tasksample.toggleCompleted();
// console.log(tasksample);

let tasks = [];

// let "LETS" you reassign the variable later if needed
let currentFilter = "all";

// Selecting elements from the DOM
// Document Object Model
const taskList = document.querySelector("#task-list");
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const statusElement = document.querySelector("#status");
const loadTasksButton = document.querySelector("#load-tasks");

const filterElements = document.querySelectorAll("[data-filter]");

// async keyword identifies this function as asynchronous, allowing the use of 'await' inside it
async function loadSampleTasks() {
  // disable our load task button to prevent users from clicking it multiple times
  loadTasksButton.disabled = true;
  // show the user we are loading
  statusElement.textContent = "Loading sample tasks...";

  // start our try block to "fetch" our data
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
    );

    if (!response.ok) {
      throw new Error(`Http error! status: ${response.status}`);
    }

    const data = await response.json();

    data.forEach((x) => {
      tasks.push(new Task(x.id, x.title, x.completed));
    });

    renderTasks();
  } catch (error) {
    console.error("Could not load sample tasks", error);

    statusElement.textContent = "Failed to load sample tasks";
  } finally {
    loadTasksButton.disabled = false;
  } // the finally block will always run, re-enable the load tasks button
}

function renderTasks() {
  taskList.innerHTML = "";

  const visibleTasks = tasks.filter(function (x) {
    if (currentFilter === "active") {
      return !x.completed;
    }

    if (currentFilter === "completed") {
      return x.completed;
    }

    return true;
  });

  visibleTasks.forEach(function (x) {
    // create a list element
    const listItem = document.createElement("li");
    listItem.className = "task";

    if (x.completed) {
      listItem.classList.add("completed");
    }

    // create a div to hold task details
    const details = document.createElement("div");
    details.className = "task-details";

    // create a checkbox and assign the correct status of completed
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = x.completed;

    checkbox.addEventListener("change", function () {
      x.toggleCompleted();
      renderTasks();
    });

    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = x.title;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      deleteTask(x.id);
    });

    details.append(checkbox, title);
    listItem.append(details, deleteButton);
    taskList.appendChild(listItem);
  });

  statusElement.textContent = `${visibleTasks.length} task(s) displayed`;
}

const deleteTask = (id) => {
  console.log("Deleting task with id:", id);
  tasks = tasks.filter((x) => {
    return x.id !== id;
  });

  renderTasks();
};

const addTask = (title) => {
  const trimmedTitle = title.trim();

  if (trimmedTitle === "") {
    statusElement.textContent = "Task title cannot be empty";
    return;
  }

  if (trimmedTitle.length > 50) {
    statusElement.textContent = "Task title cannot exceed 50 characters";
    return;
  }

  const newTask = new Task(Date.now(), trimmedTitle);

  tasks.push(newTask);

  renderTasks();

  statusElement.textContent = "Task added successfully";
};

loadTasksButton.addEventListener("click", function () {
  loadSampleTasks();
});

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  addTask(taskInput.value);
  taskInput.value = "";

  renderTasks();
});

filterElements.forEach(function (x) {
  x.addEventListener("click", function () {
    currentFilter = x.dataset.filter;
    renderTasks();
  });
});
