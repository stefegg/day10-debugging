let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];
let input = ["rock", "paper", "scissors"];
let playerInput = '';

function randomFrom(array) {
  return array[(Math.ceil(Math.random() * 3))];
}


function start(gameOver, computerChoices) {
  while (!gameOver) {
    result = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
    playerInput = result.toLowerCase();
    gameOver = checkInput(playerInput, computerChoices);
  }
}



function checkInput(input, computerChoices) {
  if (input === "quit") {
    return true;
  }

let computerChoice = randomFrom(computerChoices);


  if (computerChoice === "rock" && playerInput === "scissors") {
    alert("Computer wins! Rock > Scissors");
    return true;
  } else if (computerChoice === "scissors" && playerInput === "paper") {
    alert("Computer wins! Scissors > Paper");
    return true;
  } else if (computerChoice === "paper" && playerInput === "rock") {
    alert("Computer wins! Paper > Rock");
    return true;
  } else if (computerChoice === "paper" && playerInput === "scissors") {
    alert("You win! Scissors > Paper");
    return true;
  } else if (computerChoice === "rock" && playerInput === "paper") {
    alert("You win! Paper > Rock");
    return true;
  } else if (computerChoice === "scissors" && playerInput === "rock") {
    alert("You win! Rock > Scissors");
    return true;
  } else if (computerChoice === "paper" && playerInput === "paper") {
    alert("You both picked paper!\nTie hit refresh to go again!!!");
    return true;
  } else if (computerChoice === "scissors" && playerInput === "scissors") {
    alert("You both picked scissors!\nTie hit refresh to go again!!!");
    return true;
  } else if (computerChoice === "rock" && playerInput === "rock") {
    alert("You both picked rock!\nTie hit refresh to go again!!!");
    return true;
  } else if (computerChoice === undefined)
    alert("fail type quit and reload");
  }




// if (gameOver = true) {
//   gameOver = false;
// }

start(gameOver, computerChoices)
// alert("Please enter rock paper or scissors ");``
// return false
// }
