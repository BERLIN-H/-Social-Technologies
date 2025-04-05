function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('signupTab').classList.remove('active');
}

function showSignUp() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('signupTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
}

function validarFormularioS() {
    var campoS1 = document.getElementById('campoS1').value;
    var campoS2 = document.getElementById('campoS2').value;
    var campoS3 = document.getElementById('campoS3').value;

    if (campoS1 === "" || campoS2 === "" || campoS3 === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    // Permitir el envío del formulario a registrar.php
    return true;
}
