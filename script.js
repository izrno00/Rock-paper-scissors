function getComputerChoice() {
    let randomValue = Math.random();

   if (randomValue <= 0.33) {
    console.log("Rock");
   }
   else if (randomValue <= 0.66) {
    console.log("Paper");
   }
   else {
    console.log("Scissors");
   }
    
}

getComputerChoice();


