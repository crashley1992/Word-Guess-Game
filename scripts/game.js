//var for game status so it doesn't run until user clicks start
var start = false;

//global function to end game
function stopGame() {
    document.location.reload()
}
//global function to start game
  function startGame() {
    start = true;

    //Words to guess from
var words = ["help", "depression", "sorrow"];
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

            var correct = 0;
            correct++;
            document.getElementById("letters-correct").innerHTML = correct;

            //ends guessing once all letters have been guesses. 
            if(remainingLetters === 0) {
                console.log("winner");
                var winner = 0;
                 winner = winner + 1;
                 document.getElementById("win-tracker").innerHTML = winner;
                }
         } else {
            console.log("wrong");
            // guess total - correct guesses
            }
         }     
   }
 

var guess = 0;
//guess tracker
   document.addEventListener("keyup", function(event){
        guess++;
        console.log(guess);
        document.getElementById("guess-tracker").innerHTML = guess;
        //remaining guess counter 
        var remaining = 20 - guess;
        document.getElementById("guess-remaining").innerHTML = remaining;
        //end game conditional
        if (guess > 20) {
            console.log("you lose"); //display Game over box
        }
   });
  }


  //next queue word for game


  //if words are all used up -- end game

