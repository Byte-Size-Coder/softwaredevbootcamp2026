// step 1 get all our elements we need
const jokeButton = document.querySelector("#joke-button");
const setupElement = document.querySelector("#setup");
const punchlineElement = document.querySelector("#punchline");
const statusElement = document.querySelector("#status");

// step 2 create function to make api call to get joke
async function getJoke() {
  statusElement.textContent = "Loading...";
  jokeButton.disable = true;
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );
    const data = await response.json();
    console.log(data);
    setupElement.textContent = data.setup;
    punchlineElement.textContent = data.punchline;
    statusElement.textContent = "Joke Loaded!";
  } catch (error) {
    console.error("Could not retreive a joke:", error);

    setupElement.textContent = "Could not load joke.";
    punchlineElement.textContent = "";
    statusElement.textContent = "Something went wrong, please try again";
  }

  jokeButton.disabled = false;
}

async function getJokeWithDelay() {
  statusElement.textContent = "Loading...";
  jokeButton.disable = true;

  setTimeout(async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );
      const data = await response.json();
      console.log(data);
      setupElement.textContent = data.setup;
      punchlineElement.textContent = data.punchline;
      statusElement.textContent = "Joke Loaded!";
    } catch (error) {
      console.error("Could not retreive a joke:", error);

      setupElement.textContent = "Could not load joke.";
      punchlineElement.textContent = "";
      statusElement.textContent = "Something went wrong, please try again";
    }

    jokeButton.disabled = false;
  }, 2000);
}

// step 3 register button with that function (event listener)
jokeButton.addEventListener("click", getJokeWithDelay);

// Challenge
// add a second button and joke card to retreive another joke
// with this one, include the type and Id propert in the card
// add a counter to show how many jokes have been retreive successfully
