
$(document).ready(function(){
    $('.submit').click(function(){
        let userArr = new Array();
        let newUser = {};
        let address = $('#username').val();
        let test = false
        console.log(userArr);

        if(localStorage.getItem('users')==null){
          newUser = {
            userName:address,
            
            wins:0,
            losses:0,

        }
        userArr.push(newUser);
        localStorage.removeItem('users')
        localStorage.setItem('users',JSON.stringify(userArr));
    }
    else{
        userArr = localStorage.getItem('users');
        for(let x=0; x<userArr.length;x++){
            if(userArr[x] == address){
                localStorage.setItem('currentUser',x);
                test = true
                console.log(userArr);


            }
        }}
        if(test==true){
            window.location.replace('../main_page.html');
            console.log(userArr);

        }
        else{
            userArr = localStorage.getItem('users');

            console.log(userArr);

          newUser = {
            userName:address,
            wins:0,
            losses:0,
        }
        console.log(userArr);
        localStorage.removeItem('users')
        localStorage.setItem('users',JSON.stringify(newUser));
        localStorage.setItem('currentUser',userArr.length-1);
        window.location.replace('../main_page.html');



    }
         
         });

        
  


});