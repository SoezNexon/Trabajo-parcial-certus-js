/* Al estar listo el documento */
$("document").ready(function () {

    /* Caputar evento Submit */
    $("#registroEstudiante").submit(function () {
        return validarDatos();
    })
})


/* Función Validar Datos */
function validarDatos() {
    /* Preguntar si se envia formulario */
    let pregunta = confirm("¿Seguro que deseas enviar?");
    if (pregunta) { // Caso presiona Aceptar

        /* Obtener campos */
        let inputName       = $("#inputName")[0].value;
        let inputLastName   = $("#inputLastName")[0].value;
        let inputDni        = $("#inputDni")[0].value;
        let inputEmail      = $("#inputEmail")[0].value;
        let inputPhone      = $("#inputPhone")[0].value;
        let inputUser       = $("#inputUser")[0].value;
        let inputPassword   = $("#inputPassword")[0].value;
        let inputRepassword = $("#inputRepassword")[0].value;
        let bolAccept       = $("#bolAccept")[0].value;
        

        /* Validar nuestro formulario */
        if (inputName.length > 50 || inputName.length < 2) {
            alert("Su nombre no es aceptado.");
            return false;
        }

        if (inputLastName.length == 0) {
            alert("Debe ingresar sus Apellidos")
            return false;
        }

        if (inputDni.length > 9 || inputDni.length < 8) {
            alert("El Número de DNI no es correcto.");
            return false;
        }

        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail) == false) {
            alert("Su correo electrónico está mal");
            return false;
        }
        
        if (inputPhone.length > 10 || inputPhone < 2 ) {
            alert("El Número de celular es incorrecto");
            return false;
        }

        if (inputUser.length > 50 || inputUser < 2) {
            alert("Usuario invalido")
            return false;
        }
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(inputPassword)== false){
            alert("Contraseña invalida");
            return false;
        }
        
        if (inputPassword != inputRepassword) {
            alert("Las contraseñas no coinciden")
            return false;
        }



        /* Mandar confirmación de envio */
        return true;

    } else { // Caso presiona Cancelar
        return false;
    }
}

