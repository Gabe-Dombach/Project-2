let userArr = [];
$(document).ready(function(){
    function isEmail(address){
        address = address.split('')
        if(address.indexOf('@') != -1 && address.indexOf('@') != 0 && address.indexOf('.' ) && address.indexOf('.') > address.indexOf('@')){
            return true;
        }
        else{
            return false;
        }
    }
    
  $('.submit').click(function(){
      let curretStorage = JSON.parse(localStorage.getItem('users'));
        if(curretStorage == null && isEmail($('#email').val())){
            const newUser = {
                userName :$('#username').val(),
                email:$('#email').val(),
                winsTic:0,
                loseTic:0,
                winsRPS:0,
                loseRPS:0
            }
            localStorage.setItem('users',JSON.stringify(newUser))
        }
        else if($('#username').val() == curretStorage.userName){
            window.location.replace('../main_page.html');
        }
        else if(!isEmail($('#email').val())){
            window.alert('Please enter a valid email adress!')
        }
        else{
            window.alert('INCORRECT CODE')
        }
  });
  


});