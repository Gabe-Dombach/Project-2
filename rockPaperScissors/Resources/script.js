const rockPaperScissors = ["Rock", "Paper", "Scissors"];
let victoryNoise = new Audio();
victoryNoise.src='Resources/win.mp3'
let defeatNoise = new Audio();
defeatNoise.src='Resources/defeat.mp3'
let tieNoise = new Audio();
tieNoise.src='Resources/tie.mp3'
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
			defeatNoise.play();
		} else if (playerChoice == "Paper") {
			gameWinner = "Player";
			$(".winner").html(gameWinner);
			victoryNoise.play();
		} else {
			gameWinner = "Tie";
			$(".winner").html(gameWinner);
			tieNoise.play()
		}
	} else if (compChoice == "Paper") {
		$(".compSelected").html(compChoice);
		if (playerChoice == "Rock") {
			gameWinner = "Computer";
			$(".winner").html(gameWinner);
			defeatNoise.play();
		} else if (playerChoice == "Scissors") {
			gameWinner = "Player";
			$(".winner").html(gameWinner);
			victoryNoise.play();
		} else {
			gameWinner = "Tie";
			$(".winner").html(gameWinner);
			tieNoise.play();
		}
	} else if (compChoice == "Scissors") {
		$(".compSelected").html(compChoice);
		if (playerChoice == "Rock") {
			gameWinner = "Player";
			$(".winner").html(gameWinner);
			victoryNoise.play()
		} else if (playerChoice == "Paper") {
			gameWinner = "Computer";
			$(".winner").html(gameWinner);
			defeatNoise.play();
		} else {
			gameWinner = "Tie";
			$(".winner").html(gameWinner);
			tieNoise.play()
		}
	}
});
