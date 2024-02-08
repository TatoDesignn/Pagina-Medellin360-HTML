
function verificacion(){
    var email, password;

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    const imagen = document.getElementById('welcome');

    imagen.style.display = 'block';

    setTimeout(function() {
        imagen.style.opacity = 1;
      }, 500);
     
      
    setTimeout(function() {
        window.location.href = './html/map.html';
    }, 3000);
 }