
var wins = 0;
var losses = 0;
var totalGuesses = 9;
var guesses_left = totalGuesses;
var guessesTried = 0;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessLeft-text");
var lossesText = document.getElementById("losses-text");
var userText = document.getElementById("user-text");
// array to store all the user's guesses
var yourGuessSofar = [];
var computerChoiceText = document.getElementById("computerchoice-text");
// var newUserTextP=document.createElement("p");

// function to execute when onkeyup event fires.
document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = String.fromCharCode(97 + Math.floor(Math.random() * 26));

    //capture all the users guesses in a comma separated array
    yourGuessSofar.push(userGuess || ", ");
    if (userGuess === computerGuess) {
        wins++;
        guessesTried++;
        guesses_left--;
    }
    else {
        guessesTried++;
        guesses_left--;

    }
    // Reset all the values when all the guesses are exhausted
    if (guesses_left === 0) {
        guesses_left = 9;
        losses++;
        yourGuessSofar = [];
        userGuess = "";
    }


    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessLeftText.textContent = "Guesses Left: " + guesses_left;
    // newUserTextP.textContent=userGuess;     
    userText.textContent = "Your Guesses So Far: " + yourGuessSofar;

    //computer guess is not needed to be displayed, but will help user to see the differences among the guesses
    computerChoiceText.textContent = "The computer chose: " + computerGuess;

}