// Make an array of words
var fashionshirts = [
    "Tunic",
    "Frock",
    "Peplum",
    "Poncho",
    "Gypsy"
];

// Pick a random word
var currentword = fashionshirts[Math.floor(Math.random()* fashionshirts.length)];
//memory
var currentword = 0
var guessesleft=[]
var wins=0
var losses=0
var lettersyouguessedwrong=0
// Answers
for (var i = 0; i < fashionshirts[currentword].length; i++) {
    fashionanswers.push = "_";

}

var remainingletters = fashionshirts.length;

while (remainingletters > 0) {
    alert (fashionanswers.join (" "));
}

//Guess from player
var Guess = prompt("Press any key to get started!");
if (guess === null) {
    // This is to exit
    stop;
} else if (guess.length !== 1) {
    alert ("Please enter only one letter.");

} else {
    for (var j = 0; j < fashionshirts.length; j++);{
        if (word [j] === guess){
            fashionanswers[j] = guess;
            remainingletters--;
        }
    }
}