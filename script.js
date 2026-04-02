document.addEventListener('DOMContentLoaded', function() {
    let loginSection = document.getElementById('loginSection');
    let fechaSection = document.getElementById('fechaSection');
  //  let recursosSection = document.getElementById('recursosSection');
    let idUsuarioInput = document.getElementById('idUsuario');
    let verificarBtn = document.getElementById('verificarBtn');
    let loginMessage = document.getElementById('loginMessage');
 /*   let diaInput = document.getElementById('dia');
    let mesInput = document.getElementById('mes');
    let anoInput = document.getElementById('ano');
    let enviarFechaBtn = document.getElementById('enviarFechaBtn');
    let recursosSelect = document.getElementById('recursosSelect');
    let reservarBtn = document.getElementById('reservarBtn');
    let reservaMessage = document.getElementById('reservaMessage');*/

 //   let idUsuario = null;
 //   let fechaSeleccionada = null;


verificarBtn.addEventListener('click', function() {
        let id = parseInt(idUsuarioInput.value);
        if (isNaN(id)) {
            loginMessage.textContent = 'Ingrese un número válido.';
            return;
        }
        fetch('server.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'verificarUsuario', idUsuario: id })
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            if (data.exists) {
                idUsuario = id;
                loginSection.style.display = 'none';
                fechaSection.style.display = 'block';
                loginMessage.textContent = '';
            } else {
                loginMessage.textContent = 'idUsuario no existe. Intente de nuevo.';
            }
        }).catch(function(error) {
            console.error('Error:', error);
        });
    });




})

