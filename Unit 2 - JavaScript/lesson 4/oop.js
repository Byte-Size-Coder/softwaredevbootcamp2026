// Object: a value that groups related properties
// property: a named piece of information stored in a object
// method: a function associated with the object

// class: a blueprint for creating objects with similar properties and methods
class Game {
  // constructor method to initialize properties
  constructor(title, genre, price, isAvailable) {
    this.title = title;
    this.genre = genre;
    this.price = price;
    this.isAvailable = isAvailable;
  }

  // method
  describe() {
    console.log("The game is " + this.title + " and it costs $" + this.price);
  }

  // another method
  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }

  buyGame(quantity) {
    console.log("Bought " + quantity + " of " + this.title);
    this.isAvailable = false;
  }
}
// old way
// const game = {
//   title: "Minecraft",
//   genre: "Sandbox",
//   price: 29.99,
//   isAvailable: true,
//   // keyword this refers to the current object
//   describe: function () {
//     console.log("The game is " + this.title + " and it costs $" + this.price);
//   },
// };

// const game2 = {
//   title: "Battlfield",
//   genre: "Shooter",
//   price: 59.99,
//   isAvailable: true,

//   describe: function () {
//     console.log("The game is " + this.title + " and it costs $" + this.price);
//   },
// };

// new way using class
const game = new Game("Minecraft", "Sandbox", 29.99, true);
const game2 = new Game("Battlfield", "Shooter", 59.99, true);
const game3 = new Game(49.99);

console.log(game);

// one way to access a property
console.log(game.title);
// another way to access a propert
let propertyName = "title";
console.log(game[propertyName]);
console.log(game.propertyName);

game.title = "Fortnite";

console.log(game);
console.log(game3);

// const you can reassign the whole object, but can modify properties of the object
// game = {
//   title: "Fortnite",
// };

game.describe();
game2.describe();

game.buyGame(2);

console.log(game.isAvailable);
game.toggleAvailability();
console.log(game.isAvailable);

const gameArray = [game, game2];

console.log(gameArray[0].describe());

// list properties
const player = {
  name: "Player1",
  level: 5,
  health: 100,
  inventory: ["sword", "shield", "potion"],
};

for (const key in player) {
  console.log(key);
  console.log("value of " + key + " is " + player[key]);
}
