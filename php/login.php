<?php

include "conexion.php";
session_start();

$email = $_POST["email"];
$contrasena = $_POST["contrasena"];

$verificacion = mysqli_query($conexion, "SELECT * FROM usuarios WHERE email='$email' 
AND contrasena='$contrasena'");

if(mysqli_num_rows($verificacion) > 0){
    $usuario = mysqli_fetch_assoc($verificacion);
    $nombreUsuario = $usuario["nombre"];
    $_SESSION['nombreUsuario'] = $nombreUsuario; 

    header("location: ../html/map.html");
}
else{
    echo "<script>alert('Email or password incorrect.')</script>";
    echo"<script>window.location.href = '../index.php';</script>";
}