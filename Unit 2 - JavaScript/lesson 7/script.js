// Fetch method
// this is a function that will make a network request to an API

fetch("https://official-joke-api.appspot.com/random_joke", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// JSON
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
// {
//   "id": 1,
//   "type": "general",
//   "setup": "Why did the chicken cross the road?",
//   "punchline": "To get to the other side."
// }
const joke = {
  id: 1,
  type: "general",
  setup: "Why did the chicken cross the road?",
  punchline: "To get to the other side.",
};

async function getJoke() {
  try {
    // same as fetch("https://official-joke-api.appspot.com/random_joke")
    // when not passing second parameter, fetch defaults to a GET request
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );
    // same as the .then((response) => response.json()) part of the fetch chain
    const data = await response.json();
    // at this point, 'data' contains the parsed JSON object from the response
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getJoke();
