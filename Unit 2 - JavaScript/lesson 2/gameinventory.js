let games = ["Elden Ring", "God of War"];

let stock = 3;
let customerMoney = 500;
let gamePrice = 70;

if (games.length > 0) {
  console.log("Games are available.");
} else {
  console.log("No games are available.");
}

if (customerMoney >= gamePrice) {
  console.log("Purchase successful.");
  //customerMoney = customerMoney - gamePrice;// long way of doing
  customerMoney -= gamePrice; // short way of doing
  games.pop();
} else {
  console.log("Insufficient funds.");
}

console.log(games);

if (games.length > 0) {
  console.log("Games are available.");
} else {
  console.log("No games are available.");
}

if (customerMoney >= gamePrice) {
  console.log("Purchase successful.");
  //customerMoney = customerMoney - gamePrice;// long way of doing
  customerMoney -= gamePrice; // short way of doing
  games.pop();
} else {
  console.log("Insufficient funds.");
}

console.log(games);

if (games.length > 0) {
  console.log("Games are available.");
} else {
  console.log("No games are available.");
}

if (customerMoney >= gamePrice) {
  console.log("Purchase successful.");
  //customerMoney = customerMoney - gamePrice;// long way of doing
  customerMoney -= gamePrice; // short way of doing
  games.pop();
} else {
  console.log("Insufficient funds.");
}
