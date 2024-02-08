<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/style.css">
        <link rel="icon" href="./image/logo2.png">
        <title>MEDELLIN 360</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    </head>
    <body>
        <header>
            <img src="./image/Welcome.png" alt="Welcome" id="welcome">
            <img class="logo" src="./image/Logo.png" alt="LOGO">
            <img class="efect" src="./image/Fondo.png" alt="Dec">
            <img class="efect2" src="./image/fondo2.png" alt="Dec">
        </header>
        <main>
            <div class="Text">
                <h1>Welcome to <br> Medellín!</h1>
                <span>Explorer</span>
            </div>
            <form action="./php/login.php" method="POST" class="form">
                <label class="email">
                    <input type="text" name="email" id="email" placeholder="Email" autocomplete="email" required>
                </label>
                <label class="password">
                    <input type="password" name="contrasena" id="password" placeholder="Password" required>
                </label>
                <button type="submit">Log In</button>
            </form>
            <footer>
                <a href="#"><span>Forgot Password?</span></a>
                <a href="#" class="spann"><span>Don´t have an account?</span></a>

                <a href="./html/genero.html"><button type="button">Create</button></a>
            </footer>
            <script src="./js/script.js"></script>
        </main>
    </body>
</html>