////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* 

var move = "" ;
move = move || ‘getInput()’; */;
}


function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* 

var move = "" ;
move = move || ‘randomPlay()’; */;

}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* 
var playerMove = 0 ;
var computerMove = 0 ;

{
    if(playerMove  === computerMove){
    result = 'tie';
    } 
    
}    if(playerMove  === 'rock'){
        if(computerMove === 'paper'){
        result ='computer';
        }
}
 
    if(playerMove  === 'rock'){
        if(computerMove === 'scissors'){
        result = 'player';
        }

}

    if(playerMove  === 'paper'){
        if(computerMove === 'rock'){
        result = 'player';
        }

}

    if(playerMove  === 'paper'){
        if(computerMove === 'scissors'){
        result = 'computer';
        }

}
    if(playerMove  === 'scissors'){
        if(computerMove === 'rock'){
        result = 'computer';
        }

}
    if(playerMove  === 'scissors'){
        if(computerMove === 'paper'){
        result = 'player';
        }
}
   */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /*  

  while (playerWins < 5 && computerWins < 5) {
       if  (playerMove === 'player'){
            playerWins +=1; 
       }
       else if (playerMove === 'computer'){
            computerWins +=1;
       }
       else if (computerMove === 'player'){
            playerWins +=1; 
       }
       
       else  (computerMove === 'computer');{
            computerWins +=1; 
           
       }
   }
   
      if  (playerWins > computerWins) {
         console.log("PLAYER WINS");
 }

      else {
        (playerWins > computerWins); {
         console.log("COMPUTER WINS");
    } 
 } */
     return [playerWins, computerWins];
}

