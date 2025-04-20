const group = document.querySelector("#group");
const message = document.querySelector("#message");
const computer = document.querySelector("#computer");
const human = document.querySelector("#human");
const winner = document.querySelector("#winner");
let computerScore = 0; 
let humanScore = 0;

let computerSelection = 0;
let humanSelection = 0;

function getComputerChoice() {
    let num = Math.random();

    if (num <= 1/3) {
        return "rock";
    }

    if (num <= 2/3) {
        return "paper";
    }
    return "scissors";
    // generate using Math.random
    // if the number < 0.33 -> rock
    // if the number < 0.66 -> paper
    // else -> scissors
    // return string
}


function compare(computerSelection, humanSelection) {
    message.textContent = `Computer selected ${computerSelection}.`;
    if (humanSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            message.textContent += " You lost this round!"
            computer.textContent = `Computer Score: ${computerScore}`;
        }

        if (computerSelection === "rock") {
            message.textContent += " This round ends in a tie!";
        }

        if (computerSelection === "scissors") {
            humanScore++;
            message.textContent += " You won this round!"
            human.textContent = `Your Score: ${humanScore}`;
        }
    }


    if (humanSelection === "paper") {
        if (computerSelection === "paper") {
            message.textContent += " This round ends in a tie!";
        }

        if (computerSelection === "rock") {
            humanScore++;
            message.textContent += " You won this round!"
            human.textContent = `Your Score: ${humanScore}`;
        }

        if (computerSelection === "scissors") {
            computerScore++;
            message.textContent += " You lost this round!"
            computer.textContent = `Computer Score: ${computerScore}`;
        }
    }


    if (humanSelection === "scissors") {
        if (computerSelection === "paper") {
            humanScore++;
            message.textContent += " You won this round!"
            human.textContent = `Your Score: ${humanScore}`;
        }

        if (computerSelection === "rock") {
            computerScore++;
            message.textContent += " You lost this round!"
            computer.textContent = `Computer Score: ${computerScore}`;
        }

        if (computerSelection === "scissors") {
            message.textContent += " This round ends in a tie!";
        }
    }

    // compare computerSelection and humanSelection using nested if statements
    // console.log a message
    // increment computerScore or humanScore

}

function click(e) {
    computerSelection = getComputerChoice();
    humanSelection = e.target.id;
    compare(computerSelection, humanSelection);
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore ) {
            winner.textContent = `You won with a score of ${humanScore} to ${computerScore}!!!!`;
        } else if (computerScore > humanScore) {
            winner.textContent = `You lost with a score of ${humanScore} to ${computerScore}!`;
        } else {
            winner.textContent = `It was a tie! ${humanScore} to ${computerScore}`;
        }
        group.removeEventListener("click", click);
    }
}

group.addEventListener("click", click);
