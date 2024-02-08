<?php
    session_start(); // Iniciar sesión

    if(isset($_SESSION['nombreUsuario'])){
        $nombreUsuario = $_SESSION['nombreUsuario']; // Obtener el nombre de usuario de la sesión
    }
    else{
        // Si no hay una sesión activa, redirigir a otra página o realizar alguna acción
        header("location: otro-archivo.php");
        exit; // Detener la ejecución del resto del código en este archivo
    }
?>

<!DOCTYPE html>
<html>
    <head lang="es">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/perfil.css">
        <link rel="icon" href="../image/logo2.png">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
        <title>MEDELLIN 360</title>
    </head>
    <body>
        <header>
            <div class="contenedor">
                <img class="settings" id="settings" src="../image/perfil/settings.png" alt="Settings">
            </div>
            <img class="logo" src="../image/perfil/logo.png" alt="Logo">
            <div class="circulo"></div>
            <h1><?php echo $nombreUsuario ?></h1>
        </header>
        <img class="efect" src="../image/fondo4.png" alt="Dec">
        <img class="efect2" src="../image/fondo5.png" alt="Dec"> 
        <main>
            <div class="Ajustes" id="Ajustes">
                <h1>Settings and privacy</h1>
                <h2>Account center</h2>
                <h2>Notifications</h2>
                <h2>Account privacy</h2>
                <h2 id="credits">Credits</h2>
                <a href="../php/logOut.php" id="logOut"><h2 id="logOut">Log out</h2></a>
            </div>
            <div class="scroll" id="scroll">
                <div class="centro1">
                    <div class="ventana1">
                        <div class="follows">
                            <h2 class="linea">6 <br> Publications</h2>
                            <h2>100 <br> Followers</h2>
                        </div>
                        <div class="medallas">
                            <img id="medallaC" src="../image/perfil/medalla1.png" alt="Medalla 1">
                            <img src="../image/perfil/medalla2.png" alt="Medalla 2">
                            <img src="../image/perfil/medalla3.png" alt="Medalla 3">
                        </div>
                        <div class="descripcion">
                            <span>Hey men i am from colombia, i wants to visit new places, i dont talk english</span>
                        </div>
                        <div class="progreso">
                            <h2 class="separador2">Account level</h2>
                            <h2>Achivements 3/98</h2>
                            <div class="progresoA">
                                <div class="progresoD"></div>
                            </div>
                        </div>
                        <!--<div class="intereses">
                            <span>Interests</span>
                            <img src="../image/gustos/Pets.png" alt="gusto1">
                            <img src="../image/gustos/hiking.png" alt="gusto2">
                            <img src="../image/gustos/Food.png" alt="gusto3">
                        </div>-->
                    </div>
                </div>
                <div class="centro2">
                    <div class="ventana2">
                        <div class="feed">
                            <h2>Feed</h2>
                            <div class="imagenes">
                                <img src="../image/perfil/p1.png" alt="post1">
                                <img src="../image/perfil/p2.png" alt="post2">
                                <img src="../image/perfil/p3.png" alt="post3">
                                <img src="../image/perfil/p4.png" alt="post4">
                                <img src="../image/perfil/p5.png" alt="post5">
                                <img src="../image/perfil/p6.png" alt="post6">
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div class="botoneras">
                <div class="derecha" id="derecha">
                    <img src="../image/perfil/derecha.png" alt="derecha">
                </div>
                <div class="izquierda" id="izquierda">
                    <img src="../image/perfil/izquierda.png" alt="izquierda">
                </div>
            </div>
        </main>
        <footer class="Footer-options">
            <ul>
                <li><a href="./home.html"><img src="../image/home.png" class="home" alt="Home"></a></li>
                <li><a href="./agenda.html"><img src="../image/Agenda.png" class="Diary" alt="Diary"></a></li>
                <div class="center">
                    <a href="./map.html"><img src="../image/logo2.png" alt="Logo"></a>
                </div>
                <li><a href="./comunidad.html"><img src="../image/Comunidad.png" class="comunidad" alt="Comunity"></a></li>
                <li><a href="./perfil.html"><img src="../image/perfil2.png" class="perfil" alt="Perfil"></a></li>
            </ul>
        </footer> 
        <script src="../js/perfil.js"></script>
    </body>
</html>