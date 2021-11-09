<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
window.onload = function() { 
    var name = localStorage.getItem('username');
    if(name != "undefined" || name != "null") { 
        document.getElementById('WelcomeMessage')
    }
}
a=JSON.parse((localStorage.getItem("users")));
a.push({name: username, password: password});
localStorage.setItem('currentUser',JSON.stringify(a));
for(var i=0; i<a.length; i++)
  {
   var li = document.createElement("li");
   li.innerHTML=a[i]['name'];
   document.getElementById("listuser").appendChild(li);
}
console.log("gabe is gey")