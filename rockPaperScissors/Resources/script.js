let playerName = "";

$(".enterName").click(function(){
	let user = JSON.parse(localStorage.get('users'));
	playerName = $("#inputbox").val()
	$("#namePlayer").html(playerName)
	$("#nameInput").css("display", "none")
})

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
			user.loseRPS+=1;
			localStorage.setItem('users',JSON.stringify(user))
			user = JSON.parse(localStorage.get('users'));
		} else if (playerChoice == "Paper") {
			gameWinner = playerName;
			$(".winner").html(gameWinner);
			victoryNoise.play();
			user.winsRPS+=1;
			localStorage.setItem('users',JSON.stringify(user))
			user = JSON.parse(localStorage.get('users'));
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
			user.loseRPS+=1;
			localStorage.setItem('users',JSON.stringify(user))
			user = JSON.parse(localStorage.get('users'));
		} else if (playerChoice == "Scissors") {
			gameWinner = playerName;
			$(".winner").html(gameWinner);
			victoryNoise.play();
			user.winsRPS+=1;
			localStorage.setItem('users',JSON.stringify(user))
			user = JSON.parse(localStorage.get('users'));
		} else {
			gameWinner = "Tie";
			$(".winner").html(gameWinner);
			tieNoise.play();
		}
	} else if (compChoice == "Scissors") {
		$(".compSelected").html(compChoice);
		if (playerChoice == "Rock") {
			gameWinner = playerName;
			$(".winner").html(gameWinner);
			victoryNoise.play()
			user.winsRPS+=1;
			localStorage.setItem('users',JSON.stringify(user))
			user = JSON.parse(localStorage.get('users'));
		} else if (playerChoice == "Paper") {
			gameWinner = "Computer";
			$(".winner").html(gameWinner);
			defeatNoise.play();
			user.loseRPS+=1;
			localStorage.setItem('users',JSON.stringify(user))
			user = JSON.parse(localStorage.get('users'));
		} else {
			gameWinner = "Tie";
			$(".winner").html(gameWinner);
			tieNoise.play()
		}
	}
});
