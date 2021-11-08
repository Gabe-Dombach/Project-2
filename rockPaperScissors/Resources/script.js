const rockPaperScissors = ["Rock", "Paper", "Scissors"];
//player choice calls
$(".rock-Choice").click(function () {
	playerChoice = "Rock";
	$(".playerSelected").html(playerChoice);
});

$(".paper-Choice").click(function () {
	playerChoice = "Paper";
	$(".playerSelected").html(playerChoice);
});

$(".scissor-Choice").click(function () {
	playerChoice = "Scissors";
	$(".playerSelected").html(playerChoice);
});

$(".choices").click(function () {
	const random = Math.floor(Math.random() * rockPaperScissors.length); //Random choice generator (AI oponent)

	compChoice = rockPaperScissors[random];

	//win logic
	if (compChoice == "Rock") {
		$(".compSelected").html(compChoice);
		if (playerChoice == "Scissors") {
			let gameWinner = "Computer";
			$(".winner").html(gameWinner);
		} else if (playerChoice == "Paper") {
			gameWinner = "Player";
			$(".winner").html(gameWinner);
		} else {
			gameWinner = "Tie";
			$(".winner").html(gameWinner);
		}
	} else if (compChoice == "Paper") {
		$(".compSelected").html(compChoice);
		if (playerChoice == "Rock") {
			gameWinner = "Computer";
			$(".winner").html(gameWinner);
		} else if (playerChoice == "Scissors") {
			gameWinner = "Player";
			$(".winner").html(gameWinner);
		} else {
			gameWinner = "Tie";
			$(".winner").html(gameWinner);
		}
	} else if (compChoice == "Scissors") {
		$(".compSelected").html(compChoice);
		if (playerChoice == "Rock") {
			gameWinner = "Player";
			$(".winner").html(gameWinner);
		} else if (playerChoice == "Paper") {
			gameWinner = "Computer";
			$(".winner").html(gameWinner);
		} else {
			gameWinner = "Tie";
			$(".winner").html(gameWinner);
		}
	}
});
