$(document).ready(function () {
	$("#b1").prop("disabled", true);
	$("#b2").prop("disabled", true);
	$("#b3").prop("disabled", true);
	$("#b4").prop("disabled", true);
	$("#b5").prop("disabled", true);
	$("#b6").prop("disabled", true);
	$("#b7").prop("disabled", true);
	$("#b8").prop("disabled", true);
	$("#b9").prop("disabled", true);
});
let backroundMusic = new Audio();
backroundMusic.src = "Resources/music.mp3";
backroundMusic.loop = true;
function start() {
	backroundMusic.play();

	$("#b1").prop("disabled", false);
	$("#b2").prop("disabled", false);
	$("#b3").prop("disabled", false);
	$("#b4").prop("disabled", false);
	$("#b5").prop("disabled", false);
	$("#b6").prop("disabled", false);
	$("#b7").prop("disabled", false);
	$("#b8").prop("disabled", false);
	$("#b9").prop("disabled", false);
	flag = 1;
		// Here, Printing Result
		if (flag == 1) {
			$("#turn").html("X");
		} else {
			$("#turn").html("O");
		}
}
function myfunc() {
	console.log("myfunc");
	// Setting DOM to all boxes or input field
	let b1 = $("#b1").val();
	let b2 = $("#b2").val();
	let b3 = $("#b3").val();
	let b4 = $("#b4").val();
	let b5 = $("#b5").val();
	let b6 = $("#b6").val();
	let b7 = $("#b7").val();
	let b8 = $("#b8").val();
	let b9 = $("#b9").val();

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if (
		(b1 == "x" || b1 == "X") &&
		(b2 == "x" || b2 == "X") &&
		(b3 == "x" || b3 == "X")
	) {
		$("#b1").css("background-color", "green");
		$("#b2").css("background-color", "green");
		$("#b3").css("background-color", "green");
		$("#b4").prop("disabled", true);
		$("#b5").prop("disabled", true);
		$("#b6").prop("disabled", true);
		$("#b7").prop("disabled", true);
		$("#b8").prop("disabled", true);
		$("#b9").prop("disabled", true);
		$("#print").html("Player X won");
	} else if (
		(b1 == "x" || b1 == "X") &&
		(b4 == "x" || b4 == "X") &&
		(b7 == "x" || b7 == "X")
	) {
		$("#b1").css("background-color", "green");
		$("#b4").css("background-color", "green");
		$("#b7").css("background-color", "green");
		$("#b2").prop("disabled", true);
		$("#b3").prop("disabled", true);
		$("#b5").prop("disabled", true);
		$("#b6").prop("disabled", true);
		$("#b8").prop("disabled", true);
		$("#b9").prop("disabled", true);
		$("#print").html("Player X won");
	} else if (
		(b7 == "x" || b7 == "X") &&
		(b8 == "x" || b8 == "X") &&
		(b9 == "x" || b9 == "X")
	) {
		$("#b7").css("background-color", "green");
		$("#b8").css("background-color", "green");
		$("#b9").css("background-color", "green");
		$("#b1").prop("disabled", true);
		$("#b2").prop("disabled", true);
		$("#b3").prop("disabled", true);
		$("#b4").prop("disabled", true);
		$("#b5").prop("disabled", true);
		$("#b6").prop("disabled", true);
		$("#print").html("Player X won");
	} else if (
		(b3 == "x" || b3 == "X") &&
		(b6 == "x" || b6 == "X") &&
		(b9 == "x" || b9 == "X")
	) {
		$("#b3").css("background-color", "green");
		$("#b6").css("background-color", "green");
		$("#b9").css("background-color", "green");
		$("#b1").prop("disabled", true);
		$("#b2").prop("disabled", true);
		$("#b4").prop("disabled", true);
		$("#b5").prop("disabled", true);
		$("#b7").prop("disabled", true);
		$("#b8").prop("disabled", true);
		$("#print").html("Player X won");
	} else if (
		(b1 == "x" || b1 == "X") &&
		(b5 == "x" || b5 == "X") &&
		(b9 == "x" || b9 == "X")
	) {
		$("#b1").css("background-color", "green");
		$("#b5").css("background-color", "green");
		$("#b9").css("background-color", "green");
		$("#b2").prop("disabled", true);
		$("#b3").prop("disabled", true);
		$("#b4").prop("disabled", true);
		$("#b6").prop("disabled", true);
		$("#b7").prop("disabled", true);
		$("#b8").prop("disabled", true);
		$("#print").html("Player X won");
	} else if (
		(b3 == "x" || b3 == "X") &&
		(b5 == "x" || b5 == "X") &&
		(b7 == "x" || b7 == "X")
	) {
		$("#b3").css("background-color", "green");
		$("#b5").css("background-color", "green");
		$("#b7").css("background-color", "green");
		$("#b1").prop("disabled", true);
		$("#b2").prop("disabled", true);
		$("#b4").prop("disabled", true);
		$("#b6").prop("disabled", true);
		$("#b8").prop("disabled", true);
		$("#b9").prop("disabled", true);
		$("#print").html("Player X won");
	} else if (
		(b2 == "x" || b2 == "X") &&
		(b5 == "x" || b5 == "X") &&
		(b8 == "x" || b8 == "X")
	) {
		$("#b2").css("background-color", "green");
		$("#b5").css("background-color", "green");
		$("#b8").css("background-color", "green");
		$("#b1").prop("disabled", true);
		$("#b3").prop("disabled", true);
		$("#b4").prop("disabled", true);
		$("#b6").prop("disabled", true);
		$("#b7").prop("disabled", true);
		$("#b9").prop("disabled", true);
		$("#print").html("Player X won");
	} else if (
		(b4 == "x" || b4 == "X") &&
		(b5 == "x" || b5 == "X") &&
		(b6 == "x" || b6 == "X")
	) {
		$("#b4").css("background-color", "green");
		$("#b5").css("background-color", "green");
		$("#b6").css("background-color", "green");
		$("#b1").prop("disabled", true);
		$("#b2").prop("disabled", true);
		$("#b3").prop("disabled", true);
		$("#b7").prop("disabled", true);
		$("#b8").prop("disabled", true);
		$("#b9").prop("disabled", true);
		$("#print").html("Player X won");
	}

	// Checking of Player X finsh
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if (
		(b1 == "0" || b1 == "0") &&
		(b2 == "0" || b2 == "0") &&
		(b3 == "0" || b3 == "0")
	) {
		$("#b1").css("background-color", "green");
		$("#b2").css("background-color", "green");
		$("#b3").css("background-color", "green");
		$("#b4").prop("disabled", true);
		$("#b5").prop("disabled", true);
		$("#b6").prop("disabled", true);
		$("#b7").prop("disabled", true);
		$("#b8").prop("disabled", true);
		$("#b9").prop("disabled", true);
		$("#print").html("Player 0 won");
	} else if (
		(b1 == "0" || b1 == "0") &&
		(b4 == "0" || b4 == "0") &&
		(b7 == "0" || b7 == "0")
	) {
		$("#b1").css("background-color", "green");
		$("#b4").css("background-color", "green");
		$("#b7").css("background-color", "green");
		$("#b2").prop("disabled", true);
		$("#b3").prop("disabled", true);
		$("#b5").prop("disabled", true);
		$("#b6").prop("disabled", true);
		$("#b8").prop("disabled", true);
		$("#b9").prop("disabled", true);
		$("#print").html("Player 0 won");
	} else if (
		(b7 == "0" || b7 == "0") &&
		(b8 == "0" || b8 == "0") &&
		(b9 == "0" || b9 == "0")
	) {
		$("#b7").css("background-color", "green");
		$("#b8").css("background-color", "green");
		$("#b9").css("background-color", "green");
		$("#b1").prop("disabled", true);
		$("#b2").prop("disabled", true);
		$("#b3").prop("disabled", true);
		$("#b4").prop("disabled", true);
		$("#b5").prop("disabled", true);
		$("#b6").prop("disabled", true);
		$("#print").html("Player 0 won");
	} else if (
		(b3 == "0" || b3 == "0") &&
		(b6 == "0" || b6 == "0") &&
		(b9 == "0" || b9 == "0")
	) {
		$("#b3").css("background-color", "green");
		$("#b6").css("background-color", "green");
		$("#b9").css("background-color", "green");
		$("#b1").prop("disabled", true);
		$("#b2").prop("disabled", true);
		$("#b4").prop("disabled", true);
		$("#b5").prop("disabled", true);
		$("#b7").prop("disabled", true);
		$("#b8").prop("disabled", true);
		$("#print").html("Player 0 won");
	} else if (
		(b1 == "0" || b1 == "0") &&
		(b5 == "0" || b5 == "0") &&
		(b9 == "0" || b9 == "0")
	) {
		$("#b1").css("background-color", "green");
		$("#b5").css("background-color", "green");
		$("#b9").css("background-color", "green");
		$("#b2").prop("disabled", true);
		$("#b3").prop("disabled", true);
		$("#b4").prop("disabled", true);
		$("#b6").prop("disabled", true);
		$("#b7").prop("disabled", true);
		$("#b8").prop("disabled", true);
		$("#print").html("Player 0 won");
	} else if (
		(b3 == "0" || b3 == "0") &&
		(b5 == "0" || b5 == "0") &&
		(b7 == "0" || b7 == "0")
	) {
		$("#b3").css("background-color", "green");
		$("#b5").css("background-color", "green");
		$("#b7").css("background-color", "green");
		$("#b1").prop("disabled", true);
		$("#b2").prop("disabled", true);
		$("#b4").prop("disabled", true);
		$("#b6").prop("disabled", true);
		$("#b8").prop("disabled", true);
		$("#b9").prop("disabled", true);
		$("#print").html("Player 0 won");
	} else if (
		(b2 == "0" || b2 == "0") &&
		(b5 == "0" || b5 == "0") &&
		(b8 == "0" || b8 == "0")
	) {
		$("#b2").css("background-color", "green");
		$("#b5").css("background-color", "green");
		$("#b8").css("background-color", "green");
		$("#b1").prop("disabled", true);
		$("#b3").prop("disabled", true);
		$("#b4").prop("disabled", true);
		$("#b6").prop("disabled", true);
		$("#b7").prop("disabled", true);
		$("#b9").prop("disabled", true);
		$("#print").html("Player 0 won");
	} else if (
		(b4 == "0" || b4 == "0") &&
		(b5 == "0" || b5 == "0") &&
		(b6 == "0" || b6 == "0")
	) {
		$("#b4").css("background-color", "green");
		$("#b5").css("background-color", "green");
		$("#b6").css("background-color", "green");
		$("#b1").prop("disabled", true);
		$("#b2").prop("disabled", true);
		$("#b3").prop("disabled", true);
		$("#b7").prop("disabled", true);
		$("#b8").prop("disabled", true);
		$("#b9").prop("disabled", true);
		$("#print").html("Player 0 won");
	}

	// Checking of Player 0 finsh
	// Here, Checking about Tie
	else if (
		(b1 == "X" || b1 == "0") &&
		(b2 == "X" || b2 == "0") &&
		(b3 == "X" || b3 == "0") &&
		(b4 == "X" || b4 == "0") &&
		(b5 == "X" || b5 == "0") &&
		(b6 == "X" || b6 == "0") &&
		(b7 == "X" || b7 == "0") &&
		(b8 == "X" || b8 == "0") &&
		(b9 == "X" || b9 == "0")
	) {
		$("#print").html("Match Tie");
	} else {
		// Here, Printing Result
		if (flag == 1) {
			$("#turn").html("X");
		} else {
			$("#turn").html("O");
		}
	}
}

