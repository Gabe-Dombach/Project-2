let playerName = localStorage.getItem('userName');
let user = JSON.parse(localStorage.getItem('users'));
let playAgainstPlayer = false
let playerTurn = 1
let compChoice = ""
let playerChoice = ""


$(document).ready(function()  {
	$("#namePlayer").html(user.userName);
})

$("#solo").click(function() {
	playAgainstPlayer = false
})

$("#coOp").click(function() {
	playAgainstPlayer = true
})

// $(".enterName").click(function(){
// 	playerName = $("#inputbox").val()
// 	$("#namePlayer").html(playerName)
// 	$("#nameInput").css("display", "none")
// })

const rockPaperScissors = ["Rock", "Paper", "Scissors"];
let victoryNoise = new Audio();
victoryNoise.src='Resources/win.mp3'
let defeatNoise = new Audio();
defeatNoise.src='Resources/defeat.mp3'
let tieNoise = new Audio();
tieNoise.src='Resources/tie.mp3'
//player choice calls


$(".rock-Choice").click(function () {
	if (playAgainstPlayer == true) {
		if (playerTurn == 1) {
			playerChoice = "Rock";
			$(".playerSelected").html(playerChoice);
			playerTurn = 2
		}
		else {
			compChoice = "Rock";
			$("compChoice").html(compChoice);
			playerTurn = 1
		}
	}
	else if (playAgainstPlayer == false) {
		playerChoice = "Rock";
		$(".playerSelected").html(playerChoice);
	}
});

$(".paper-Choice").click(function () {
	if (playAgainstPlayer == true) {
		if (playerTurn == 1) {
			playerChoice = "Paper";
			$(".playerSelected").html(playerChoice);
			playerTurn = 2
		}
		else {
			compChoice = "Paper";
			$("compChoice").html(compChoice);
			playerTurn = 1
		}
	}
	else if (playAgainstPlayer == false){
		playerChoice = "Paper";
		$(".playerSelected").html(playerChoice);
	}
});

$(".scissor-Choice").click(function () {
	if (playAgainstPlayer == true) {
		if (playerTurn == 1) {
			playerChoice = "Scissors";
			$(".playerSelected").html(playerChoice);
			playerTurn = 2
		}
		else {
			compChoice = "Scissors";
			$("compChoice").html(compChoice);
			playerTurn = 1
		}
	}
	else if (playAgainstPlayer == false){
		playerChoice = "Scissors";
		$(".playerSelected").html(playerChoice);
	}
});

$(".choices").click(function () {
	if (playAgainstPlayer == false) {
	const random = Math.floor(Math.random() * rockPaperScissors.length); //Random choice generator (AI oponent)

	compChoice = rockPaperScissors[random];
	}

	//win logic
	if (compChoice == "Rock") {
		$(".compSelected").html(compChoice);
		if (playerChoice == "Scissors") {
			let gameWinner = "Computer";
			$(".winner").html(gameWinner);
			defeatNoise.play();
			user.loseRPS+=1;
			localStorage.setItem('users',JSON.stringify(user))
			user = JSON.parse(localStorage.getItem('users'));
		} else if (playerChoice == "Paper") {
			gameWinner = playerName;
			$(".winner").html(gameWinner);
			victoryNoise.play();
			user.winsRPS+=1;
			localStorage.setItem('users',JSON.stringify(user))
			user = JSON.parse(localStorage.getItem('users'));
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
			user = JSON.parse(localStorage.getItem('users'));
		} else if (playerChoice == "Scissors") {
			gameWinner = playerName;
			$(".winner").html(gameWinner);
			victoryNoise.play();
			user.winsRPS+=1;
			localStorage.setItem('users',JSON.stringify(user))
			user = JSON.parse(localStorage.getItem('users'));
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
			user = JSON.parse(localStorage.getItem('users'));
		} else if (playerChoice == "Paper") {
			gameWinner = "Computer";
			$(".winner").html(gameWinner);
			defeatNoise.play();
			user.loseRPS+=1;
			localStorage.setItem('users',JSON.stringify(user))
			user = JSON.parse(localStorage.getItem('users'));
		} else {
			gameWinner = "Tie";
			$(".winner").html(gameWinner);
			tieNoise.play()
		}
	}
});
