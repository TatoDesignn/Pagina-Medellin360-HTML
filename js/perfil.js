var derecha = document.getElementById("derecha");
var izquierda = document.getElementById("izquierda");
const scroll = document.getElementById("scroll");

var btnAjuste = document.getElementById("settings");
var venta = document.getElementById("Ajustes");

var act = false;

derecha.addEventListener("click", function() {
    scroll.scrollLeft += 500;
});

izquierda.addEventListener("click", function() {
    scroll.scrollLeft -= 500;
});

function verificar(){
    if(scroll.scrollLeft >= 370){
        derecha.style.display = "none";
        izquierda.style.display = "flex";
    }
}

function verificar2(){
    if(scroll.scrollLeft == 0){
        derecha.style.display = "flex";
        izquierda.style.display = "none";
    }
}

setInterval(verificar, 200);
setInterval(verificar2, 200);

btnAjuste.addEventListener("click", function(){
    if(act == false){
        venta.style.display = "flex";
        act = true;
    }
    else{
        venta.style.display = "none";
        act = false;
    }
});
