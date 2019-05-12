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
    window.onkeypress = function Game() {
        
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

    };
}

function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
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
    console.log("wins:" + Wins + "| losses:" + Losses + "| guesses left:" + RemainingGuesses)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersofname.toString() == blanksandcorrect.toString()) {
        Wins++;
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + Wins;

        //if LOST...then alert and reset new round
    } else if (RemainingGuesses === 0) {
        Losses++;
        reset();
        // document.getElementById("image").src = "./assets/images/try-again.png"
        document.getElementById("losstracker").innerHTML = " " + Losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksandcorrect.join(" ");
    document.getElementById("RemainingGuesses").innerHTML = " " + RemainingGuesses;
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
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongguess.join(" ");
}

function reset() {
    RemainingGuesses = 5;
    wrongguess = [];
    blanksandcorrect = [];
    Game();
}
