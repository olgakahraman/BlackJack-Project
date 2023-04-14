let firstCard = 8;
let secondCard = 6;
let sum = firstCard + secondCard;
let message = " ";

if (sum < 21) {
    message = "Do you want to draw a new card?"
} else if (sum ===21 ) {
    message = "Wohoo! You've got a BlackJack!"
} else {
    message = "You are out of the game"
}