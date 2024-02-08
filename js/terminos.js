var ventana = document.getElementById("ventana");
var salir = document.getElementById("salir");
var boton = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var titulo = document.getElementById("Titulo2");
var texto = document.getElementById("Texto2");
var check1 = document.getElementById("check1");
var check2 = document.getElementById("check2");
var trans = document.getElementById("trans");

var valida1 = false;
var valida2 = false;

boton.addEventListener("click", function(){
    ventana.style.display = "flex";
    titulo.innerHTML = "Privacy Policy";
    texto.innerHTML = "El Portal Único del Estado Colombiano (GOV.CO)" + 
    "Tiene por objeto facilitar al público en general el acceso a la " + 
    "información de las entidades públicas del nivel nacional y territorial."+ 
    "El uso de este Portal y su contenido está sujeto a las condiciones de uso " +
    "que más adelante se expondrán. Las personas, en adelante Ciudadanos-Usuarios " +
    "al acceder, navegar o usar este portal Web, reconocen que han leído, entendido "+ 
    "y se obligan a cumplir con estos términos y cumplir con todas las leyes y reglamentos" + 
    "aplicables. Si el Ciudadano - Usuario no está de acuerdo con estos términos y condiciones " +
    "de uso o con cualquier disposición de la Política de Privacidad, le sugerimos que se abstenga de acceder o navegar por este Portal."+
    "1. Aceptación de términos:" +
    "La prestación del servicio del Portal Único del Estado Colombiano (GOV.CO) es de carácter libre y gratuito para los usuarios y se rige" + 
    "por los términos y condiciones que se incluyen a continuación, los cuales se entienden como conocidos y aceptados por los Ciudadanos-Usuarios "+
    "del sitio, el uso de los datos personales del usuario se encuentran sujetos a la Política de Protección de Datos personales del Ministerio/Fondo de Tecnologías de la Información y las Comunicaciones. El Ministerio/Fondo de Tecnologías de la Información y las Comunicac";
})

boton2.addEventListener("click", function(){
    ventana.style.display = "flex";
    titulo.innerHTML = "Data Treatment";
    texto.innerHTML = "El Portal Único del Estado Colombiano (GOV.CO)" + 
    "Tiene por objeto facilitar al público en general el acceso a la " + 
    "información de las entidades públicas del nivel nacional y territorial."+ 
    "El uso de este Portal y su contenido está sujeto a las condiciones de uso " +
    "que más adelante se expondrán. Las personas, en adelante Ciudadanos-Usuarios " +
    "al acceder, navegar o usar este portal Web, reconocen que han leído, entendido "+ 
    "y se obligan a cumplir con estos términos y cumplir con todas las leyes y reglamentos" + 
    "aplicables. Si el Ciudadano - Usuario no está de acuerdo con estos términos y condiciones " +
    "de uso o con cualquier disposición de la Política de Privacidad, le sugerimos que se abstenga de acceder o navegar por este Portal."+
    "1. Aceptación de términos:" +
    "La prestación del servicio del Portal Único del Estado Colombiano (GOV.CO) es de carácter libre y gratuito para los usuarios y se rige" + 
    "por los términos y condiciones que se incluyen a continuación, los cuales se entienden como conocidos y aceptados por los Ciudadanos-Usuarios "+
    "del sitio, el uso de los datos personales del usuario se encuentran sujetos a la Política de Protección de Datos personales del Ministerio/Fondo de Tecnologías de la Información y las Comunicaciones. El Ministerio/Fondo de Tecnologías de la Información y las Comunicac";
})

salir.addEventListener("click", function(){
    ventana.style.display = "none";
})

check1.addEventListener("change", function(){
    if(!valida1){
        trans.classList.toggle("movimiento");
        valida1 = true;
    }
    else{
        trans.classList.toggle("movimiento");
        valida1 = false;
    }
})

check2.addEventListener("change", function(){
    if(!valida2){
        valida2 = true;
    }
    else{
        valida2 = false;
    }
})

function verificacion(){
    if(valida1 && valida2){
        window.location.href = '../html/gustos.html';
    }
    else{
        alert("Please accept the terms and conditions.");
    }
}

