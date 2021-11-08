const rockPaperScissors = ["rock", "paper", "scissors"];
//player choice calls
$(".rock-Choice").click(function () {
	playerChoice = "rock";
});

$(".paper-Choice").click(function () {
	playerChoice = "paper";
});

$(".scissor-Choice").click(function () {
	playerChoice = "scissors";
});

$(".choices").click(function () {
	const random = Math.floor(Math.random() * rockPaperScissors.length); //Random choice generator (AI oponent)

	compChoice = rockPaperScissors[random];

	//win logic
	if (compChoice == "rock") {
		if (playerChoice == "scissors") {
			window.alert("Computer chose Rock. You won.");
		} else if (playerChoice == "paper") {
			window.alert("Computer chose Rock. You won!");
		}
	} else if (compChoice == "paper") {
		if (playerChoice == "rock") {
			window.alert("Computer chose Paper. You lost.");
		} else if (playerChoice == "scissors") {
			window.alert("Computer chose Paper. You won.");
		}
	} else if (compChoice == "scissors") {
		if (playerChoice == "rock") {
			window.alert("Computer chose Scissors. You won!");
		} else if (playerChoice == "paper") {
			window.alert("Computer chose Scissors. You lost.");
		}
	} else if (compChoice == playerChoice) {
		window.alert(`Computer chose ${compChoice}. You tied.`);
	}
});
