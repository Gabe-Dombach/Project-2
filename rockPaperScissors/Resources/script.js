const rockPaperScissors = ["rock", "paper", "scissors"];

$(".choices").click(function () {
	const random = Math.floor(Math.random() * rockPaperScissors.length);

	compChoice = rockPaperScissors[random];

	$(".rock-Choice").click(function () {
		playerChoice = "rock";
	});

	$(".paper-Choice").click(function () {
		playerChoice = "paper";
	});

	$(".scissors-Choice").click(function () {
		playerChoice = "scissors";
	});

	if (compChoice == "rock") {
		if (playerChoice == "rock") {
			window.alert("Computer chose Rock. You tied.");
		} else if (playerChoice == "paper") {
			window.alert("Computer chose Rock. You won!");
		} else {
			window.alert("Computer chose Rock. You lost.");
		}
	} else if (compChoice == "paper") {
		if (playerChoice == "rock") {
			window.alert("Computer chose Paper. You lost.");
		} else if (playerChoice == "paper") {
			window.alert("Computer chose Paper. You tied.");
		} else {
			window.alert("Computer chose Paper. You won!.");
		}
	} else {
		if (playerChoice == "rock") {
			window.alert("Computer chose Scissors. You won!");
		} else if (playerChoice == "paper") {
			window.alert("Computer chose Scissors. You lost.");
		} else {
			window.alert("Computer chose Scissors. You tied.");
		}
	}
});
