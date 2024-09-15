function rock() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
    console.log("rock");
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
    console.log("computerMove");
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  } else {
    console.log("computerMove");
  }

  let result = "";
  if (computerMove === "rock") {
    result = "You Tie";
  } else if (computerMove === "paper") {
    result = "You lose.";
  } else if (computerMove === "Scissors") {
    result = "You win.";
  }
  alert(`You picked rock, Computer picked ${computerMove}.  ${result}`);
}

function paper() {
  randomNumber = Math.random();
  computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
    console.log("rock");
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
    console.log("computerMove");
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  console.log("computerMove");

  result = "";
  if (computerMove === "rock") {
    result = "You win";
  } else if (computerMove === "Scissors") {
    result = "You lose.";
  } else if (computerMove === "paper") {
    result = "Tie.";
  }
  alert(`You picked paper, Computer picked ${computerMove}.  ${result}`);
}

function scissors() {
  randomNumber = Math.random();
  computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
    console.log("rock");
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
    console.log("computerMove");
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  console.log("computerMove");
  result = "";
  if (computerMove === "rock") {
    result = "You lose.";
  } else if (computerMove === "Scissors") {
    result = "Tie.";
  } else if (computerMove === "paper") {
    result = "You win.";
  }
  alert(`You picked scissors, Computer picked ${computerMove}. ${result}`);
}
