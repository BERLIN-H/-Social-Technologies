<?php
$conn = new mysqli("localhost", "root", "", "mi_sitio");

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];

$sql = "INSERT INTO usuarios (nombre, correo, contraseña) VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    // Registro exitoso, redirige a la página de inicio
    header("Location: trending.html");
    exit();
} else {
    echo "Error al registrar: " . $conn->error;
}

$conn->close();
?