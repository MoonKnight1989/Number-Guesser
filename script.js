let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
    return Math.floor(Math.random() * 10)
}
console.log(generateTarget());

let compareGuesses = (humanGuess, computerGuess, targetGuess) => {
   const humanDifference = Math.abs(targetGuess - humanGuess);
   const computerDifference = Math.abs(targetGuess - computerGuess);
   if (humanDifference === computerDifference)
    return true;

}


