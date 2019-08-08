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
  var words = ["finn", "jake", "bmo", "marcaline", "lemongrab"];
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
        if (remainingLetters === 0) {
          console.log("winner");
          winner++;
          //Ends Game when win counter hits 3.
          if (winner == 3) {
            winAudio.play();
            document.getElementById("win-game").innerHTML = "You Won!"; //write function that ends Game
          }
          document.getElementById("win-tracker").innerHTML = winner;

        }
      }
    }
  }


  //guess tracker
  document.addEventListener("keyup", function(event) {
    guess++;
    console.log(guess);
    document.getElementById("guess-tracker").innerHTML = guess;
    //remaining guess counter
    var remaining = 40 - guess; // at 30 for longer word
    document.getElementById("guess-remaining").innerHTML = remaining;
    //end game conditional
    if (guess > 40) {
      lostAudio.play();
      document.getElementById("game-over").innerHTML = "Game Over"; //display Game over box
    }
  });
}


//next queue word for same logic for next button as start game.
//generates new word.
function nextGame() {

  //Words to guess from
  var words = ["finn", "jake", "bmo", "marcaline"];
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
        if (remainingLetters === 0) {
          console.log("winner");
          winner++;
          //Ends Game when win counter hits 3.
          if (winner == 3) {
            winAudio.play();
            document.getElementById("win-game").innerHTML = "You Won!"; //write function that ends Game
          }
          document.getElementById("win-tracker").innerHTML = winner;

        }
      }
    }
  }
}

//sound effects
//when losing game lemongrab yells
var lostAudio = new Audio('../Word-Guess-Game/mp3/lemon-grab-unacceptable.mp3');
lostAudio.play();

//win audio
var winAudio = new Audio('../Word-Guess-Game/mp3/beautiful-lemongrab.mp3');
winAudio.play();
