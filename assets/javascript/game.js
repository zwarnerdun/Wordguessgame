// Make an array of words
var fashionshirts = ["Tunic", "Frock", "Peplum", "Poncho", "Gypsy"]; 

//memory
var randomshirts = "";
var lettersofname = [];
var blanks = 0;
var blanksandcorrect = [];
var wrongguess = [];

//Keep score
var Wins = 0;
var Losses = 0;
var RemainingGuesses = 5;

function Game() {
    // Pick a random word
    randomshirts = fashionshirts[Math.floor(Math.random()* fashionshirts.length)];

    //seperates words individually and stores in new array
    lettersofname = randomshirts.split("");

    //letters not used
    blanks = lettersofname.length;

    // Answers
    for (var i = 0; i < blanks; i++) {
        blanksandcorrect.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + blanksandcorrect.join("  ");

    //logging the consoles 
    console.log(randomshirts);
    console.log(lettersofname);
    console.log(blanks);
    console.log(blanksandcorrect);

}