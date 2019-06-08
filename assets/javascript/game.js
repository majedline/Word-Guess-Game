
var gameLimit = 10;

var petList = ["cat", "dog", "mouse", "parrot", "rabbit", "lizard"];

var currentGame = {
    petToGuess: "",
    numberOfGuessesMade: 0,
    numberOfGuessesRemaining: gameLimit,
    charactersToGuess: [],
    correctCharactersGuessedByUser: [],
    wrongCharactersGuessedByUser: [],
};

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
        innerDiv.id = "char-to-guess-" + i;
        innerDiv.innerHTML = "_";

        mainDiv.append(innerDiv);
    }
    console.log(mainDiv);
    document.getElementById("game-area").append(mainDiv);

    //document.getElementById("demo").innerHTML = "The Unicode CHARACTER code is: " + char;
}

function reset() {
    document.getElementById("game-area").innerHTML = "";
    setGame();
}

// need to load the array into the game area //// TO REVIEW
function loadInnerGame() {
    //for every spot in chracters to guess array, place a div
    var mainDiv = document.createElement("div");
    mainDiv.id = "char-to-guess-area";
    mainDiv.className = "row";

    for (var i = 0; i < currentGame.correctCharactersGuessedByUser.length; i++) {
        var innerDiv = document.createElement("div");
        innerDiv.className = "col-sm char-to-guess";
        innerDiv.id = "char-to-guess-" + i;

        // load the correct characters
        if (correctCharactersGuessedByUser[i] != null) {
            innerDiv.innerHTML = currentGame.correctCharactersGuessedByUser[i];

        } else {
            innerDiv.innerHTML = "_";
        }

        mainDiv.append(innerDiv);
    }
    console.log(mainDiv);
    document.getElementById("game-area").append(mainDiv);

}

// When a key is pressed, check if it is a correct guess
function keyPressed() {
    document.onkeyup = function (event) {
        alert(event.key);
        isCorrectGuess(event.key)
    };
}

// if the guess charcter is found, then put it in the correct bucket. If not, then put in the worng bucket
function isCorrectGuess(guessedCharacter) {

    // based on the charcter entered, go throuh the list of charcaters to guess. If any of them match, then add them to the correct guesses
    var foundCorrectGuess = false;

    for (var i = 0; i < currentGame.charactersToGuess.length; i++) {
        if (guessedCharacter === currentGame.charactersToGuess[i]) {
            currentGame.correctCharactersGuessedByUser[i] = currentGame.charactersToGuess[i];
            foundCorrectGuess = true;
        }
    }


    // increment number of guesses made
    currentGame.numberOfGuessesMade++;

    //decrment number of guesses remaining
    currentGame.numberOfGuessesRemaining--;

    if (!foundCorrectGuess) {
        currentGame.wrongCharactersGuessedByUser.push(guessedCharacter);
    }

    console.log(currentGame.charactersToGuess);
    console.log(currentGame.correctCharactersGuessedByUser);
    console.log(currentGame.wrongCharactersGuessedByUser);



}

setGame();
keyPressed();

// var car = {
//     make: "Honda",
//     model: "Fit",
//     color: "Blue Raspberry",
//     mileage: 3000,
//     isWorking: true,

//     driveToWork: function () {

//         alert("Old Mileage: " + this.mileage);
//         this.mileage = this.mileage + 8;
//         alert("New mileage: " + this.mileage);
//     },

//     driveAroundWorld: function () {

//         alert("Old Mileage: " + this.mileage);

//         this.mileage = this.mileage + 24000;

//         alert("New Mileage: " + this.mileage);
//         alert("Car needs a tuneup!");

//         this.isWorking = false;
//     },

//     getTuneUp: function () {
//         alert("Car is ready to go!");
//         this.isWorking = true;
//     },

//     honk: function () {
//         alert("Honk! Honk!");
//     },

//     carDoSomething: function(event){
//         var pressedKey = event.key;
//         if (pressedKey === "h"){
//             this.honk();
//         }
//     }

// };


// document.onkeyup = function (event) {
//         console.log(event);
//         car.carDoSomething(event);

// };





// // <script type="text/javascript">
// //     // Whenever a key is pressed, alert "pressed a button".
// //     document.onkeyup = function () {
// //       alert("pressed a button");
// //     };

// //     document.onkeyup = function (event) {

// //       var choices = ["r", "p", "s"];

// //       var r = ["r", "p"];
// //       var p = ["p", "s"];
// //       var s = ["s", "r"];
// //       var list = [r, p, s];

// //       var computerScore = parseInt(document.getElementById("computer-score").innerHTML);
// //       var humanScore = parseInt(document.getElementById("human-score").innerHTML);
// //       var tieScore = parseInt(document.getElementById("tie-score").innerHTML);
// //       var dumbScore = parseInt(document.getElementById("dumb-score").innerHTML);

// //       console.log(list);

// //       var computerSelection = Math.floor(Math.random() * choices.length);
// //       console.log("computer random selection = " + computerSelection);

// //       var humanSelection = choices.indexOf(event.key);

// //       console.log("human selection = " + humanSelection);

// //       var computerChoice = list[computerSelection];
// //       console.log("computerChoice = " + computerChoice);

// //       var humanChoice = list[humanSelection];
// //       console.log("humanChoice = " + humanChoice);

// //       var game = "Game: Human Selection: "+humanChoice[0]; + ". Computer Selection: " + computerChoice[0];
// //       console.log(game);


// //       if (humanChoice == undefined) {
// //         dumbScore++;
// //       } else {

// //         if (computerChoice[0] == humanChoice[0]) {
// //           tieScore++;
// //         }
// //         else if (computerChoice[1] === humanChoice[0]) {
// //           humanScore++;
// //         }
// //         else if (computerChoice[0] === humanChoice[1]) {
// //           computerScore++;
// //         }

// //         console.log("tieScore = " + tieScore);
// //         console.log("humanScore = " + humanScore);
// //         console.log("computerScore = " + computerScore);

// //         document.getElementById("computer-score").innerHTML = computerScore;
// //         document.getElementById("human-score").innerHTML = humanScore;
// //         document.getElementById("tie-score").innerHTML = tieScore;
// //         document.getElementById("game-view").innerHTML = game;

// //               // Randomly chooses a choice from the options array. This is the Computer's guess.
// //       var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// //       }
// //     };
// //   </script>