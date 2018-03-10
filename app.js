// choice of player
function playerPlay() {
	let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
	if(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
		return playerChoice;
	} 
	else {
		console.log("enter a valid choice!");
		 return playerPlay();
	}
}
	
//choice of computer
function computerPlay() {
	let collection = ["Rock", "Paper", "Scissors"];
	//randomly generate a no from 0 to 2 and return that array element
	let ComputerChoice = collection[Math.floor(Math.random() * 3)];
	return ComputerChoice.toLowerCase();
}

//result of each each round
function playRound(playerSelection, ComputerSelection) {

	console.log("You:" + playerSelection + " Computer:" + ComputerSelection);

	switch(playerSelection) {

		case "rock":
			if(ComputerSelection == "rock") {
				console.log("Draw!!! Go Again");
				return ("draw");
			} 
			else if (ComputerSelection == "paper") {
				console.log("Computer Wins!!!");
				return ("computer");
			} 
			else {
				console.log("You Win!!!");
				return ("player");
			}

		case "paper":
			if(ComputerSelection == "paper") {
				console.log("Draw!!! Go Again");
				return ("draw");
			} 
			else if (ComputerSelection == "scissors") {
				console.log("Computer Wins!!!");
				return ("computer");
			} 
			else {
				console.log("You Win!!!");
				return ("player");
			}
			break;

		case "scissors":
			if(ComputerSelection == "scissors") {
				console.log("Draw!!! Go Again");
				return ("draw");
			} 
			else if (ComputerSelection == "rock") {
				console.log("Computer Wins!!!");
				return ("computer");
			} 
			else {
				console.log("You Win!!!");
				return ("player");
			}
			break;

	}
	
}

//tracking each round and displaying final result
function game() {

	let pCount = 0, cCount = 0;//wins of both players
	for(i = 0; i < 5; i++) {

		let result = playRound(playerPlay(), computerPlay());	
		if (result == "player") {
			pCount++;
		}
		else if (result == "computer") {
			cCount++;
		}
	}
	
	console.log("\nResults:     " + "Player = " + pCount + " Computer = " + cCount);
	if(pCount > cCount) {
		console.log("Player Wins!!!");
	}
	else if(pCount < cCount) {
		console.log("Computer Wins!!!");
	}
	else {
		console.log("It's a Draw!!!")
	}
	
}

game();

