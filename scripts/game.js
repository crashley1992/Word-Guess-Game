//Words to guess from
var words = ["help", "depression"];
//picks random word from array
var word = words[Math.floor(Math.random() * words.length)];

//stores random word into another array for displaing length for guesser
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

//prints letter to document
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
            //ends guessing once all letters have been guesses. 
            if(remainingLetters === 0) {
                console.log("winner");
            }
         } else {
            console.log("wrong");
            }
       }    
   }
 

    