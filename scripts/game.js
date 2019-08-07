//var for game status so it doesn't run until user clicks start
var start = false;
//counter trackers
var winner = 0;
var correct = 0;
var guess = 0;

//global function to end game
function stopGame() {
    document.location.reload()
}
//global function to start game
  function startGame() {
    start = true;

    //Words to guess from
var words = ["help", "sad", "sorrow"];
//picks random word from array
var word = words[Math.floor(Math.random() * words.length)];

//stores random word into another array for displaing length for guesser
var answerArray = [];

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

//prints __ symbol to document
console.log(answerArray);
document.getElementById("letter1").innerHTML = answerArray;

//var to show how many words are left in guessing game
var remainingLetters = word.length;

//onkey event that takes input from user and checks it with word selected.
document.onkeyup = function(event) {
var letter = event.key.toString();

//loops through word and checks if strings matches answerArray
    for (var i = 0; i < word.length; i++) {
         if (word[i] === letter) { 
            answerArray[i] = letter;
            remainingLetters--;
            document.getElementById("letter1").innerHTML = answerArray;
            //Word guessed correctly counter
            correct++;
            document.getElementById("letters-correct").innerHTML = correct;

            //ends guessing once all letters have been guesses. 
            if(remainingLetters === 0) {
                console.log("winner");
                 winner++;
                 //Ends Game when win counter hits 3.
                 if(winner == 3) {
                    console.log("You Won!")
                    //write function that ends Game
                 }
                 document.getElementById("win-tracker").innerHTML = winner;
                
                }
            } 
         }     
   }


//guess tracker
   document.addEventListener("keyup", function(event){
        guess++;
        console.log(guess);
        document.getElementById("guess-tracker").innerHTML = guess;
        //remaining guess counter 
        var remaining = 26 - guess;// at 26 because it makes up for enter button
        document.getElementById("guess-remaining").innerHTML = remaining;
        //end game conditional
        if (guess > 26) {
            document.getElementById("game-over").innerHTML = "Game Over"; //display Game over box
        }
   });
  }


  //next queue word for same logic for next button as start game. 
  //generates new word.

