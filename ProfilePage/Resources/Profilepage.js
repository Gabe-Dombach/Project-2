$(document).ready(function(){
    let currentVal = JSON.parse(localStorage.getItem('users'));
    $('.ticWins').text(currentVal.winsTic);
    $('.ticLoss').text(currentVal.loseTic);
    $('.rockWins').text(currentVal.winsRPS);
    $('.rockLoss').text(currentVal.loseRPS);

})