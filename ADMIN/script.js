
const formulario = document.getElementById("formulario-login");
const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (usuario.value === "admin" && contrasena.value === "integra123") {

        mensaje.textContent = "¡Bienvenido!";
        mensaje.style.color = "green";

        document.querySelector(".contenedor-login").hidden = true;
        document.getElementById("panel-admin").hidden = false;

    } else {

        mensaje.textContent = "Usuario o contraseña incorrectos.";
        mensaje.style.color = "red";

    }

});
const cerrarSesion = document.getElementById("cerrar-sesion");

cerrarSesion.addEventListener("click", function() {
    document.getElementById("panel-admin").hidden = true;
    document.querySelector(".contenedor-login").hidden = false;

    formulario.reset();
    mensaje.textContent = "";
});
const botonHorarios = document.querySelector('[data-seccion="horarios"]');
const menuAdmin = document.querySelector(".contenido-admin");
const seccionHorarios = document.getElementById("admin-horarios");
const botonVolver = document.querySelector(".volver-menu");

botonHorarios.addEventListener("click", function() {
    menuAdmin.hidden = true;
    seccionHorarios.hidden = false;
});

botonVolver.addEventListener("click", function() {
    seccionHorarios.hidden = true;
    menuAdmin.hidden = false;
});

const formularioHorario = document.getElementById("formulario-horario");

formularioHorario.addEventListener("submit", function(event) {

    event.preventDefault();

    const turno = document.getElementById("turno-horario").value;
    const grupo = document.getElementById("grupo-horario").value;
    const archivo = document.getElementById("archivo-horario").files[0];
    const mensaje = document.getElementById("mensaje-horario");

    if (!archivo) {
        mensaje.textContent = "Selecciona una imagen.";
        return;
    }

    const lector = new FileReader();

    lector.onload = function() {

        const clave = turno + "-" + grupo;

        const horarios = JSON.parse(
            localStorage.getItem("horarios") || "{}"
        );

        horarios[clave] = lector.result;

        try {
            localStorage.setItem("horarios", JSON.stringify(horarios));

            mensaje.textContent = "¡Horario guardado correctamente!";
            mensaje.style.color = "green";

            formularioHorario.reset();

        } catch (error) {
            mensaje.textContent = "No se pudo guardar. La imagen puede ser demasiado grande.";
            mensaje.style.color = "red";
        }
    };

    lector.readAsDataURL(archivo);

});
const turnoHorario = document.getElementById("turno-horario");
const grupoHorario = document.getElementById("grupo-horario");

const gruposPorTurno = {
    matutino: {
        "Primer semestre": ["1A", "1B", "1C", "1D", "1E", "1F", "1G"],
        "Tercer semestre": ["3A", "3B", "3C", "3D", "3E", "3F", "3G"],
        "Quinto semestre": ["5A", "5B", "5C", "5D", "5E", "5F", "5G"]
    },

    vespertino: {
        "Primer semestre": ["1H", "1I", "1J", "1K", "1L"],
        "Tercer semestre": ["3H", "3I", "3J", "3K", "3L"],
        "Quinto semestre": ["5H", "5I", "5J", "5K", "5L"]
    }
};

turnoHorario.addEventListener("change", function() {

    grupoHorario.innerHTML = '<option value="">Selecciona un grupo</option>';

    const grupos = gruposPorTurno[turnoHorario.value];

    if (!grupos) return;

    Object.entries(grupos).forEach(function([semestre, lista]) {

        const optgroup = document.createElement("optgroup");
        optgroup.label = semestre;

        lista.forEach(function(grupo) {
            const opcion = document.createElement("option");
            opcion.value = grupo;
            opcion.textContent = "Grupo " + grupo;

            optgroup.appendChild(opcion);
        });

        grupoHorario.appendChild(optgroup);

    });

});
const botonEliminarHorario = document.getElementById("eliminar-horario");

function actualizarBotonEliminar() {
    console.log("Horarios actuales:", horarios);
    const turno = turnoHorario.value;
    const grupo = grupoHorario.value;

    const horarios = JSON.parse(
        localStorage.getItem("horarios") || "{}"
    );

    const clave = turno + "-" + grupo;

    botonEliminarHorario.hidden = !horarios[clave];
}
turnoHorario.addEventListener("change", actualizarBotonEliminar);
grupoHorario.addEventListener("change", actualizarBotonEliminar);

botonEliminarHorario.addEventListener("click", function() {

    const turno = turnoHorario.value;
    const grupo = grupoHorario.value;
    const clave = turno + "-" + grupo;

    const horarios = JSON.parse(
        localStorage.getItem("horarios") || "{}"
    );

    if (!horarios[clave]) {
        return;
    }

    if (confirm("¿Eliminar el horario del grupo " + grupo + "?")) {

        delete horarios[clave];

        localStorage.setItem("horarios", JSON.stringify(horarios));

        document.getElementById("mensaje-horario").textContent =
            "Horario eliminado correctamente.";

        actualizarBotonEliminar();
    }
});
