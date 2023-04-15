let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlife = true;
let message = " ";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");


function startGame(){

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
