const validar_email = (email) => {
    const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
};

const mostrarContrasena = () => {
    const contrasena = document.getElementById("contrasena");
    const ojo = document.getElementById("mostrarCont");
    if (contrasena.type == "password") {
        contrasena.type = "text";
        ojo.innerHTML = '<i class="far fa-eye-slash op-7"></i>';
    } else {
        contrasena.type = "password";
        ojo.innerHTML = '<i class="far fa-eye op-7"></i>';
    }
};

const formRegistro = () => {
    Swal.fire({
        title: "Tu organización ya está registrada",
        html: '<img src="./img/alert-r.png" alt="logo cemefi" width="100px"><br>' +
            '<p class="font-12 op-7">En nuestro registro su organización ya está dada de alta, por favor póngase en contacto con nosotros para enviarle la información correspondiente e ingresar al registro de su organización</p> ',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Contactar a soporte",
        confirmButtonAriaLabel: "Thumbs up, great!",
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire({
                title: "Contacto realizado.",
                icon: "success",
                text: "",
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: "Aceptar",
                confirmButtonAriaLabel: "Thumbs up, great!",
            });
        }
    });
};

const cambiarFormulario = (form) => {
    const progressBar = document.getElementById("progress-registro");
    const btnNextForm1 = document.getElementById("nextForm1");
    const btnNextForm2 = document.getElementById("nextForm2");
    const parte1 = document.getElementById("parte-1");
    const parte2 = document.getElementById("parte-2");

    if (form == 2) {
        progressBar.style.width = "50%";
        btnNextForm1.style.display = "none";
        btnNextForm2.style.display = "block";
        parte1.style.display = "none";
        parte2.style.display = "block";
    } else if (form == 3) {
        const razonSocialText = document.getElementById("razonSocialText");
        const rfcText = document.getElementById("rfcText");
        const figText = document.getElementById("figText");
        const cpText = document.getElementById("cpText");
        const coloniaText = document.getElementById("coloniaText");
        const estadoText = document.getElementById("estadoText");
        const alcaldiaText = document.getElementById("alcaldiaText");
        const calleText = document.getElementById("calleText");
        const numText = document.getElementById("numText");
        const telText = document.getElementById("telText");
        const faceText = document.getElementById("faceText");
        const twitText = document.getElementById("twitText");
        const instText = document.getElementById("instText");
        const linkText = document.getElementById("linkText");

        if (razonSocialText.value == "") {
            Swal.fire({
                title: "Campo vacío",
                icon: "warning",
                html: 'El campo <b>"Razón social"</b> no puede quedar vacío',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: "Aceptar",
                confirmButtonAriaLabel: "Thumbs up, great!",
            });
            razonSocialText.style.borderBottom = "solid #e53935";
            return false;
        }
        razonSocialText.style.borderBottom = "solid #00e676";
        if (rfcText.value == "") {
            Swal.fire({
                title: "Campo vacío",
                icon: "warning",
                html: 'El campo <b>"RFC"</b> no puede quedar vacío',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: "Aceptar",
                confirmButtonAriaLabel: "Thumbs up, great!",
            });
            rfcText.style.borderBottom = "solid #e53935";
            return false;
        }
        rfcText.style.borderBottom = "solid #00e676";
        if (figText.value == "0") {
            Swal.fire({
                title: "Campo vacío",
                icon: "warning",
                html: 'El campo <b>"Figura juridica"</b> no puede quedar vacío',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: "Aceptar",
                confirmButtonAriaLabel: "Thumbs up, great!",
            });
            figText.style.borderBottom = "solid #e53935";
            return false;
        }
        figText.style.borderBottom = "solid #00e676";
        if (cpText.value == "") {
            Swal.fire({
                title: "Campo vacío",
                icon: "warning",
                html: 'El campo <b>"Código postal"</b> no puede quedar vacío',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: "Aceptar",
                confirmButtonAriaLabel: "Thumbs up, great!",
            });
            cpText.style.borderBottom = "solid #e53935";
            return false;
        }
        cpText.style.borderBottom = "solid #00e676";
        if (coloniaText.value == "0") {
            Swal.fire({
                title: "Campo vacío",
                icon: "warning",
                html: 'El campo <b>"Colonia"</b> no puede quedar vacío',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: "Aceptar",
                confirmButtonAriaLabel: "Thumbs up, great!",
            });
            coloniaText.style.borderBottom = "solid #e53935";
            return false;
        }
        coloniaText.style.borderBottom = "solid #00e676";
        if (estadoText.value == "0") {
            Swal.fire({
                title: "Campo vacío",
                icon: "warning",
                html: 'El campo <b>"Estado"</b> no puede quedar vacío',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: "Aceptar",
                confirmButtonAriaLabel: "Thumbs up, great!",
            });
            estadoText.style.borderBottom = "solid #e53935";
            return false;
        }
        estadoText.style.borderBottom = "solid #00e676";
        if (alcaldiaText.value == "0") {
            Swal.fire({
                title: "Campo vacío",
                icon: "warning",
                html: 'El campo <b>"Alcadía o municipio"</b> no puede quedar vacío',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: "Aceptar",
                confirmButtonAriaLabel: "Thumbs up, great!",
            });
            alcaldiaText.style.borderBottom = "solid #e53935";
            return false;
        }
        alcaldiaText.style.borderBottom = "solid #00e676";
        if (calleText.value == "") {
            Swal.fire({
                title: "Campo vacío",
                icon: "warning",
                html: 'El campo <b>"Calle"</b> no puede quedar vacío',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: "Aceptar",
                confirmButtonAriaLabel: "Thumbs up, great!",
            });
            calleText.style.borderBottom = "solid #e53935";
            return false;
        }
        calleText.style.borderBottom = "solid #00e676";
        if (numText.value == "") {
            Swal.fire({
                title: "Campo vacío",
                icon: "warning",
                html: 'El campo <b>"Número"</b> no puede quedar vacío',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: "Aceptar",
                confirmButtonAriaLabel: "Thumbs up, great!",
            });
            numText.style.borderBottom = "solid #e53935";
            return false;
        }
        numText.style.borderBottom = "solid #00e676";
        if (telText.value == "") {
            Swal.fire({
                title: "Campo vacío",
                icon: "warning",
                html: 'El campo <b>"Teléfono"</b> no puede quedar vacío',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: "Aceptar",
                confirmButtonAriaLabel: "Thumbs up, great!",
            });
            telText.style.borderBottom = "solid #e53935";
            return false;
        }
        telText.style.borderBottom = "solid #00e676";
        progressBar.style.width = "100%";
        Swal.fire({
            title: "Registro realizado correctamente",
            icon: "success",
            html: "",
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: "Aceptar",
            confirmButtonAriaLabel: "Thumbs up, great!",
        });
        // Aquí es donde se haría el submit con js al formulario con su id
    }
};

