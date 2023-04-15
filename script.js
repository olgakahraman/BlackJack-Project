let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlife = true;
let message = " ";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame(){
    renderGame();
}


function renderGame(){

    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;

if (sum < 21) {
    message = "Do you want to draw a new card?"
} else if (sum ===21 ) {
    message = "You've got BlackJack!"
    hasBlackJack = true;
} else {
    message = "You are out of the game!"
    isAlife = false;
}
messageEl.textContent = message;

}
function newCard(){
    console.log("Drawing a new card from the deck!")
    let card = 7;
   
    sum += card;
    startGame();
}