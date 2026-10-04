/*This is a function that let's computer randomly
  pick a choice between rock, paper and scissors using math.random */
function getComputerChoice() {
    let randomValue = Math.floor(Math.random()*3);

   if (randomValue === 0) {
    computerResult.textContent = "Computer: Rock";
    return "rock";
   }
   else if (randomValue === 1) {
    computerResult.textContent = "Computer: Paper";
    return "paper";
   }
   else {
    computerResult.textContent = "Computer: Scissors";
    return "scissors";
   }
    
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const divResults = document.querySelector("#results");
const computerResult = document.querySelector("#computer");
const humanResult = document.querySelector("#human");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");

score.textContent = "You: 0  Computer: 0";
computerResult.textContent = "Computer:";
humanResult.textContent = "User:"


/*This function declares variables for computer and user score
  declares another function that scores each round based on conditionals
  and finally decides a winner*/
function playGame() {

    let humanScore = 0;

    let computerScore = 0;



    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
        humanResult.textContent = "User: Rock";
    });
    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        humanResult.textContent = "User: Paper";
    });
    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
        humanResult.textContent = "User: Scissors";
    });


    function playRound(humanChoice, computerChoice) {

        winner.textContent = "";

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
        }
        else if (
            (computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")
        ) {
            computerScore++;
        }
        
        score.textContent = "You: " + humanScore + "  Computer: " + computerScore;

        if(humanScore === 5 || computerScore === 5) {

            if(humanScore > computerScore) {
                winner.textContent = "Congratulations, you won!";
            }
            else if(humanScore < computerScore) {
                winner.textContent = "Unfortunately, you lost this time :(";
            }

            humanScore = 0;
            computerScore = 0;
            
        }
    }    
}


playGame();








