
function verificacion(){
    var email, password;

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if(email == "medallo360@gmail.com" && password == "medallo360"){
        window.location.href = "map.html";
    }
    else{
        alert("Usuario o contraseña incorrecta.");
    }

 }