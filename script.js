// console.log("Hello World")

const resultsDiv = document.querySelector("#results");
const runningScoreDiv = document.querySelector("#runningScore");
const rock_Button = document.querySelector("#rock_Button");
const scissors_Button = document.querySelector("#scissors_Button");
const paper_Button = document.querySelector("#paper_Button");
 

rock_Button.addEventListener("click", function() {
    //alert("Human chose Rock!");
    const computerSelection = getComputerChoice(); 
    playRound("rock", computerSelection)
  });

  scissors_Button.addEventListener("click", function() {
    //alert("Human chose Scissors!");
    const computerSelection = getComputerChoice(); 
    playRound("scissors", computerSelection)
  });

  paper_Button.addEventListener("click", function() {
    //alert("Human chose Paper!");
    const computerSelection = getComputerChoice(); 
    playRound("paper", computerSelection)
  });

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




function playRound(humanChoice, computerChoice) {
    if (
       (humanChoice === "rock" && computerChoice === "scissors") ||
       (humanChoice === "scissors" && computerChoice === "paper") ||
       (humanChoice === "paper" && computerChoice === "rock") 
    ){
        resultsDiv.textContent = "Human wins!";
        humanScore += 1;
    }
    
    else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") 
     ){
        resultsDiv.textContent = "Computer wins!";
         computerScore += 1;
     }
     else{
        resultsDiv.textContent = "Its a tie!";
     }
     //console.log({humanScore,computerScore})
     runningScoreDiv.textContent= `Human: ${humanScore} | Computer: ${computerScore}`;
     return {humanScore,computerScore};
}

let humanScore = 0 ;
let computerScore = 0 ;


function playGame(){
    const computerSelection = getComputerChoice();  

    playRound(humanSelection, computerSelection);
}

// for (let i = 0; i < 5; i++) {
//     playGame();
    
//   }

// //   declare overall winner:
// if(humanScore > computerScore){
//     console.log("overall winner: human");
// }
// else if (humanScore < computerScore){
//     console.log("overall winner: computer");
// }
// else {
//     console.log("overall winner: none");
// }