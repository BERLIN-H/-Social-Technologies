<?php
session_start();
$conn = new mysqli("localhost", "root", "", "mi_sitio");

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM usuarios WHERE correo = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        // Verifica la contraseña
        if ($password == $row["contraseña"]) {
            $_SESSION["usuario"] = $row["nombre"];
            
            // Redirige al inicio
            header("Location: trending.html");
            exit();
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "No se encontró una cuenta con ese correo.";
    }
}

$conn->close();
?>
