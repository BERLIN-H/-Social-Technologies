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

function validarFormularioL() {
    // Obtener los valores de los campos
    var campoL1 = document.getElementById('campoL1').value;
    var campoL2 = document.getElementById('campoL2').value;
  
    // Validar que los campos no estén vacíos
    if (campoL1 === "" || campoL2 === "") {
      alert("Por favor, completa todos los campos.");
      return false;
    }
  
    // Si todo está bien, redirigir a otra página
    window.location.href = "trending.html";
  
    return false;
  }

function validarFormularioS() {
    // Obtener los valores de los campos
    var campoS1 = document.getElementById('campoS1').value;
    var campoS2 = document.getElementById('campoS2').value;
    var campoS3 = document.getElementById('campoS3').value;
  
    // Validar que los campos no estén vacíos
    if (campoS1 === "" || campoS2 === "" || campoS3 === "") {
      alert("Por favor, completa todos los campos.");
      return false;
    }

    //Redirigir a otra página
    window.location.href = "trending.html";
  
    return false;
  }
  