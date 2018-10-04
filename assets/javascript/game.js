//Variables


//Variables for alphabet and possible words
var words = ["aviato", "Gilfoyle", "Hooli", "Smart Fridge", "Palapa", "JIAN YANG", "Special Occasion", "Not A Hot Dog", "Rigby", "PIED PIIIIIIPER"];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



//Variables for Wins & Remaining Guesses
var winsNum = 0;
var remainingGuessesNum = 12;
var guessedLetters = [];


//Variables that hold reference to the places in the HTML where we want to display things.
var winsText = document.getElementById("winsnumber-text");
var currentWordDashesText = document.getElementById ("currentWordDashes-text")
var guessedLettersText = document.getElementById ("guessedLetters-text")
var remainingGuessesText = document.getElementById ("remainingGesses-text")

//Add input to HTML
guessedLettersText.textContent = "Placeholder: " + userGuess;

console.log(guessedLetters.textContent);

//Generates random word from Words array
var randomValue = words[Math.floor(Math.random() * words.length)];

var currentWord = randomValue;

console.log(currentWord);



//User input - function runs whenever a user presses a key.
var userGuess = document.onkeyup = function (event) {

    //Forces user guess to be lowercase
    userGuess = event.key.toLowerCase();

    console.log(event);

    function addUserLetter() {

        document.getElementById("guess-text").textContent = userGuess;


    }

    addUserLetter();

    


}

//Displays User's input in game & adds user's input to guessed letters
for (g = 0; g < remainingGuessesNum; g++){
    (remainingGuessesNum - 1);
    console.log(remainingGuessesNum);
}







//INSERT FOR LOOP FOR DASHES - HOW DO I GET DASHES TO REPEAT?//
String.prototype.repeat = function (times) {
    return (new Array(times + 1)).join(this);
}
var guessedLetters = "";
var i;
for (i = 0; i < currentWord.length; i++) {

    var s = ("_").repeat(currentWord.length);


}

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
//2. 