var place = document.getElementById("place");
var ventana = document.getElementById("ventana");
var salir = document.getElementById("salir");

place.addEventListener("click", function(){
    ventana.style.display = "flex";
})


salir.addEventListener("click", function(){
    ventana.style.display = "none";
})