alert("Lets play Rock, Paper, Scissors! (Game is Best of Five) \nType answer exactly as shown...")

/*let newPlayer.score = 0;
let computer.score = 0;*/

class player{
  constructor(
    score,
    choice,
    )
    {
      this.score = score;
      this.choice = choice;
      this.getPlayerChoice = function()
      {this.choice = prompt ("Rock, Paper, or Scissors?");
      return this.choice.toLowerCase()};
      this.getComputerChoice = function(answer){
        this.choice= Math.floor(Math.random() * answer); 
        switch (this.choice){
          case 0:
            this.choice = "rock"
              break;
              case 1:
                  this.choice = "paper";
                  break;
                  case 2:
                    this.choice = "scissors";
                      break;
        }
        return this.choice
      }
    }
}

const newPlayer = new player(0, "none");
const computer = new player (0, "none");


alert (`SCORE \nPlayer's Score =  ${newPlayer.score}\nComputer's Score = ${computer.score}`)


function playRound (){{if (newPlayer.choice === computer.choice){alert (`It's a tie!!! \nPlayer's choice = ${newPlayer.choice} \nComputer's choice = ${computer.choice}`); computer.score = computer.score + 1; newPlayer.score = newPlayer.score + 1;}
else if (newPlayer.choice === "rock" && computer.choice === "scissors") {alert (`Player wins!!! \nPlayer's choice = ${newPlayer.choice} \nComputer's choice = ${computer.choice}`); newPlayer.score = newPlayer.score + 1;}
else if(newPlayer.choice === "rock" && computer.choice === "paper"){alert(`Computer wins!!! \nPlayer's choice = ${newPlayer.choice} \nComputer's choice = ${computer.choice}`); computer.score = computer.score + 1;}
else if (newPlayer.choice === "paper" && computer.choice === "scissors"){alert(`Computer wins!!! \nPlayer's choice = ${newPlayer.choice} \nComputer's choice = ${computer.choice}`); computer.score = computer.score + 1;} 
else if(newPlayer.choice === "paper" && computer.choice === "rock"){alert(`Player wins!!! \nPlayer's choice = ${newPlayer.choice} \nComputer's choice = ${computer.choice}`); newPlayer.score = newPlayer.score + 1;}
else if (newPlayer.choice=== "scissors" && computer.choice === "paper"){alert(`Player wins!!! \nPlayer's choice = ${newPlayer.choice} \nComputer's choice = ${computer.choice}`); newPlayer.score = newPlayer.score + 1;}
else if(newPlayer.choice === "scissors" && computer.choice === "rock"){alert(`Computer wins!!! \nPlayer's choice = ${newPlayer.choice} \nComputer's choice = ${computer.choice}`); computer.score = computer.score + 1;} alert(`Next Round`);}}

newPlayer.getPlayerChoice();
computer.getComputerChoice(3);




/*let winner = (newPlayer.score > computer.score) ? `Player Wins: \nPlayer's Score = ${newPlayer.score}`: (newPlayer.score < computer.score) ? `Computer wins: \nComputer's Score = ${computer.score}`:
`It's a tie! \nPlayer's Score = ${newPlayer.score} \nComputer's Score = ${computer.score}`;

alert(winner)
console.log(winner)
alert("Inspect Browser Console for Score!")

console.log(`Player's Score =  ${newPlayer.score}`);
console.log(`Computer's Score = ${computer.score}`);*/
