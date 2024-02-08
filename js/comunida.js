var barra = document.getElementById("animacion");
var barra2 = document.getElementById("animacion2");
var btnComunidad = document.getElementById("community");
var btnChat = document.getElementById("chat");
var ventana1 = document.getElementById("ventana1");
var ventana2 = document.getElementById("ventana2");

btnComunidad.addEventListener("click", function(){
    barra.style.display = "none";
    barra2.style.display = "block";
    ventana1.style.display = "none";
    ventana2.style.display = "flex";
});

chat.addEventListener("click", function(){
    barra2.style.display = "none";
    barra.style.display = "block";
    ventana2.style.display = "none";
    ventana1.style.display = "flex";
});