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
