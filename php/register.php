<?php

include "conexion.php";

$username = $_POST["username"];
$name = $_POST["name"];
$name = ucfirst($name);
$lastName = $_POST["lastName"];
$lastName = ucfirst($lastName);
$email = $_POST["email"];
$password = $_POST["contrasena"];


$query = "INSERT INTO usuarios(username, nombre, lastName, email, contrasena)
          VALUES('$username', '$name', '$lastName', '$email', '$password')";

$verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE email='$email'");
$verificar_username = mysqli_query($conexion, "SELECT * FROM usuarios WHERE username='$username'");

if(mysqli_num_rows($verificar_correo) > 0){
    echo "<script>alert('This email is already registered.');
    window.location.href = '../html/informacion.php';</script>";
    exit();
}

if(mysqli_num_rows($verificar_username) > 0){
    echo "<script>alert('This username is already registered.');
    window.location.href = '../html/informacion.php';</script>";
    exit();
}

$ejecutar = mysqli_query($conexion, $query); 

if($ejecutar){
    echo "
        <script>window.location.href = '../html/terminos.html';</script>
    ";
}
else{
    echo "
    <script>window.location.href = '../html/informacion.php';</script>
";
}