const validarFormContacto = () => {
    const asunto = document.getElementById("asunto").value;
    const correo = document.getElementById("correoC").value;
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;

    if (asunto == "") {
        Swal.fire({
            title: "Campo vacío",
            icon: "warning",
            html: 'El campo <b>"Asunto"</b> no puede quedar vacío',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: "Aceptar",
            confirmButtonAriaLabel: "Thumbs up, great!",
        });
        return false;
    } else if (correo == "") {
        Swal.fire({
            title: "Campo vacío",
            icon: "warning",
            html: 'El campo <b>"Correo de contacto"</b> no puede quedar vacío',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: "Aceptar",
            confirmButtonAriaLabel: "Thumbs up, great!",
        });
        return false;
    } else if (!validar_email(correo)) {
        Swal.fire({
            title: "Correo no valido.",
            icon: "warning",
            html: "Escribe correctamente tu correo electrónico.",
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: "Aceptar",
            confirmButtonAriaLabel: "Thumbs up, great!",
        });
        return false;
    } else if (nombre == "") {
        Swal.fire({
            title: "Campo vacío",
            icon: "warning",
            html: 'El campo <b>"Nombre completo"</b> no puede quedar vacío',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: "Aceptar",
            confirmButtonAriaLabel: "Thumbs up, great!",
        });
        return false;
    }
    Swal.fire({
        title: "Pronto nos pondremos en contacto",
        html: '<img src="./img/alert-r.png" alt="logo cemefi" width="100px"><br>' +
            '<p class="font-12 op-7">¡Gracias por ponerse en contacto con nosotros! En breve responderemos a sus inquietudes</p> ',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Volver al directorio",
        confirmButtonAriaLabel: "Thumbs up, great!",
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        location.href = "./index.html";
    });
    // submit del form va aquí
};

const validarFormLogin = () => {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    if (usuario == "") {
        Swal.fire({
            title: "Campo vacío",
            icon: "warning",
            html: 'El campo <b>"Usuario"</b> no puede quedar vacío',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: "Aceptar",
            confirmButtonAriaLabel: "Thumbs up, great!",
        });
        return false;
    } else if (contrasena == "") {
        Swal.fire({
            title: "Campo vacío",
            icon: "warning",
            html: 'El campo <b>"Contraseña"</b> no puede quedar vacío',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: "Aceptar",
            confirmButtonAriaLabel: "Thumbs up, great!",
        });
        return false;
    }
    // submit del form va aquí
};

const validarFormRestablecer = () => {
    const usuario = document.getElementById("usuario-r").value;
    const correo = document.getElementById("correo-r").value;

    if (usuario == "") {
        Swal.fire({
            title: "Campo vacío",
            icon: "warning",
            html: 'El campo <b>"Usuario"</b> no puede quedar vacío',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: "Aceptar",
            confirmButtonAriaLabel: "Thumbs up, great!",
        });
        return false;
    } else if (correo == "") {
        Swal.fire({
            title: "Campo vacío",
            icon: "warning",
            html: 'El campo <b>"Correo electrónico"</b> no puede quedar vacío',
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: "Aceptar",
            confirmButtonAriaLabel: "Thumbs up, great!",
        });
        return false;
    } else if (!validar_email(correo)) {
        Swal.fire({
            title: "Correo no valido.",
            icon: "warning",
            html: "Escribe correctamente tu correo electrónico.",
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: "Aceptar",
            confirmButtonAriaLabel: "Thumbs up, great!",
        });
        return false;
    }
    // submit del form va aquí
};