
var gameLimit = 10;
var petList = ["cat", "dog", "mouse", "parrot", "rabbit", "lizard"];

// current game 
var currentGame = {
    petToGuess: "",
    numberOfGuessesMade: 0,
    numberOfGuessesRemaining: gameLimit,
    charactersToGuess: [],
    correctCharactersGuessedByUser: [],
    wrongCharactersGuessedByUser: [],
};

// Set the game 
function setGame() {

    currentGame.numberOfGuessesMade = 0;
    currentGame.numberOfGuessesRemaining = gameLimit;

    // get the random workd    
    currentGame.petToGuess = petList[Math.floor(Math.random() * petList.length)];
    console.log(currentGame.petToGuess);

    // split the word, and set the game value
    currentGame.charactersToGuess = currentGame.petToGuess.split("");
    currentGame.correctCharactersGuessedByUser.length = currentGame.charactersToGuess.length;

    console.log(currentGame.charactersToGuess);
    console.log(currentGame.correctCharactersGuessedByUser);
    console.log(currentGame.wrongCharactersGuessedByUser);


    //for every spot in chracters to guess array, place a div
    var mainDiv = document.createElement("div");
    mainDiv.id = "char-to-guess-area";
    mainDiv.className = "row";

    for (var i = 0; i < currentGame.charactersToGuess.length; i++) {
        var innerDiv = document.createElement("div");
        innerDiv.className = "col-sm char-to-guess";
        innerDiv.id = "char-to-guess-ID" + i;
        innerDiv.innerHTML = "_";

        mainDiv.append(innerDiv);
    }
    console.log(mainDiv);
    document.getElementById("game-area").append(mainDiv);

    document.getElementById("game-number-of-guesses-remaining").innerHTML = currentGame.numberOfGuessesRemaining;

    //document.getElementById("demo").innerHTML = "The Unicode CHARACTER code is: " + char;
}

function reset() {
    document.getElementById("game-area").innerHTML = "";
    setGame();
}

// When a key is pressed, check if it is a correct guess
function keyPressed() {
    document.onkeyup = function (event) {

        var pressedChar = event.key;
        var allowedLetters = /^[a-zA-Z]+$/;// need to check this because it is allowing tabs

        if (pressedChar.match(allowedLetters)) {
            var isGuessCorrect = checkCorrectGuess(pressedChar);

            if (!isGuessCorrect) {
                currentGame.wrongCharactersGuessedByUser.push(pressedChar);
            }

            console.log("currentGame.charactersToGuess: "+ currentGame.charactersToGuess);
            console.log("currentGame.correctCharactersGuessedByUser: " +currentGame.correctCharactersGuessedByUser);
            console.log("currentGame.wrongCharactersGuessedByUser: "+ currentGame.wrongCharactersGuessedByUser);

        }

        // increment number of guesses made
        currentGame.numberOfGuessesMade++;
        document.getElementById("game-number-of-guesses-made").innerHTML = currentGame.numberOfGuessesMade;

        //decrment number of guesses remaining
        currentGame.numberOfGuessesRemaining--;
        document.getElementById("game-number-of-guesses-remaining").innerHTML = currentGame.numberOfGuessesRemaining;
    }
};


// if the guess charcter is found, then put it in the correct bucket. If not, then put in the worng bucket
function checkCorrectGuess(guessedCharacter) {

    // based on the charcter entered, go throuh the list of charcaters to guess. If any of them match, then add them to the correct guesses
    var foundCorrectGuess = false;

    for (var i = 0; i < currentGame.charactersToGuess.length; i++) {
        if (guessedCharacter === currentGame.charactersToGuess[i]) {
            currentGame.correctCharactersGuessedByUser[i] = currentGame.charactersToGuess[i];
            document.getElementById("char-to-guess-ID" + i).innerHTML = guessedCharacter;

            foundCorrectGuess = true;
        }
    }

    return foundCorrectGuess;
}

// function didUserWin(){
//     return 
// }


setGame();
keyPressed();
