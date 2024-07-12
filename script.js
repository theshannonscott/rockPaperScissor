alert("Lets play Rock, Paper, Scissors! (Game is Best of Five) \nType answer exactly as shown...")

let playerScore = 0;
let computerScore = 0;

alert (`SCORE \nPlayer's Score =  ${playerScore}\nComputer's Score = ${computerScore}`)



function getComputerChoice(choice){
  let answer= Math.floor(Math.random() * choice); 
  switch (answer){
    case 0:
      answer = "rock"
        break;
        case 1:
            answer = "paper";
            break;
            case 2:
                answer = "scissors";
                break;
  }
  return answer
};

function getPlayerChoice(){
 let choice = prompt ("Rock, Paper, or Scissors?");
return choice.toLowerCase()};

const playerChoice = getPlayerChoice();
const compChoice = getComputerChoice(3);

function round()
  {if (playerChoice === compChoice){alert (`It's a tie!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); computerScore = computerScore + 1; playerScore = playerScore + 1;}
else if (playerChoice === "rock" && compChoice === "scissors") {alert (`Player wins!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); playerScore = playerScore + 1;}
else if(playerChoice === "rock" && compChoice === "paper"){alert(`Computer wins!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); computerScore = computerScore + 1;}
else if (playerChoice === "paper" && compChoice === "scissors"){alert(`Computer wins!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); computerScore = computerScore + 1;} 
else if(playerChoice === "paper" && compChoice === "rock"){alert(`Player wins!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); playerScore = playerScore + 1;}
else if (playerChoice === "scissors" && compChoice === "paper"){alert(`Player wins!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); playerScore = playerScore + 1;}
else if(playerChoice === "scissors" && compChoice === "rock"){alert(`Computer wins!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); computerScore = computerScore + 1;} alert(`Next Round`);}

round(playerChoice, compChoice)