var car = {
    make: "Honda",
    model: "Fit",
    color: "Blue Raspberry",
    mileage: 3000,
    isWorking: true,

    driveToWork: function () {

        alert("Old Mileage: " + this.mileage);
        this.mileage = this.mileage + 8;
        alert("New mileage: " + this.mileage);
    },

    driveAroundWorld: function () {

        alert("Old Mileage: " + this.mileage);

        this.mileage = this.mileage + 24000;

        alert("New Mileage: " + this.mileage);
        alert("Car needs a tuneup!");

        this.isWorking = false;
    },

    getTuneUp: function () {
        alert("Car is ready to go!");
        this.isWorking = true;
    },

    honk: function () {
        alert("Honk! Honk!");
    },

    carDoSomething: function(event){
        var pressedKey = event.key;
        if (pressedKey === "h"){
            this.honk();
        }
    }

};


document.onkeyup = function (event) {
        console.log(event);
        car.carDoSomething(event);

};





// <script type="text/javascript">
//     // Whenever a key is pressed, alert "pressed a button".
//     document.onkeyup = function () {
//       alert("pressed a button");
//     };

//     document.onkeyup = function (event) {

//       var choices = ["r", "p", "s"];

//       var r = ["r", "p"];
//       var p = ["p", "s"];
//       var s = ["s", "r"];
//       var list = [r, p, s];

//       var computerScore = parseInt(document.getElementById("computer-score").innerHTML);
//       var humanScore = parseInt(document.getElementById("human-score").innerHTML);
//       var tieScore = parseInt(document.getElementById("tie-score").innerHTML);
//       var dumbScore = parseInt(document.getElementById("dumb-score").innerHTML);

//       console.log(list);

//       var computerSelection = Math.floor(Math.random() * choices.length);
//       console.log("computer random selection = " + computerSelection);

//       var humanSelection = choices.indexOf(event.key);

//       console.log("human selection = " + humanSelection);

//       var computerChoice = list[computerSelection];
//       console.log("computerChoice = " + computerChoice);

//       var humanChoice = list[humanSelection];
//       console.log("humanChoice = " + humanChoice);

//       var game = "Game: Human Selection: "+humanChoice[0]; + ". Computer Selection: " + computerChoice[0];
//       console.log(game);


//       if (humanChoice == undefined) {
//         dumbScore++;
//       } else {

//         if (computerChoice[0] == humanChoice[0]) {
//           tieScore++;
//         }
//         else if (computerChoice[1] === humanChoice[0]) {
//           humanScore++;
//         }
//         else if (computerChoice[0] === humanChoice[1]) {
//           computerScore++;
//         }

//         console.log("tieScore = " + tieScore);
//         console.log("humanScore = " + humanScore);
//         console.log("computerScore = " + computerScore);

//         document.getElementById("computer-score").innerHTML = computerScore;
//         document.getElementById("human-score").innerHTML = humanScore;
//         document.getElementById("tie-score").innerHTML = tieScore;
//         document.getElementById("game-view").innerHTML = game;

//               // Randomly chooses a choice from the options array. This is the Computer's guess.
//       var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//       }
//     };
//   </script>