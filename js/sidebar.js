$("#menu-toggle").click(function(e) {
    const btnSider = document.getElementById("menu-toggle");
    const content = document.getElementById("page-content-wrapper");
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    if ($("#wrapper").hasClass("toggled")) {
        content.style.opacity = "1";
    } else {
        content.style.opacity = "0";
    }
});

$("#close-menu").click(function(e) {
    const btnSider = document.getElementById("menu-toggle");
    const content = document.getElementById("page-content-wrapper");
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    if ($("#wrapper").hasClass("toggled")) {
        content.style.opacity = "1";
    } else {
        content.style.opacity = "0";
    }
});

$("#abrirModal").click(function() {
    $("#lib-anim").remove();
});

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}
const validarNav = () => {
    if (!readCookie("navItem")) {
        var expiresdate = new Date(2068, 1, 02, 11, 20);
        var cookievalue = "1";
        document.cookie =
            "navItem=" +
            encodeURIComponent(cookievalue) +
            "; expires=" +
            expiresdate.toUTCString();
    }
    $("ul li:eq(0)").click(function() {
        document.cookie = "navItem=1";
    });
    $("ul li:eq(2)").click(function() {
        document.cookie = "navItem=3";
    });
    $("ul li:eq(3)").click(function() {
        document.cookie = "navItem=4";
    });
    $("ul li:eq(4)").click(function() {
        document.cookie = "navItem=5";
    });
    $(".btn-contacto").click(function() {
        document.cookie = "navItem=6";
    });
    $(".navbar-brand").click(function() {
        document.cookie = "navItem=1";
    });

    if (readCookie("navItem") == "1") {
        $("li").removeClass("active");
        $("ul li:eq(0)").addClass("active");
    } else if (readCookie("navItem") == "2") {
        $("li").removeClass("active");
        $("ul li:eq(1)").addClass("active");
    } else if (readCookie("navItem") == "3") {
        $("li").removeClass("active");
        $("ul li:eq(2)").addClass("active");
    } else if (readCookie("navItem") == "4") {
        $("li").removeClass("active");
        $("ul li:eq(3)").addClass("active");
    } else if (readCookie("navItem") == "5") {
        $("li").removeClass("active");
        $("ul li:eq(4)").addClass("active");
    } else if (readCookie("navItem") == "6") {
        $("li").removeClass("active");
        $(".btn-contacto").css("background-color", "#FFD743");
    }
};
validarNav();

$(document).ready(function() {
    const menues = $("div>a.btn-blanco-md");
    const formsInfo = $(".forms-info>.form-inline");
    const formsnfo1 = $("#formsInfo1");
    const formsnfo2 = $("#formsInfo2");
    const formsnfo3 = $("#formsInfo3");
    const formsnfo4 = $("#formsInfo4");
    const formsnfo5 = $("#formsInfo5");
    const formsnfo6 = $("#formsInfo6");
    const formsnfo7 = $("#formsInfo7");
    const formsnfo8 = $("#formsInfo8");
    const formsnfo9 = $("#formsInfo9");
    const formsnfo10 = $("#formsInfo10");

    menues.click(function() {
        menues.removeClass("btn-blanco-md-active");
        $(this).addClass("btn-blanco-md-active");
    });

    $("div>a.btn-blanco-md:eq(0)").click(function() {
        formsInfo.removeClass("mostrar");
        formsInfo.addClass("ocultar");
        formsnfo1.addClass("mostrar");
    });
    $("div>a.btn-blanco-md:eq(1)").click(function() {
        formsInfo.removeClass("mostrar");
        formsInfo.addClass("ocultar");
        formsnfo2.addClass("mostrar");
        const element = document.getElementById("objetivoSocialF2");
        element.value =
            "A) Atender a personas que por sus carencias socio económicas o por problemas de invalidez se vean impedidas para satisfacer sus requerimientos básicos de subsistencia y desarrollo.\nB) Recolectar, patrocinar y administrar toda clase de alimentos y hacerlos llegar a la población más necesitada.\nC) Captar de los comerciantes, agricultores e industria alimenticia los alimentos que han perdido cualidades de comercialización, pero que están en condiciones de ser consumidos por seres humanos.\nD) Gestionar y obtener donativos en efectivo en especie provenientes de empresas, instituciones, fundaciones, instituciones gubernamentales, asociaciones públicas o privadas del país o del extranjero destinarse a la consecución del objeto social.\nE) Organizar campañas de acopio de alimentos y productos básicos, así como eventos especiales para recaudar fondos para la institución.";
        element.style.height = "5px";
        element.style.height = element.scrollHeight + "px";
    });
    $("div>a.btn-blanco-md:eq(2)").click(function() {
        formsInfo.removeClass("mostrar");
        formsInfo.addClass("ocultar");
        formsnfo3.addClass("mostrar");
    });
    $("div>a.btn-blanco-md:eq(3)").click(function() {
        formsInfo.removeClass("mostrar");
        formsInfo.addClass("ocultar");
        formsnfo4.addClass("mostrar");
    });
    $("div>a.btn-blanco-md:eq(4)").click(function() {
        formsInfo.removeClass("mostrar");
        formsInfo.addClass("ocultar");
        formsnfo5.addClass("mostrar");
    });
    $("div>a.btn-blanco-md:eq(5)").click(function() {
        formsInfo.removeClass("mostrar");
        formsInfo.addClass("ocultar");
        formsnfo6.addClass("mostrar");
    });
    $("div>a.btn-blanco-md:eq(6)").click(function() {
        formsInfo.removeClass("mostrar");
        formsInfo.addClass("ocultar");
        formsnfo7.addClass("mostrar");
    });
    $("div>a.btn-blanco-md:eq(7)").click(function() {
        formsInfo.removeClass("mostrar");
        formsInfo.addClass("ocultar");
        formsnfo8.addClass("mostrar");
    });
    $("div>a.btn-blanco-md:eq(8)").click(function() {
        formsInfo.removeClass("mostrar");
        formsInfo.addClass("ocultar");
        formsnfo9.addClass("mostrar");
    });
    $("div>a.btn-blanco-md:eq(9)").click(function() {
        formsInfo.removeClass("mostrar");
        formsInfo.addClass("ocultar");
        formsnfo10.addClass("mostrar");
    });
});

const mostrarMenos = () => {
    const element = document.getElementById("objetivoSocialF2");
    let btnTamanio = document.getElementById("acortarTexto");
    const tamaioElement = parseInt(element.style.height.replace("px", ""));

    if (tamaioElement > 50) {
        btnTamanio.innerHTML = `Ver más <i class="far fa-eye ml-3"></i>`;
        element.style.height = "5px";
        element.style.height = 50 + "px";
        validarTamanio = 2;
    } else {
        btnTamanio.innerHTML = `Ver menos <i class="far fa-eye-slash ml-3"></i>`;
        element.style.height = "5px";
        element.style.height = element.scrollHeight + "px";
        validarTamanio = "";
    }
    validarTamanio = 1;
};