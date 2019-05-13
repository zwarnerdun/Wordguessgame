// Make an array of words
var fashionshirts = ["tunic", "frock", "peplum", "poncho", "gypsy"]; 

//memory
var randomshirts = "";
var lettersofname = [];
var blanks = 0;
var blanksandcorrect = [];
var wrongguess = [];

//Keep score
var wins = 0;
var losses = 0;
var remainingguesses = 5;


function Game() {
    
        
    // Pick a random word
    randomshirts = fashionshirts[Math.floor(Math.random()* fashionshirts.length)];

    //seperates words individually and stores in new array
    lettersofname = randomshirts.split("");

    //letters not used
    console.log("WORD CHOSEN " + randomshirts);
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

function reset() {
    remainingguesses = 5;
    wrongguess = [];
    blanksandcorrect = [];
    Game();
}

function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomshirts is equal to the letter entered... then variable is true
    console.log("LETTER IS " + letter);
    for (var i = 0; i < blanks; i++) {
        if (randomshirts[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomshirts[i] == letter) {
                blanksandcorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongguess.push(letter);
        RemainingGuesses--;
    }
    console.log(blanksandcorrect);
}

//__________________________________________________________
//FINAL COMPLETE FUNCTION
//__________________________________________________________

//check to see if player won...
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + remainingguesses)

    if (lettersofname.toString() == blanksandcorrect.toString()) {
        wins++;
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (remainingguesses === 0) {
        losses++;
        reset();

        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksandcorrect.join(" ");
    document.getElementById("RemainingGuesses").innerHTML = " " + remainingguesses;
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//_____________________________________________________
// EXECUTE CODE 
//_____________________________________________________

//call start game function
// Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of fashionshirts
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongguess.join(" ");
}


