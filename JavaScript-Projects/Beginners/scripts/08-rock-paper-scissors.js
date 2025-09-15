// we can load multiple scripts files at the same time and it will load from top to bottom. This is a feature worth noting in web dev

let score = JSON.parse(localStorage.getItem("score")) || {
	wins: 0,
	losses: 0,
	ties: 0,
};

//here score is only populated by what was saved to local storage previously and does not update during runtime. It is loaded upon refresh of the page, and we want it for the player.
updateScoreElement();

function playRPSGame(playerMove) {
	const computerMove = generateComputerMove();
	let result = "";

	if (playerMove === "rock") {
		if (computerMove === "rock") {
			result = "Tie.";
		} else if (computerMove === "paper") {
			result = "You lose.";
		} else if (computerMove === "scissors") {
			result = "You win.";
		}
	} else if (playerMove === "paper") {
		if (computerMove === "rock") {
			result = "You win.";
		} else if (computerMove === "paper") {
			result = "Tie.";
		} else if (computerMove === "scissors") {
			result = "You lose.";
		}
	} else if (playerMove === "scissors") {
		if (computerMove === "rock") {
			result = "You lose.";
		} else if (computerMove === "paper") {
			result = "You win.";
		} else if (computerMove === "scissors") {
			result = "Tie.";
		}
	}

	//update score with its values.:
	if (result === "You win.") {
		score.wins++;
	} else if (result === "You lose.") {
		score.losses++;
	} else if (result === "Tie.") {
		score.ties++;
	}

	localStorage.setItem("score", JSON.stringify(score));

	//moving the same score code here ensures updated score during runtime. Now we have used same code twice, therefore calls for a function
	updateScoreElement();
	document.querySelector(".js-result").innerHTML = result;
	document.querySelector(
		".js-move"
	).innerHTML = `<p class="js-move">You <img src="images/image-${playerMove}.png" alt="" class="move-button"> <img src="images/image-${computerMove}.png" alt="" class="move-button"> Computer </p>`;
}

function generateComputerMove() {
	const randomNumber = Math.random();

	let computerMove = "";

	if (randomNumber >= 0 && randomNumber < 1 / 3) {
		computerMove = "rock";
	} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		computerMove = "paper";
	} else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
		computerMove = "scissors";
	}
	return computerMove;
}

//I am able to use the score object here
function updateScoreElement() {
	document.querySelector(
		".js-score"
	).innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
