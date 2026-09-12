/*This is a function that let's computer randomly
  pick a choice between rock, paper and scissors using math.random */
function getComputerChoice() {
    let randomValue = Math.floor(Math.random()*3);

   if (randomValue === 0) {
    console.log("rock");
    return "rock";
   }
   else if (randomValue === 1) {
    console.log("paper");
    return "paper";
   }
   else {
    console.log("scissors");
    return "scissors";
   }
    
}

//This function let's a user manually type in his choice
function getHumanChoice() {
    let userInput = prompt("Type in your choice:");
    console.log("You played " + userInput);
    return userInput;
}




/*This function declares variables for computer and user score
  declares another function that scores each round based on conditionals
  and finally decides a winner*/
function playGame() {

    let humanScore = 0;

    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {


        if(humanChoice === "rock" && computerChoice === "scissors") {
        humanScore ++;
        console.log("You win! Rock beats scissors");
        }

        else if(humanChoice === "paper" && computerChoice === "scissors") {
            computerScore ++;
            console.log("You lose! Scissors beat paper");
        }

        else if(humanChoice === "rock" && computerChoice === "paper") {
            computerScore ++;
            console.log("You lose! Paper beats rock");
        }

        else if(humanChoice === "scissors" && computerChoice === "paper") {
            humanScore ++;
            console.log("You win! Scissors beat paper");
        }

        else if(humanChoice === "paper" && computerChoice === "rock") {
            humanScore ++;
            console.log("You win! Paper beats rock");
        }

        else if(humanChoice === "scissors" && computerChoice === "rock") {
            computerScore ++;
            console.log("You lose! Rock beats scissors");
        }

        else {
            console.log("It's a draw!");
        }

        console.log("You: " + humanScore + "  Computer: " + computerScore);
    }

    console.log("---Round one---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("---Round two---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("---Round three---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("---Round four---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("---Round five---");
    playRound(getHumanChoice(), getComputerChoice());

    if(humanScore > computerScore) {
        return console.log("Congratulations, you won!");
    }
    else if(humanScore < computerScore) {
        return console.log("Unfortunately, you lost this time :(");
    }
    else {
        console.log("It's a tie!")
    }


   
    
}


playGame();








