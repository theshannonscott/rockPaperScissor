alert("Lets play Rock, Paper, Scissors! (Game is Best of Five) \nType answer exactly as shown")

let playerScore = 0;
let computerScore = 0;

alert (`Player's Score =  ${playerScore}\nComputer's Score = ${computerScore}`)



function getComputerChoice(choice){
  return Math.floor(Math.random() * choice); 
};

function getPlayerChoice(){
 let choice = prompt ("Rock, Paper, or Scissors?");
return choice.toLowerCase()};

let playerChoice = getPlayerChoice();
let compChoice = getComputerChoice(3);


switch (compChoice){
  case 0:
    compChoice = "rock"
      break;
      case 1:
          compChoice = "paper";
          break;
          case 2:
              compChoice = "scissors";
              break;
}

function compare() {if (playerChoice === compChoice){alert (`It's a tie!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); computerScore = computerScore + 1; playerScore = playerScore + 1;}
else if (playerChoice === "rock" && compChoice === "scissors") {alert (`Player wins!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); playerScore = playerScore + 1;}
else if(playerChoice === "rock" && compChoice === "paper"){alert(`Computer wins!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); computerScore = computerScore + 1;}
else if (playerChoice === "paper" && compChoice === "scissors"){alert(`Computer wins!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); computerScore = computerScore + 1;} 
else if(playerChoice === "paper" && compChoice === "rock"){alert(`Player wins!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); playerScore = playerScore + 1;}
else if (playerChoice === "scissors" && compChoice === "paper"){alert(`Player wins!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); playerScore = playerScore + 1;}
else if(playerChoice === "scissors" && compChoice === "rock"){alert(`Computer wins!!! \nPlayer's choice = ${playerChoice} \nComputer's choice = ${compChoice}`); computerScore = computerScore + 1;};}

compare(playerChoice, compChoice);

alert("Next Round");
//second round
playerChoice = getPlayerChoice();
compChoice = getComputerChoice(3);
switch (compChoice){
  case 0:
    compChoice = "rock"
      break;
      case 1:
          compChoice = "paper";
          break;
          case 2:
              compChoice = "scissors";
              break;
}

compare(playerChoice, compChoice);

alert("Next Round");
//third round
playerChoice = getPlayerChoice();
compChoice = getComputerChoice(3);
switch (compChoice){
  case 0:
    compChoice = "rock"
      break;
      case 1:
          compChoice = "paper";
          break;
          case 2:
              compChoice = "scissors";
              break;
}

compare(playerChoice, compChoice);

alert("Next Round");
//fouth round
playerChoice = getPlayerChoice();
compChoice = getComputerChoice(3);
switch (compChoice){
  case 0:
    compChoice = "rock"
      break;
      case 1:
          compChoice = "paper";
          break;
          case 2:
              compChoice = "scissors";
              break;
}

compare(playerChoice, compChoice);

alert("Next Round");
//fifth round
playerChoice = getPlayerChoice();
compChoice = getComputerChoice(3);
switch (compChoice){
  case 0:
    compChoice = "rock"
      break;
      case 1:
          compChoice = "paper";
          break;
          case 2:
              compChoice = "scissors";
              break;
}

compare(playerChoice, compChoice);

let winner = (playerScore > computerScore) ? `Player Wins: Player's Score = ${playerScore}`: (playerScore > computerScore) ? `Computer wins: Computer's Score = ${computerScore}`:
`It's a tie! \nPlayer's Score = ${playerScore} \nComputer's Score = ${computerScore}`;

alert(winner)

alert("Inspect Browser Console for Score!")

console.log(`Player's Score =  ${playerScore}`);
console.log(`Computer's Score = ${computerScore}`);
