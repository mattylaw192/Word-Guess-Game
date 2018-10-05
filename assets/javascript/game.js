//Variables for alphabet and possible words
var words = ["aviato", "Gilfoyle", "Hooli", "Palapa", "JIANYANG", "Rigby","Erlich","Octopus",];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



//Variables for Wins & Remaining Guesses
var winsNum = 0;
var maxGuesses = 12;
var remainingGuessesNum = 0;
var guessedLetters = [];
var generatedWord;
var underscore = [];
var currentWord;
var wins;


//Variables that hold reference to the places in the HTML where we want to display things.
var winsText = document.getElementById("winsNumber-text");
var currentWordDashesText = document.getElementById("currentWordDashestext");
var guessedLettersText = document.getElementById("guessedLetters-text");
var remainingGuessesText = document.getElementById("remainingGuesses-text");



//START OF GAME; Sets "guessed letters" to Zero
function startGame() {

        remainingGuessesNum = maxGuesses;

    //Generates Random Word and sets it to generatedWord variable
    var randomValue = words[Math.floor(Math.random() * words.length)];

    generatedWord = randomValue;
    underscore = [];
    console.log(generatedWord);

    for (var i=0; i < generatedWord.length;i++){
        underscore.push("_");
    }
    
    document.getElementById("currentWordDashesText").innerHTML = underscore;

    
}
startGame();
// console.log(startGame());


//User input - function runs whenever a user presses a key.
var userGuess = document.onkeyup = function (guessEvent) {

    remainingGuessesNum--;
    document.getElementById("remainingGuesses-text").innerHTML = remainingGuessesNum;
    if (remainingGuessesNum === 0){startGame();}


    //Forces user guess to be lowercase
    userGuess = guessEvent.key.toLowerCase();

    console.log(guessEvent);

    for (i = 0; i < remainingGuessesNum; i++) {
        function addUserLetter() {

            document.getElementById("guessedLetters-text").innerHTML = userGuess;


        }

        addUserLetter();
    }
}





//Removes User's Guess from Remaining Guesses

    // for (i = 0; i < 12; i++) {
    //     remainingGuessesNum - 1;

    //     console.log(remainingGuessesNum)
    // }






    //Displays User's input in game & adds user's input to guessed letters
    // for (g = 0; g < remainingGuessesNum; g++) {
    //     (remainingGuessesNum - 1);
    //     console.log(remainingGuessesNum);
    // }


//Removes user's guess from Remaining Guesses






//INSERT FOR LOOP FOR DASHES - HOW DO I GET DASHES TO REPEAT?//






//Win Function



//Work by small pieces. Use console.log or alert to keep testing


//Create code to "press any key to start game" Test

//start with a word. Find length of word. //

//If statement to actually start game. This would actually populate the dashes for the letters//

//Think step by step. Pick a word function//

//How do you get the correct number of _ _ _ for a word? - Try "For Loop"//

//How do you replace a dash with a user guess?//


//Questions

//1. How do I get guessed letters to appear?
//2. How do I get dashes to appear