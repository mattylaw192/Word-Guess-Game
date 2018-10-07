//Variables for alphabet and possible words
var words = ["AVIATO", "GILFOYLE", "HOOLI", "PALAPA", "JIANYANG", "RIGBY", "ERLICH", "OCTOPUS"];



//Variables for Wins & Remaining Guesses
var winsNum = 0;    //Total number of wins 
var maxGuesses = 10;    //Total number of allowed guesses 
var remainingGuessesNum = 0; //How many guesses left
var guessedLetters = []; //Array of letters that were guessed by a user
var generatedWord; //Current word being used
var underscore = []; //underscores
var gameFinished = false;


//Variables that hold reference to the places in the HTML where we want to display things.
var winsText = document.getElementById("winsNumber-text");
var currentWordDashesText = document.getElementById("currentWordDashes-text");
var guessedLettersText = document.getElementById("guessedLetters-text");
var remainingGuessesText = document.getElementById("remainingGuesses-text");
var restartGame = document.getElementById("restart-game");



//START OF GAME; Sets "guessed letters" to Zero
function startGame() {

    //remaingingGuessesNum = 10
    remainingGuessesNum = maxGuesses;

    //Generates Random Word and sets it to generatedWord variable
    var randomValue = words[Math.floor(Math.random() * words.length)];

    generatedWord = randomValue;
    underscore = [];
    guessedLetters = [];
    console.log(generatedWord);

    for (var i = 0; i < generatedWord.length; i++) {
        generatedWord[i] += underscore.push("_");
    }


    document.getElementById("currentWordDashes-text").innerHTML = underscore;

    updateDisplay();
};
startGame();


function updateDisplay() {
    document.getElementById("winsNumber-text").innerHTML = winsNum;
    //concatenate and remove commas
    var guessingWordText = " ";

    for (i = 0; i < underscore.length; i++) {
        guessingWordText += underscore[i];
    }
    document.getElementById("currentWordDashes-text").innerText = guessingWordText;
    document.getElementById("remainingGuesses-text").innerText = remainingGuessesNum;
    document.getElementById("guessedLetters-text").innerText = guessedLetters;


};

function evaluateGuess(letter) {
    var positions = [];

    for (i = 0; i < generatedWord.length; i++) {
        if (generatedWord[i] === letter) {
            positions.push(i);
        }
    }

    if (positions.length <= 0) {
        remainingGuessesNum--;
    }
    else {
        for (var i = 0; i < positions.length; i++) {
            underscore[positions[i]] = letter;
        }
    }
};

function win() {
    if (underscore.indexOf("_") === -1) {
            winsNum++
            {alert("Special Occasion! (̅_̅_̅_̅(̅_̅_̅_̅_̅_̅_̅̅_̅()ڪے");
    }}  

};

function loss() {
    if (remainingGuessesNum <= 0) {
        alert("Don't Touch Anything. Failure is Contagious- Erlich Bachman");
    }
}

// Makes a guess
function makeGuess(letter) {
    if (remainingGuessesNum > 0) {
            if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }

};


//logs user keys
var userGuess = document.onkeyup = function (event) {
    if (gameFinished) {
        startGame();
        gameFinished = false;
    } else {

        if (event.keyCode >= 65 && event.keyCode <= 90) {

            makeGuess(event.key.toUpperCase());
            updateDisplay();
            win();
            loss();
        }
        // userGuess = event.key.toLowerCase();
    }

};

//restart game
document.getElementById("restart-game").onclick = function () { startGame() };