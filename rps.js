let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    ind = Math.floor(Math.random() * 3);
    compChoice = options[ind];
    console.log("computer choice ", compChoice);
    return compChoice;
}
const drawGame = () => {
    console.log("draw game");
}
const playGame = (userChoice) => {
console.log("User choice = ", userChoice);
 compChoice = generateComputerChoice();
 if(userChoice === compChoice){
    drawGame();
 }
 else if((userChoice === "rock" && compChoice === "scissors") || (userChoice === "scissors" && compChoice === "paper") || (userChoice === "paper" && compChoice === "rock"))
   { 
    console.log("user win");
    userScore++;
    update = document.querySelector("#user-score");
    update.innerText = userScore;
}
else
    {
console.log("computer win");
compScore++;
 update = document.querySelector("#computer-score");
    update.innerText = compScore;

}
}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
} )

const resetGame = () => {
    userScore=0;
    compScore=0;
    update = document.querySelector("#user-score");
    update.innerText = userScore;
     update = document.querySelector("#computer-score");
    update.innerText = compScore;
}

let reset = document.querySelector("#reset-game");

reset.addEventListener("click", resetGame);