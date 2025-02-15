document.getElementById("contactForm").addEventListener("submit", function(event) {
    let formValid = true;

    // Validar Nombre y Apellido (solo letras y espacios)
    ["nombre", "apellido"].forEach(id => {
        let input = document.getElementById(id);
        let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        if (!regex.test(input.value.trim())) {
            input.classList.add("is-invalid");
            formValid = false;
        } else {
            input.classList.remove("is-invalid");
        }
    });

    // Validar Email
    let email = document.getElementById("email");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        email.classList.add("is-invalid");
        formValid = false;
    } else {
        email.classList.remove("is-invalid");
    }

    // Validar Teléfono (entre 8 y 15 dígitos numéricos)
    let telefono = document.getElementById("telefono");
    let telRegex = /^[0-9]{8,15}$/;
    if (!telRegex.test(telefono.value.trim())) {
        telefono.classList.add("is-invalid");
        formValid = false;
    } else {
        telefono.classList.remove("is-invalid");
    }

    // Validar que se seleccione un servicio
    let servicio = document.getElementById("servicio");
    if (servicio.value === "") {
        servicio.classList.add("is-invalid");
        formValid = false;
    } else {
        servicio.classList.remove("is-invalid");
    }

    // Validar Mensaje (mínimo 10 caracteres)
    let mensaje = document.getElementById("mensaje");
    if (mensaje.value.trim().length < 10) {
        mensaje.classList.add("is-invalid");
        formValid = false;
    } else {
        mensaje.classList.remove("is-invalid");
    }

    // Si hay errores, prevenir el envío
    if (!formValid) {
        event.preventDefault();
    }
});