let userArr = {}

$(document).ready(function(){
    $('#submit').click(function(){
        const newUser = {};
        let address = $('#username').val();
        let test = false
        if(localStorage.getItem('users')===null){
         userArr = localStorage.get('users');
          newUser = {
            userName:address,
            wins:0,
            losses:0,

        }
        userArr.push(newUser);
        localStorage.setItem('users',userArr);
    }
    else{
        userArr = localStorage.getItem('users');
        for(let x=0; x<userArr.length;x++){
            if(userArr[x] == address){
                localStorage.setItem('currentUser',address);
                test = true

            }
        }}
        if(test==true){
            window.location.replace('../main_page.html');
        }
        else{
            userArr = localStorage.get('users');
          newUser = {
            userName:address,
            wins:0,
            losses:0,
        }
        localStorage.setItem('users',userArr.push(newUser));
        window.location.replace('../main_page.html');



    }
         
         });

        
  


});