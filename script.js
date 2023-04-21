let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]; //array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlife = true;
let message = " ";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomCard() {
  // if 1         -> return 11
  // if 11-13     -> return 10

  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlife = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  console.log("Drawing a new card from the deck!");
  let card = getRandomCard();

  sum += card;
  cards.push(card);
  startGame();
}
