let userArr = [];
$(document).ready(function(){
  $('.submit').click(function(){
      let curretStorage = JSON.parse(localStorage.getItem('users'));
        if(curretStorage == null){
            const newUser = {
                userName :$('#username').val(),
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
        else{
            window.alert('INCORRECT CODE')
        }
  });
  

  
});