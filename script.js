// console.log("Hello World")
// test


function getComputerChoice() {
    let num  = Math.random() 
    if (num <= 0.33){
        console.log("rock") ;
        return "rock";
    }
    else if (num <= 0.66){
        console.log("paper");
        return "paper";
    }
    else {
        console.log("scissors");
        return "scissors";
    }
}

function getHumanChoice() {
    let ans = prompt("Human: rock, paper, or scissors?", "you forgot!")
    console.log(ans)
    return ans
}





function playRound(humanChoice, computerChoice) {
    if (
       (humanChoice === "rock" && computerChoice === "scissors") ||
       (humanChoice === "scissors" && computerChoice === "paper") ||
       (humanChoice === "paper" && computerChoice === "rock") 
    ){
        console.log("human wins");
        humanScore += 1;
    }
    
    else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") 
     ){
         console.log("computer wins");
         computerScore += 1;
     }
     else{
        console.log("its a tie!");
     }
     console.log({humanScore,computerScore})
     return {humanScore,computerScore};
}

let humanScore = 0 ;
let computerScore = 0 ;


function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();  

    playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
    playGame();
  }