// Function to reset game
function myfunc_2() {
	$("#b1").val("");
	$("#b1").prop("disabled", false);
	$("#b1").css("background-color", "");
	$("#b2").val("");
	$("#b2").prop("disabled", false);
	$("#b2").css("background-color", "");
	$("#b3").val("");
	$("#b3").prop("disabled", false);
	$("#b3").css("background-color", "");
	$("#b4").val("");
	$("#b4").prop("disabled", false);
	$("#b4").css("background-color", "");
	$("#b5").val("");
	$("#b5").prop("disabled", false);
	$("#b5").css("background-color", "");
	$("#b6").val("");
	$("#b6").prop("disabled", false);
	$("#b6").css("background-color", "");
	$("#b7").val("");
	$("#b7").prop("disabled", false);
	$("#b7").css("background-color", "");
	$("#b8").val("");
	$("#b8").prop("disabled", false);
	$("#b8").css("background-color", "");
	$("#b9").val("");
	$("#b9").prop("disabled", false);
	$("#b9").css("background-color", "");
	$("#print").html("");
	flag = 1
	if (flag == 1) {
		$("#turn").html("X");
	} else {
		$("#turn").html("O");
	}
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {
	if (flag == 1) {
		$("#b1").val("X");
		$("#b1").prop("disabled", true);
		flag = 0;
	} else {
		$("#b1").val("0");
		$("#b1").prop("disabled", true);
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		$("#b2").val("X");
		$("#b2").prop("disabled", true);
		flag = 0;
	} else {
		$("#b2").val("0");
		$("#b2").prop("disabled", true);
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		$("#b3").val("X");
		$("#b3").prop("disabled", true);
		flag = 0;
	} else {
		$("#b3").val("0");
		$("#b3").prop("disabled", true);
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		$("#b4").val("X");
		$("#b4").prop("disabled", true);
		flag = 0;
	} else {
		$("#b4").val("0");
		$("#b4").prop("disabled", true);
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		$("#b5").val("X");
		$("#b5").prop("disabled", true);
		flag = 0;
	} else {
		$("#b5").val("0");
		$("#b5").prop("disabled", true);
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		$("#b6").val("X");
		$("#b6").prop("disabled", true);
		flag = 0;
	} else {
		$("#b6").val("0");
		$("#b6").prop("disabled", true);
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		$("#b7").val("X");
		$("#b7").prop("disabled", true);
		flag = 0;
	} else {
		$("#b7").val("0");
		$("#b7").prop("disabled", true);
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		$("#b8").val("X");
		$("#b8").prop("disabled", true);
		flag = 0;
	} else {
		$("#b8").val("0");
		$("#b8").prop("disabled", true);
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		$("#b9").val("X");
		$("#b9").prop("disabled", true);
		flag = 0;
	} else {
		$("#b9").val("0");
		$("#b9").prop("disabled", true);
		flag = 1;
	}
}
