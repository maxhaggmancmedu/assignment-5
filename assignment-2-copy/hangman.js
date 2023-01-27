let lives = 10;
let userInput = "";
let word = "";
let guessArray = [];
let remainingLetters = "";

function computerSelection () {
    let words = ["start", "ball", "equal", "javascript", "indecisive", "broken", "nothing"];
    return word = words[Math.floor(Math.random() * words.length)];
}
computerSelection();

remainingLetters = word.length;

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

function determineOutcome () {
    if (lives === 0) {
        alert("You lose!");
    } else if (remainingLetters === 0) {
        alert("You win!"  + "\n" + "You guessed the word " + word + " correctly!");
    } else {
        alert("Thanks for playing!");
    }    
}

function game() {
    while (lives > 0 && remainingLetters > 0) {
        userInput = prompt("Guesses left: " + lives + "\n" + answerArray.join(" ") + "\n" + "Guess a letter: ");
        const PATTERN = /^[A-Za-z]{1}$/;

        if (userInput === null) {
            break;
        } else if (!(userInput.match(PATTERN))) {
                alert("That is not a single letter. Please try again!");
        } else {
            if (!(word.includes(userInput))) {
                lives--;
            } else if (guessArray.includes(userInput)) {
                alert("You already guessed that letter!");
            } else {
                for (let j = 0; j < word.length; j++) {
                    if (word[j] === userInput) {
                        answerArray[j] = userInput;
                        remainingLetters--;  
                    }    
                }
            guessArray.push(userInput); 
            answerArray.join(" ");
            }     
        }
    }
    determineOutcome();
}

game();
