let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
    Math.floor((Math.random() * 9) + 1)
}

let compareGuesses = (humanNum, compNum, target) => {

    let compGuess = Math.abs (target - compNum);
    let humanGuess = Math.abs (target - humanNum);
   
    }




