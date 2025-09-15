// we can load multiple scripts files at the same time and it will load from top to bottom. This is a feature worth noting in web dev

let score = JSON.parse(localStorage.getItem("score")) || {
	wins: 0,
	losses: 0,
	ties: 0,
};

//here score is only populated by what was saved to local storage previously and does not update during runtime. It is loaded upon refresh of the page because all JS is loaded at refresh but functions in buttons work onclick. We want player to see his last score upon page reload.
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

	//moving the same score code here ensures score gets updated during runtime. Now we have used same code twice, therefore calls for a function
	updateScoreElement();
	document.querySelector(".js-result").innerHTML = result;
	document.querySelector(
		".js-move"
	).innerHTML = `<p class="js-move">You <img src="images/image-${playerMove}.png" alt="" class="move-button"> <img src="images/image-${computerMove}.png" alt="" class="move-button"> Computer </p>`;
}


//function to generate a random move/computer move
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


//function to update score. I am able to use the score object here
function updateScoreElement() {
	document.querySelector(
		".js-score"
	).innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


// Here we are using the concept of advanced functions being that functions are values to add additional feature and improve on RPS game.

//to auto play the game, we need to provide a move to playRPSGame(). We can use same computerMove generator as player move to move. This time, player is computer.

//function autoPlay() {
//	//to generate new playerMove at interval call, it must be inside interval
//	setInterval(function () {
//		const playerMove = generateComputerMove();
//		playRPSGame(playerMove);
//	}, 1000)
	
//}

//Suppose we want to stop the auto play function. In programming as can often be found in the real world, starting a process is easy but stopping the process requires some extra logic. In development, we are often tasked with writing logic that we can control ie knowing when it starts, keeping track of the process and stopping the process.

//Since our Auto Play button is already interactive, we want to be able to start and stop the game using thesame button. Here is when the concept of flags/indicators come into play.


// Imagine I want to be able to track the start of a 3 mins football match i am interested in and this game will be started by a new set of teams automatically if I do not end the game. Think of me as the match official. Before the game/round starts, I write dowm somewhere, gameStarted = false. If the round starts, I can write down somewhere, gameStarted = true. When it ends, I write down again/tick the checkbox for gameStarted = false. In that sense, If another official picks up my log, suppose he sees that my tracker last indicator is gameStarted =  true, it implies that the game is in progress right, and the reverse is the case if gameStarted = false.

//So we can track the state of the game at any given time. So we can write a logic that checks and does some logic (like ruuning the game) when the state is one thing and then another logic (like stopping) when the state is something else

//One would ask, why didnt we just declare a variable to collect the iterval id within the function and use it. but the challenge is that to clear an interval, it must be same interval id generated for that instance of setInterval, however, when we click the button each time, because isAutoPlaying is now true, the if condition will be false so the else will run, and the intervalid variable inside the function, which runs at every click will be undefined, so we cannot stop the autoplay. To solve this, we have interval id variable that will hold the most recently ran intervalid momentarily outside the function, so if we click the button a second time, we are not generating a new setInterval so no is generated based on isAutoPlaying = true

let isAutoPlaying = false; 

let intervalId;


function autoPlay() {
	//if autoplay isnt ongoing ==> !isAutoPlaying evaluates to true (when it flips)
	if (!isAutoPlaying) {
		intervalId = setInterval(() => {
		const playerMove = generateComputerMove();
		playRPSGame(playerMove);
		}, 1000);
		//
		isAutoPlaying = true;//all d while we loop
	} else {
		//to stop the setInterval function, there is an inbuilt clearInterval() function 
		clearInterval(intervalId);
		isAutoPlaying = false;
	}
	
}

//It is this change of isAutoPlaying state that helps us make the same button start and stop the game. Because each click of the button runs the function, the state at that time if not being updated would not be useful in either playinng the game or clearing the id

//We are now going to make another modificaton to our project using new knowledge of eventlisteners.
//Below here we are going to change all onclick jS that we wrote for RPS game to add event listeners as per best practice. One mistake people make is passing and calling the function at the same time like ...('click', playRPSGame('rock'))

document.querySelector('.js-rock-btn')
	.addEventListener('click', () => {
		playRPSGame('rock');
	});

document.querySelector(".js-paper-btn").addEventListener("click", () => {
	playRPSGame("paper");
});

document.querySelector(".js-scissor-btn").addEventListener("click", () => {
	playRPSGame("scissors");
});

document.querySelector(".js-reset-btn").addEventListener("click", () => {
	score.wins = 0;
	score.losses = 0;
	score.ties = 0;
	localStorage.removeItem("score");

	//we are able to use updateScoreElement cos default score is being used and all the variables there as used in the function are already 0
	updateScoreElement();

	document.querySelector(".js-move").innerHTML = "";
	document.querySelector(".js-result").innerHTML = "";
});

document.querySelector(".js-autoplay-btn").addEventListener("click", () => {
	autoPlay();
});

//So we see that we have added the features using event listeners but what if we want to be able to perform the operations with 'keydown' which is an another event. Say we want when we type 'r' it would play rock, 'p' for paper and 's' for scissors. Earlier in the course we discussed the event object when we looked at the onkeydown attribute etc. Where the event object is automatically available once we invoke the attribute. The addevent listeners also has access to that event object, but it is implicitly passed as a parameter to the event listener or as more commonly seen it is passed explicitly. Let us illustrate. Suppose we want to do something on keydown on any key we press on keyboard while on that specific webpage. To achieve that we get the body element;

//document.body gives us access to the body of the page and not just a small area, thereby allowing us to have complete control over evrything that goes on on the page an not a small section. Also allows us to be anywhere on the page and listen to specific things.
document.body.addEventListener('keydown', (event) => {
	//console.log('a key on keyboard is being pressed')
	//console.log(event.key);
	if (event.key === 'r') {
		playRPSGame('rock');
	} else if (event.key === 'p') {
		playRPSGame('paper');
	} else if (event.key === 's') {
		playRPSGame('scissors')
	}
})

// What we have succeeded in showing is how can run code based on different events. Now we apply addevent Listeners to todo List