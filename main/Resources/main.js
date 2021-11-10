$(document).ready(function(){
    $('.reset').click(function(){
        localStorage.removeItem('users');
        window.location.replace('../sign-in/Up.html')
    })
})