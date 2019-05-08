// Make an array of words to choose from 
var fashionshirts = [
    "Tunic",
    "Frock",
    "Peplum",
    "Poncho",
    "Gypsy"


];

// Pick a random word
var word = fashionshirts[Math.floor(Math.random()* fashionshirts.length)];

// Answers
var fashionanswers = []
for (var i = 0; i < fashionshirts.length; i++) {
    fashionanswers[i] = "_";

}

var remainingletters = fashionshirts.length;

while (remainingletters > 0) {
    alert (fashionanswers.join (" "));
}

//Guess from player
var Guess = prompt("Guess a letter to play");
    if (guess === null) {
        // This is to exit
        break;
    } else if (guess.length !== 1) {
        alert ("PLease enter onlt one letter.");

    } else {
        for (var j)
    }