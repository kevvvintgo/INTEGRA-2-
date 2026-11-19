const tarjetas = document.querySelectorAll(".tarjeta");
const inicio = document.getElementById("pantalla-inicio");
const pantalla = document.getElementById("pantalla-app");
const titulo = document.getElementById("titulo-app");
const descripcion = document.getElementById("descripcion-app");
const aplicaciones = {
    horarios:{
        nombre:"Horarios",
        descripcion:"Aqui podrás consultar los horarios de tus grupos.",
    },
    asesorias:{
        nombre:"Asesorias",
        descripcion:"Aqui podrás buscar asesorias por materia."
    },
    mapa:{
        nombre:"Mapa Digital",
        descripcion:"Aqui podrás explorar el mapa del CETis.87"
    },
    avisos:{
        nombre:"Avisos Escolares",
        descripcion:"Aqui podrás consultar eventos y comunicados."
    },
    personal:{
        nombre:"Directorio Del Personal.",
        descripcion:"Aqui podrás encontrar informacion del personal escolar"
    }
};
tarjetas.forEach(function (tarjeta){
    tarjeta.addEventListener("click", function(){

        const app = tarjeta.dataset.app;
        const informacion = aplicaciones[app];
        
        if (!informacion) return;
        titulo.textContent = informacion.nombre;
        descripcion.textContent = informacion.descripcion

        inicio.hidden = true;
        pantalla.hidden =  false;
    });
})
const botonvolver = document.getElementById("volver-inicio");
botonvolver.addEventListener("click", function(){
    pantalla.hidden = true;
    inicio.hidden = false;
});
const seleccionturno = document.getElementById("seleccion-turno");
const selecciongrupo = document.getElementById("seleccion-grupo");
const tituloturno = document.getElementById("titulo-turno");
const listagrupos = document.getElementById("lista-grupos");
const encabezadoapp = document.getElementById("encabezado-app");
const vistahorario = document.getElementById("vista-horario");
const titulohorario = document.getElementById("titulo-horario");
const imagenhorario = document.getElementById("imagen-horario");
const volvergrupos = document.getElementById("volver-grupos");
const volverturnos = document.getElementById("volver-turnos");
const mensajehorario = document.getElementById("mensaje-horario");

const seccionasesorias = document.getElementById("seccion-asesorias");
const listaareas = document.getElementById("lista-areas");
const seccionasignaturas = document.getElementById("seccion-asignaturas");
const tituloarea = document.getElementById("titulo-area");
const volverareas = document.getElementById("volver-areas");
const listaasignaturas = document.getElementById("lista-asignaturas");
const secciondocentes = document.getElementById("seccion-docentes");
const volverasignaturas = document.getElementById("volver-asignaturas");
const tituloasignatura = document.getElementById("titulo-asignatura");
const listadocentes = document.getElementById("lista-docentes");


const seccionmapa = document.getElementById("seccion-mapa");
const lugaresmapa = document.querySelectorAll(".lugar-mapa");
const informacionlugar = document.getElementById("informacion-lugar");

const seccionavisos = document.getElementById("seccion-avisos");

const seccionpersonal = document.getElementById("seccion-personal");




const grupos = {
    matutino: {
        "1.º Semestre":["1A","1B","1C","1D","1E","1F","1G"],
        "3.º Semestre":["3A","3B","3C","3D","3E","3F","3G"],
        "5.º Semestre":["5A","5B","5C","5D","5E","5F","5G"]
    },
    vespertino: {
        "1.º Semestre":["1H","1I","1J","1K","1L"],
        "3.º Semestre":["3H","3I","3J","3K","3L"],
        "5.º Semestre":["5H","5I","5J","5K","5L"]
    }
};
tarjetas.forEach(function(tarjeta) {
    tarjeta.addEventListener("click", function () {
        const app = tarjeta.dataset.app;

        seleccionturno.hidden = app !== "horarios";
        selecciongrupo.hidden = true;
        vistahorario.hidden = true;

        seccionasesorias.hidden = app !== "asesorias";
        encabezadoapp.hidden = app === "asesorias" || app === "mapa" || app === "avisos" || app === "personal";
        seccionmapa.hidden = app !== "mapa";
        

        listaareas.hidden = false;
        seccionasignaturas.hidden = true;
        secciondocentes.hidden = true;
        listadocentes.hidden = false;
        document.getElementById("encabezado-asesorias").hidden = false;

        seccionavisos.hidden = app !== "avisos";

        seccionpersonal.hidden = app !== "personal";
    });
});
function mostrarHorario(turno, grupo) {
    const horarios = JSON.parse(
        localStorage.getItem("horarios") || "{}"
    );
    const clave = turno + "-" + grupo;
    const imagen = horarios[clave];
    titulohorario.textContent = "Grupo " + grupo;
    if (imagen) {
        imagenhorario.src = imagen;
        imagenhorario.hidden = false;
        mensajehorario.hidden = true;
    } else {
        imagenhorario.src = "";
        imagenhorario.hidden = true;
        mensajehorario.textContent =
            "Todavía no hay un horario disponible para este grupo.";
        mensajehorario.hidden = false;
    }
}
const areas = [
    "Ciencias Naturales, Experimentales Y Tecnología",
    "Lengua y Comunicación",
    "Cultura Digital",
    "Pensamiento Matematico",
    "Pensamiento Filosófico Y Humanidades",
    "Ciencias Sociales",
    "Conciencia Historica",
    "Inglés",
    "Economía Pública Y Social",
    "Programación",
    "Ofimatica",
    "Contabilidad",
    "Mantenimiento Industrial"
];
const iconosAreas = {
    "Ciencias Naturales, Experimentales Y Tecnología": "ciencias.png",
    "Lengua y Comunicación": "lengua.png",
    "Cultura Digital": "digital.png",
    "Pensamiento Matematico": "matematicas.png",
    "Pensamiento Filosófico Y Humanidades": "filosofia.png",
    "Ciencias Sociales": "sociales.png",
    "Conciencia Historica": "historia.png",
    "Inglés": "ingles.png",
    "Economía Pública Y Social": "economia.png",
    "Programación": "programacion.png",
    "Ofimatica": "ofimatica.png",
    "Contabilidad": "contabilidad.png",
    "Mantenimiento Industrial": "mantenimiento.png"
};
const asignaturasporarea = {
    "Ciencias Naturales, Experimentales Y Tecnología": [
        "La Energía En Los Procesos De La Vida Diaria",
        "Invitación A La Ciencia",
        "Ecosistemas",
        "Nuestro Hogar El Sistema Terrestre"
    ],
    "Lengua y Comunicación":[
        "Lengua y Comunicación"
    ],
    "Cultura Digital":[
        "Cultura Digital"
    ],
    "Pensamiento Matematico":[
        "Pensamiento Matematico"
    ],
    "Pensamiento Filosófico Y Humanidades":[
        "Pensamiento Filosófico Y Humanidades",
    ],
    "Ciencias Sociales":[
        "Ciencias Sociales"
    ],
    "Conciencia Historica":[
        "Conciencia Historica 2"
    ],
    "Inglés":[
        "Inglés 1",
        "Inglés 3",
        "Inglés 5",
    ],
    "Economía Pública Y Social":[
        "Economía Pública Y Social"
    ],
    "Programación":[
        "Emplea Frameworks",
        "Construye/Implementa Aplicaciones Web"
    ],
    "Ofimatica":[
        "Elabora Documentos",
        "Elabora Presentaciones",
        "Hojas De Cálculo",
        "Aplica Metodologias Ágiles",
        "Diseña Bases De Datos Ofimáticas",
        "Gestiona Información"
    ],
    "Contabilidad":[
        "Realiza Nómina De Forma Electronica",
        "Elabora Contabilidad De Costos",
        "Verifica Operaciones Contables",
        "Asiste En El Cierre De Auditoría",
    ],
    "Mantenimiento Industrial":[
        "Mantiene En Funcionamiento Equipos De Control Eléctrico",
        "Mantiene En Funcionamiento Instalaciones Hidraulicas",
        "Mantenimiento Preventivo a Sistemas Industriales",
        "Repara Fallas De Los Sistemas Industriales",
        "Mantiene En Funcionamiento Instalaciones Neumáticas Industriales"
    ]
};
const docentes = [
    {
        nombre:"Garcia Fernandez Carmen Leticia",
        areas:"Ciencias Naturales, Experimentales y Tecnologia",
        asignaturas:["La Energía En Los Procesos De La Vida Diaria"],
        horarios:{
            "La Energía En Los Procesos De La Vida Diaria":[
                {dia:"Lunes", hora:"13:50-14:40"},
                {dia: "Miércoles", hora: "13:50 - 14:40"},
                {dia: "Jueves", hora: "13:50 - 14:40"},
            ]
        }
    },
    {
        nombre:"Chavez Garcia Ernesto",
        areas:"Ciencias Naturales, Experimentales y Tecnologia",
        asignaturas:["Invitación A La Ciencia"],
        horarios:{
            "Invitación A La Ciencia":[
                {dia: "Lunes", hora: "13:50 - 14:40"},
                {dia: "Lunes", hora: "14:40 - 15:30"},
                {dia: "Martes", hora: "12:10 - 13:00"},
                {dia: "Martes", hora: "13:00 - 13:50"},
                {dia: "Martes", hora: "13:50 - 14:40"},
                {dia: "Miércoles", hora: "13:50 - 14:40"},
                {dia: "Jueves", hora: "13:00 - 13:50"},
                {dia: "Viernes", hora: "14:40 - 15:30"}
            ]
        }
    },
    {
        nombre:"Valles Valle Saul Armando",
        areas:["Ciencias Naturales, Experimentales y Tecnologia","Pensamiento Matemático"],
        asignaturas:["La Energía En Los Procesos De La Vida Diaria","Pensamiento Matematico"]
    },
    {
        nombre:"Acosta Rodela Aarón Daniel",
        areas:["Ciencias Naturales, Experimentales y Tecnologia","Pensamiento Matemático"],
        asignaturas:["La Energía En Los Procesos De La Vida Diaria","Pensamiento Matematico"]
    },
    {
        nombre:"Diaz Ceniceros Ivonne",
        areas:"Ciencias Naturales, Experimentales y Tecnologia",
        asignaturas:["Ecosistemas"]
    },
    {
        nombre:"Quintana Trejo Maria Del Carmen",
        areas:"Ciencias Naturales, Experimentales y Tecnologia",
        asignaturas:["Invitación A La Ciencia","Nuestro Hogar El Sistema Terrestre"]
    },
    {
        nombre:"Varela Sanchez Juan Pablo",
        areas:"Ciencias Naturales, Experimentales y Tecnologia",
        asignaturas:["Invitación A La Ciencia"]
    },
    {
        nombre:"Portillo Ledezma Salvador",
        areas:"Lengua y Comunicación",
        asignaturas:["Lengua y Comunicación"]
    },
    {
        nombre:"Palma Vargas Flor Maria",
        areas:["Lengua y Comunicación","Inglés"],
        asignaturas:["Lengua y Comunicación","Inglés 5"]
    },
    {
        nombre:"Balderrama Enriquez Fransisco",
        areas:["Lengua y Comunicación","Conciencia Historica"],
        asignaturas:["Lengua y Comunicación","Conciencia Historica 2"]
    },
    {
        nombre:"Tarango Holguin Javier Eusebio",
        areas:"Lengua y Comunicación",
        asignaturas:["Lengua y Comunicación"]
    },
    {
        nombre:"Vargas Aguilar Jesus Jose",
        areas:"Lengua y Comunicación",
        asignaturas:["Lengua y Comunicación"]
    },
    {
        nombre:"Bolivar Caldera Aida Abigail",
        areas:"Cultura Digital",
        asignaturas:["Cultura Digital"]
    },
    {
        nombre:"Escobar Muñoz Victor Manuel",
        areas:"Cultura Digital",
        asignaturas:["Cultura Digital"]
    },
    {
        nombre:"Morales Sifuentes César Guadalupe",
        areas:["Cultura Digital","Ofimática"],
        asignaturas:["Cultura Digital","Hojas De Cálculo","Elabora Presentaciones"]
    },
    {
        nombre:"Rojas Roacho Fátima Edwiges",
        areas:"Pensamiento Matematico",
        asignaturas:["Pensamiento Matematico"]
    },
    {
        nombre:"Duron Terrazas Maria De La Luz",
        areas:"Pensamiento Matematico",
        asignaturas:["Pensamiento Matematico"]
    },
    {
        nombre:"Fragoso Contreras Olivia",
        areas:"Pensamiento Matematico",
        asignaturas:["Pensamiento Matematico"]
    },
    {
        nombre:"Gamez Balderrama Luis Raúl",
        areas:["Pensamiento Matematico","Ofimática"],
        asignaturas:["Pensamiento Matematico","Aplica Metodologias Ágiles","Gestiona Información"]
    },
    {
        nombre:"Najera Gaucin Maria Guadalupe",
        areas:"Pensamiento Matematico",
        asignaturas:["Pensamiento Matematico"]
    },
    {
        nombre:"Ogaz Flores Albertina",
        areas:"Pensamiento Matematico",
        asignaturas:["Pensamiento Matematico"]
    },
    {
        nombre:"Pizarro Coral Selene",
        areas:"Pensamiento Matematico",
        asignaturas:["Pensamiento Matematico"]
    },
    {
        nombre:"Espinoza Lamas Carmen Patricia",
        areas:"Pensamiento Filosófico Y Humanidades",
        asignaturas:["Pensamiento Filosófico Y Humanidades"]
    },
    {
        nombre:"Hernandez Chavira Jesus Maria",
        areas:"Pensamiento Filosófico Y Humanidades",
        asignaturas:["Pensamiento Filosófico Y Humanidades"]
    },
    {
        nombre:"Melendez Duran Ramon Abelardo",
        areas:"Pensamiento Filosófico Y Humanidades",
        asignaturas:["Pensamiento Filosófico Y Humanidades"]
    },
    {
        nombre:"Ramos Holguin Maria Luisa",
        areas:"Pensamiento Filosófico Y Humanidades",
        asignaturas:["Pensamiento Filosófico Y Humanidades"]
    },
    {
        nombre:"Contreras Hernandez Laura Irene",
        areas:["Ciencias Sociales","Ofimática"],
        asignaturas:["Ciencias Sociales","Elabora Documentos","Elabora Presentaciones"]
    },
    {
        nombre:"Castillo Vazquez Estefania",
        areas:"Ciencias Sociales",
        asignaturas:["Ciencias Sociales"]
    },
    {
        nombre:"Lozano Guardiola Gabriela",
        areas:"Ciencias Sociales",
        asignaturas:["Ciencias Sociales"]
    },
    {
        nombre:"Gardea Fraire Marina Isela",
        areas:"Conciencia Historica",
        asignaturas:["Conciencia Historica 2"]
    },
    {
        nombre:"Corona Vazquez Guadalupe Alfredo",
        areas:["Conciencia Historica","Economía Publica y Social"],
        asignaturas:["Conciencia Historica 2","Economía Pública Y Social"]
    },
    {
        nombre:"Hernandez Hernandez Corina Isabel",
        areas:"Inglés",
        asignaturas:["Inglés 1"]
    },
    {
        nombre:"Ramirez Salcido Gelmy María",
        areas:"Inglés",
        asignaturas:["Inglés 5"]
    },
    {
        nombre:"Valenzuela Franco Dively Marisol",
        areas:"Inglés",
        asignaturas:["Inglés 3"]
    },
    {
        nombre:"Duran Marquez Maria Jose",
        areas:"Inglés",
        asignaturas:["Inglés 1"]
    },
    {
        nombre:"Valenzuela Rosa María",
        areas:"Inglés",
        asignaturas:["Inglés 3","Inglés 5"]
    },
    {
        nombre:"Armendáriz Rodriguez Nancy Margarita",
        areas:"Inglés",
        asignaturas:["Inglés 3"]
    },  
    {
        nombre:"Garcia Mauricio Andres",
        areas:"Inglés",
        asignaturas:["Inglés 3","Inglés 5"]
    },
    {
        nombre:"Fierro Villareal Victorina",
        areas:"Programación",
        asignaturas:["Emplea Frameworks","Construye/Implementa Aplicaciones Web"]
    },
    {
        nombre:"Escalera Hernandez Fernando",
        areas:["Ofimática","Programación"],
        asignaturas:["Hojas De Cálculo","Construye/Implementa Aplicaciones Web"]
    },
    {
        nombre:"Escobar Muñoz Victor Manuel",
        areas:"Ofimática",
        asignaturas:["Aplica Metodologias Ágiles"]
    },
    {
        nombre:"López Pinedo Araceli",
        areas:"Ofimática",
        asignaturas:["Diseña Bases De Datos Ofimáticas","Gestiona Información"]
    }, 
    {
        nombre:"Ibarra Sanchez Isidro",
        areas:"Contabilidad",
        asignaturas:["Realiza Nómina De Forma Electronica","Elabora Contabilidad De Costos"]
    },
    {
        nombre:"Vazquez Chaparro Beatriz",
        areas:"Contabilidad",
        asignaturas:["Verifica Operaciones Contables"]
    },
    {
        nombre:"Terrazas Martinez Eva",
        areas:"Contabilidad",
        asignaturas:["Elabora Contabilidad De Costos"]
    },
    {
        nombre:"Gardea Fraire Marina Isela",
        areas:"Contabilidad",
        asignaturas:["Asiste En El Cierre De Auditoría"]
    },
    {
        nombre:"Diaz Gomez Jaime Gregorio",
        areas:"Mantenimiento  Industrial",
        asignaturas:["Mantiene En Funcionamiento Equipos De Control Eléctrico","Mantiene En Funcionamiento Instalaciones Hidraulicas"]
    },
    {
        nombre:"Escapita Sosa Jaime Arturo",
        areas:"Mantenimiento  Industrial",
        asignaturas:["Mantenimiento Preventivo a Sistemas Industriales","Mantiene En Funcionamiento Instalaciones Hidraulicas","Repara Fallas De Los Sistemas Industriales"]
    },
    {
        nombre:"Vega Bueno Rigoberto",
        areas:"Mantenimiento  Industrial",
        asignaturas:["Mantiene En Funcionamiento Instalaciones Neumáticas Industriales"]
    },
    {
        nombre:"Hernandez Rosas Fransisco",
        areas:"Mantenimiento  Industrial",
        asignaturas:["Mantenimiento Preventivo a Sistemas Industriales","Repara Fallas De Los Sistemas Industriales"]
    }
];
areas.forEach(function(area){
    const boton = document.createElement("button");

    boton.classList.add("boton-area");

    const imagen = document.createElement("img");
    imagen.src = "ICONOS/" + iconosAreas[area];
    imagen.alt = "Icono de " + area;
    imagen.classList.add("icono-materia");

    const texto = document.createElement("span");
    texto.textContent = area;

    boton.appendChild(imagen);
    boton.appendChild(texto);

    boton.addEventListener("click", function () {
        listaareas.hidden = true;
        seccionasignaturas.hidden = false;
        secciondocentes.hidden = true;

        tituloarea.textContent = area;
        document.getElementById("encabezado-asesorias").hidden = true;

        listaasignaturas.innerHTML = "";

        const asignaturas = asignaturasporarea[area] || [];

        asignaturas.forEach(function(asignatura){
            const botonasignatura = document.createElement("button");
            botonasignatura.classList.add("boton-asignatura");
            botonasignatura.textContent = asignatura;

            botonasignatura.addEventListener("click", function(){
                seccionasignaturas.hidden = true;
                secciondocentes.hidden = false;
                listadocentes.hidden = false;
                tituloasignatura.textContent = asignatura;

                const docentesFiltrados = docentes.filter(function(docente){
                    return docente.asignaturas.includes(asignatura);
                });

                if (docentesFiltrados.length === 0){
                    listadocentes.innerHTML = `
                        <p>No hay docentes registrados para esta asignatura </p>
                    `;
                } else {
                    listadocentes.innerHTML = docentesFiltrados.map(function(docente, indice){
                        return `
                            <article class="tarjeta-docente">
                                <div class="foto-docente">
                                    Foto
                                </div>

                                <div class="datos-docente">
                                    <h4>${docente.nombre}</h4>
                                    <p><strong>Área: </strong>${area}</p>
                                    <p><strong>Asignatura: </strong>${asignatura}</p>

                                    <button class="boton-horario" type="button">
                                        Consultar Horario
                                    </button>

                                    <div class="horario-docente" hidden>
                                        <h4>Horario de asesoría</h4>
                                        <div class="contenido-horario-docente"></div>
                                    </div>
                                </div>
                            </article>
                        `;
                    }).join("");

                    const botonesHorario = listadocentes.querySelectorAll(".boton-horario");

botonesHorario.forEach(function(boton, indice){
    boton.addEventListener("click", function(){
        const docente = docentesFiltrados[indice];
        const tarjeta = boton.closest(".tarjeta-docente");
        const contenedorHorario = tarjeta.querySelector(".horario-docente");
        const contenido = tarjeta.querySelector(".contenido-horario-docente");
        const horarios = (docente && docente.horarios && docente.horarios[asignatura]) || [];
        if (contenedorHorario.hidden) {
            if (horarios.length === 0) {
                contenido.innerHTML = `
                    <p>No hay horarios registrados para esta asignatura.</p>
                `;
            } else {
                const horariosPorDia = {};
                horarios.forEach(function(horario){
                    if (!horariosPorDia[horario.dia]) {
                        horariosPorDia[horario.dia] = [];
                    }
                    horariosPorDia[horario.dia].push(horario.hora);
                });
                contenido.innerHTML = Object.entries(horariosPorDia)
                    .map(function([dia, horas]){
                        return `
                            <div class="bloque-dia">
                                <strong>${dia}</strong>
                                ${horas.map(function(hora){
                                    return `<p>${hora}</p>`;
                                }).join("")}
                            </div>
                        `;
                    }).join("");
            }

            contenedorHorario.hidden = false;
            boton.textContent = "Ocultar horario";

        } else {
            contenedorHorario.hidden = true;
            boton.textContent = "Consultar Horario";
        }
    });
});
                }
            });

            listaasignaturas.appendChild(botonasignatura);
        });
    });

    listaareas.appendChild(boton);
});
volverareas.addEventListener("click", function(){
    listaareas.hidden = false;
    seccionasignaturas.hidden = true;
    secciondocentes.hidden = true;

    document.getElementById("encabezado-asesorias").hidden = false;
});

volverasignaturas.addEventListener("click", function(){
    secciondocentes.hidden = true;
    listadocentes.hidden = false;
    seccionasignaturas.hidden = false;
});
const botonesTurno = document.querySelectorAll(".boton-turno");

botonesTurno.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const turno = boton.dataset.turno;

        tituloturno.textContent =
            turno === "matutino" ? "Turno matutino" : "Turno vespertino";

        listagrupos.innerHTML = "";

        Object.entries(grupos[turno]).forEach(function([semestre, lista]) {
            const seccion = document.createElement("div");
            seccion.classList.add("seccion-semestre");

            const tituloSemestre = document.createElement("h3");
            tituloSemestre.classList.add("titulo-semestre");
            tituloSemestre.textContent = semestre;

            const botones = document.createElement("div");
            botones.classList.add("botones-grupo");

            lista.forEach(function(grupo) {
            const botongrupo = document.createElement("button");

                botongrupo.classList.add("boton-grupo");
                botongrupo.textContent = "Grupo " + grupo;

                botongrupo.addEventListener("click", function() {
                selecciongrupo.hidden = true;
                vistahorario.hidden = false;

                mostrarHorario(turno, grupo);
            });


    botones.appendChild(botongrupo);
});
            seccion.appendChild(tituloSemestre);
            seccion.appendChild(botones);
            listagrupos.appendChild(seccion);
        });

        seleccionturno.hidden = true;
        selecciongrupo.hidden = false;
        encabezadoapp.hidden = true;
    });
});
volvergrupos.addEventListener("click", function(){
    vistahorario.hidden = true;
    selecciongrupo.hidden = false;
});
volverturnos.addEventListener("click", function(){
    selecciongrupo.hidden = true;
    seleccionturno.hidden = false;
    encabezadoapp.hidden = false;
});




/* ==========================================================
   MAPA DIGITAL + BUSCADOR DE AULAS
========================================================== */

const datosAulas = {

    1: {
        edificio: "F",
        planta: "Por confirmar",
        referencia: "Edificio F. Forma parte de la fila de aulas 1 a 6."
    },
    2: {
        edificio: "F",
        planta: "Por confirmar",
        referencia: "Edificio F. Forma parte de la fila de aulas 1 a 6."
    },
    3: {
        edificio: "F",
        planta: "Por confirmar",
        referencia: "Edificio F. Forma parte de la fila de aulas 1 a 6."
    },
    4: {
        edificio: "F",
        planta: "Por confirmar",
        referencia: "Edificio F. Forma parte de la fila de aulas 1 a 6."
    },
    5: {
        edificio: "F",
        planta: "Por confirmar",
        referencia: "Edificio F. Forma parte de la fila de aulas 1 a 6."
    },
    6: {
        edificio: "F",
        planta: "Por confirmar",
        referencia: "Edificio F. Forma parte de la fila de aulas 1 a 6."
    },

    7: {
        edificio: "D",
        planta: "Planta alta",
        referencia: "Edificio D. Planta alta."
    },
    8: {
        edificio: "D",
        planta: "Planta alta",
        referencia: "Edificio D. Planta alta."
    },
    9: {
        edificio: "D",
        planta: "Planta alta",
        referencia: "Edificio D. Planta alta."
    },
    10: {
        edificio: "D",
        planta: "Planta alta",
        referencia: "Edificio D. Planta alta."
    },
    11: {
        edificio: "D",
        planta: "Planta alta",
        referencia: "Edificio D. Planta alta."
    },

    13: {
        edificio: "D",
        planta: "Planta baja",
        referencia: "Edificio D. Las aulas se distribuyen de izquierda a derecha: 16, 15, 14 y 13."
    },
    14: {
        edificio: "D",
        planta: "Planta baja",
        referencia: "Edificio D. Las aulas se distribuyen de izquierda a derecha: 16, 15, 14 y 13."
    },
    15: {
        edificio: "D",
        planta: "Planta baja",
        referencia: "Edificio D. Las aulas se distribuyen de izquierda a derecha: 16, 15, 14 y 13."
    },
    16: {
        edificio: "D",
        planta: "Planta baja",
        referencia: "Edificio D. Es la primera aula de la secuencia 16, 15, 14 y 13."
    },

    28: {
        edificio: "E",
        planta: "Por confirmar",
        referencia: "Edificio E, parte inferior. La secuencia va de izquierda a derecha: 32, 31, 30, Sala de Alumnos Duales y 28."
    },
    30: {
        edificio: "E",
        planta: "Por confirmar",
        referencia: "Edificio E, parte inferior. La secuencia va de izquierda a derecha: 32, 31, 30, Sala de Alumnos Duales y 28."
    },
    31: {
        edificio: "E",
        planta: "Por confirmar",
        referencia: "Edificio E, parte inferior. La secuencia va de izquierda a derecha: 32, 31, 30, Sala de Alumnos Duales y 28."
    },
    32: {
        edificio: "E",
        planta: "Por confirmar",
        referencia: "Edificio E, parte inferior. Es la primera aula de la secuencia: 32, 31, 30, Sala de Alumnos Duales y 28."
    }

};

const aulasInexistentes = [12, 29];


/* ==========================================================
   ESTILOS DEL BUSCADOR DE AULAS
========================================================== */

function agregarEstilosBuscadorAulas() {

    if (document.getElementById("estilos-buscador-aulas")) return;

    const estilos = document.createElement("style");

    estilos.id = "estilos-buscador-aulas";

    estilos.textContent = `

        #seccion-mapa.modo-aulas .plano-mapa {
            display: none !important;
        }

        #seccion-mapa.modo-aulas .contenedor-mapa {
            display: block !important;
            width: 100%;
            max-width: 1250px;
            margin: 15px auto;
        }

        #seccion-mapa.modo-aulas #informacion-lugar {
            display: block;
            width: 100%;
            max-width: none;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
            box-sizing: border-box;
        }

        .panel-buscador-aulas [hidden] {
            display: none !important;
        }

        .panel-buscador-aulas {
            width: 100%;
            max-width: 1250px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 15px;
            box-sizing: border-box;
        }

        .barra-navegacion-aulas {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .barra-navegacion-aulas button,
        .panel-buscador-aulas button {
            border: 0;
            border-radius: 9px;
            padding: 11px 16px;
            background: #12356b;
            color: white;
            font-weight: 700;
            cursor: pointer;
        }

        .barra-navegacion-aulas button:hover,
        .panel-buscador-aulas button:hover {
            background: #2358a6;
        }

        .barra-navegacion-aulas .boton-secundario {
            background: #64748b;
        }

        .panel-buscador-aulas .encabezado-aulas {
            text-align: center;
        }

        .panel-buscador-aulas .encabezado-aulas h4 {
            margin: 5px 0 8px;
        }

        .panel-buscador-aulas .encabezado-aulas p {
            margin: 0;
        }

        .panel-buscador-aulas .etiqueta-mapa {
            display: inline-block;
            color: #2358a6;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 1.2px;
        }

        .panel-buscador-aulas .vista-busqueda-inicial {
            width: min(100%, 520px);
            margin: 35px auto 55px;
            padding: 25px;
            box-sizing: border-box;
            border: 1px solid #dce6f5;
            border-radius: 15px;
            background: #fff;
            box-shadow: 0 8px 25px rgba(18,53,107,.09);
        }

        .panel-buscador-aulas .campo-busqueda-aula {
            display: flex;
            gap: 8px;
            margin-top: 10px;
        }

        .panel-buscador-aulas input {
            box-sizing: border-box;
            width: 100%;
            min-width: 0;
            padding: 12px;
            border: 1px solid #cbd5e1;
            border-radius: 9px;
            font-size: 16px;
        }

        .panel-buscador-aulas .ayuda-busqueda {
            font-size: 12px;
            margin: 7px 0 0;
            color: #64748b;
        }

        .panel-buscador-aulas .vista-resultados {
            display: grid;
            grid-template-columns:
                minmax(230px, .9fr)
                minmax(240px, 1fr)
                minmax(240px, 1fr);
            gap: 15px;
            align-items: stretch;
        }

        .panel-buscador-aulas .columna-aula,
        .panel-buscador-aulas .columna-imagen {
            min-width: 0;
            padding: 15px;
            border: 1px solid #dce6f5;
            border-radius: 12px;
            background: #fff;
            box-sizing: border-box;
        }

        .panel-buscador-aulas .columna-aula h5,
        .panel-buscador-aulas .columna-imagen h5 {
            color: #12356b;
            font-size: 16px;
            margin: 0 0 10px;
        }

        .panel-buscador-aulas .resultado-aula {
            padding: 12px;
            border-radius: 10px;
            background: #f3f6fb;
            border: 1px solid #dce6f5;
            margin-top: 12px;
        }

        .panel-buscador-aulas .resultado-aula h5 {
            color: #12356b;
            font-size: 20px;
            margin: 5px 0 10px;
        }

        .panel-buscador-aulas .resultado-aula p {
            margin: 7px 0;
            font-size: 13px;
            line-height: 1.45;
        }

        .panel-buscador-aulas .mensaje-error-aula {
            color: #a32222;
        }

        .panel-buscador-aulas .marco-imagen-edificio,
        .panel-buscador-aulas .marco-croquis {
            position: relative;
            width: 100%;
            min-height: 220px;
            overflow: hidden;
            border: 1px solid #dce6f5;
            border-radius: 10px;
            background: #f8fafc;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .panel-buscador-aulas .marco-imagen-edificio img,
        .panel-buscador-aulas .marco-croquis img {
            display: block;
            width: 100%;
            height: auto;
            max-height: 390px;
            object-fit: contain;
        }

        .panel-buscador-aulas .imagen-pendiente {
            padding: 20px;
            color: #64748b;
            text-align: center;
            font-size: 13px;
            line-height: 1.5;
        }

        .panel-buscador-aulas .resaltado-edificio {
            display: none;
            position: absolute;
            border: 3px solid #e33b35;
            background: rgba(255,70,55,.19);
            border-radius: 5px;
            box-shadow: 0 0 0 9999px rgba(18,53,107,.08);
            pointer-events: none;
            box-sizing: border-box;
        }

        .panel-buscador-aulas .resaltado-edificio.activo {
            display: block;
        }

        .panel-buscador-aulas .leyenda-croquis {
            font-size: 11px;
            margin-top: 8px;
            color: #64748b;
        }

        .panel-buscador-aulas .punto-ubicacion {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #e33b35;
            margin-right: 4px;
        }

        .panel-buscador-aulas .acciones-aula {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: 15px;
        }

        .panel-buscador-aulas .acciones-aula button {
            width: 100%;
        }

        @media(max-width:850px) {
            .panel-buscador-aulas .vista-resultados {
                grid-template-columns: 1fr 1fr;
            }

            .panel-buscador-aulas .columna-aula {
                grid-column: 1 / -1;
            }
        }

        @media(max-width:560px) {
            .panel-buscador-aulas .vista-resultados {
                grid-template-columns: 1fr;
            }

            .panel-buscador-aulas .columna-aula {
                grid-column: auto;
            }

            .panel-buscador-aulas .campo-busqueda-aula {
                flex-direction: column;
            }

            .panel-buscador-aulas .campo-busqueda-aula button {
                width: 100%;
            }

            .panel-buscador-aulas .vista-busqueda-inicial {
                margin: 15px auto 30px;
                padding: 18px;
            }
        }

    `;

    document.head.appendChild(estilos);
}


/* ==========================================================
   FUNCIÓN PRINCIPAL DEL BUSCADOR DE AULAS
========================================================== */

function mostrarBuscadorAulas() {

    agregarEstilosBuscadorAulas();

    seccionmapa.classList.remove("modo-locacion", "modo-laboratorios");
    seccionmapa.classList.add("modo-aulas");

    informacionlugar.innerHTML = `

        <div class="panel-buscador-aulas">

            <div class="barra-navegacion-aulas">

                <button
                    type="button"
                    id="volver-locaciones-aulas"
                    class="boton-secundario"
                >
                    ← Otras locaciones
                </button>

                <button type="button" id="volver-inicio-mapa">
                    ⌂ Volver al inicio
                </button>

            </div>

            <div
                class="vista-busqueda-inicial"
                id="vista-busqueda-inicial"
            >

                <div class="encabezado-aulas">

                    <span class="etiqueta-mapa">
                        LOCALIZADOR DEL PLANTEL
                    </span>

                    <h4>Buscador de aulas</h4>

                    <p>
                        Escribe el número del salón para consultar su ubicación.
                    </p>

                </div>

                <div class="buscador-aulas">

                    <label for="buscar-aula">
                        <strong>Número de aula</strong>
                    </label>

                    <div class="campo-busqueda-aula">

                        <input
                            id="buscar-aula"
                            type="number"
                            min="1"
                            max="32"
                            inputmode="numeric"
                            placeholder="Ej. 8"
                            autocomplete="off"
                        >

                        <button type="button" id="boton-buscar-aula">
                            Buscar aula
                        </button>

                    </div>

                    <p class="ayuda-busqueda">
                        Consulta de aulas numeradas del 1 al 32.
                    </p>

                </div>

                <div id="resultado-inicial" aria-live="polite"></div>

            </div>

            <div
                class="vista-resultados"
                id="vista-resultados-aula"
                hidden
            >

                <section class="columna-aula">

                    <span class="etiqueta-mapa">LOCALIZADOR</span>

                    <h5>Buscar otra aula</h5>

                    <div class="campo-busqueda-aula">

                        <input
                            id="buscar-aula-resultado"
                            type="number"
                            min="1"
                            max="32"
                            inputmode="numeric"
                            placeholder="Número de aula"
                            autocomplete="off"
                        >

                        <button
                            type="button"
                            id="boton-buscar-aula-resultado"
                        >
                            Buscar
                        </button>

                    </div>

                    <div
                        id="resultado-aula"
                        class="resultado-aula"
                        aria-live="polite"
                    >
                        <p>Selecciona un número de aula.</p>
                    </div>

                    <div class="acciones-aula">

                        <button
                            type="button"
                            id="nueva-busqueda-aula"
                            class="boton-secundario"
                        >
                            ↻ Volver a buscar aula
                        </button>

                    </div>

                </section>

                <section class="columna-imagen">

                    <h5 id="titulo-imagen-edificio">
                        Edificio
                    </h5>

                    <div
                        class="marco-imagen-edificio"
                        id="marco-imagen-edificio"
                    >

                        <div class="imagen-pendiente">
                            La fotografía del edificio aparecerá aquí
                            cuando se agregue al proyecto.
                        </div>

                    </div>

                </section>

                <section class="columna-imagen">

                    <h5>Croquis del CETIS 87</h5>

                    <div
                        class="marco-croquis"
                        id="marco-croquis-aula"
                    >

                        <img
                            src="croquis-cetis87.jpg"
                            alt="Croquis del interior del inmueble CETIS 87"
                            id="imagen-croquis-aula"
                        >

                        <span
                            class="resaltado-edificio"
                            id="resaltado-edificio"
                            aria-hidden="true"
                        ></span>

                    </div>

                    <div class="leyenda-croquis">
                        <span class="punto-ubicacion"></span>
                        Edificio correspondiente resaltado en el croquis.
                    </div>

                </section>

            </div>

        </div>

    `;


    /* ELEMENTOS DEL BUSCADOR */

    const botonOtrasLocaciones =
        document.getElementById("volver-locaciones-aulas");

    const botonInicio =
        document.getElementById("volver-inicio-mapa");

    const vistaInicial =
        document.getElementById("vista-busqueda-inicial");

    const vistaResultados =
        document.getElementById("vista-resultados-aula");

    const campoInicial =
        document.getElementById("buscar-aula");

    const campoResultado =
        document.getElementById("buscar-aula-resultado");

    const resultadoInicial =
        document.getElementById("resultado-inicial");

    const resultado =
        document.getElementById("resultado-aula");

    const marcoEdificio =
        document.getElementById("marco-imagen-edificio");

    const tituloEdificio =
        document.getElementById("titulo-imagen-edificio");

    const resaltado =
        document.getElementById("resaltado-edificio");


    /* POSICIONES DE LOS EDIFICIOS EN EL CROQUIS */

    const posicionesEdificios = {

        A: {
            left: "39%",
            top: "68%",
            width: "29%",
            height: "8%"
        },

        B: {
            left: "16%",
            top: "46%",
            width: "12%",
            height: "17%"
        },

        C: {
            left: "64%",
            top: "43%",
            width: "14%",
            height: "16%"
        },

        D: {
            left: "43%",
            top: "58%",
            width: "24%",
            height: "10%"
        },

        E: {
            left: "29%",
            top: "32%",
            width: "20%",
            height: "7%"
        },

        F: {
            left: "28%",
            top: "45%",
            width: "20%",
            height: "8%"
        },

        G: {
            left: "10%",
            top: "31%",
            width: "19%",
            height: "14%"
        }

    };


    function limpiarResaltado() {

        resaltado.className = "resaltado-edificio";
        resaltado.style.cssText = "";

    }


    function volverABusquedaInicial() {

        vistaResultados.hidden = true;
        vistaInicial.hidden = false;

        campoInicial.value = "";

        resultadoInicial.innerHTML = "";

        limpiarResaltado();

        campoInicial.focus();

    }


    function mostrarResultado(numero, campoOrigen) {

        const valor = campoOrigen.value.trim();

        limpiarResaltado();

        if (
            !valor ||
            !Number.isInteger(numero) ||
            numero < 1 ||
            numero > 32
        ) {

            const mensaje = `
                <p class="mensaje-error-aula">
                    Ingresa un número válido del 1 al 32.
                </p>
            `;

            if (vistaInicial.hidden) {
                resultado.innerHTML = mensaje;
            } else {
                resultadoInicial.innerHTML = mensaje;
            }

            campoOrigen.focus();

            return;

        }


        if (aulasInexistentes.includes(numero)) {

            const mensaje = `

                <div class="aviso-aula no-existe">

                    <strong>
                        El aula ${numero} no existe en el registro.
                    </strong>

                    <p>
                        Este número no corresponde a un aula del plantel.
                    </p>

                </div>

            `;

            if (vistaInicial.hidden) {
                resultado.innerHTML = mensaje;
            } else {
                resultadoInicial.innerHTML = mensaje;
            }

            return;

        }


        const aula = datosAulas[numero];

        if (!aula) {

            const mensaje = `

                <div class="aviso-aula pendiente">

                    <strong>
                        Aula ${numero}: ubicación pendiente
                    </strong>

                    <p>
                        Su edificio y posición todavía no están confirmados.
                        Preferimos no mostrar una ubicación aproximada
                        que pueda confundirte.
                    </p>

                </div>

            `;

            if (vistaInicial.hidden) {
                resultado.innerHTML = mensaje;
            } else {
                resultadoInicial.innerHTML = mensaje;
            }

            return;

        }


        vistaInicial.hidden = true;
        vistaResultados.hidden = false;

        campoResultado.value = numero;

        resultado.innerHTML = `

            <div class="tarjeta-resultado-aula">

                <span class="etiqueta-mapa">
                    UBICACIÓN ENCONTRADA
                </span>

                <h5>Aula ${numero}</h5>

                <p>
                    <strong>Edificio:</strong>
                    ${aula.edificio}
                </p>

                <p>
                    <strong>Planta:</strong>
                    ${aula.planta}
                </p>

                <p>
                    ${aula.referencia}
                </p>

            </div>

        `;


        tituloEdificio.textContent = `Edificio ${aula.edificio}`;

        const archivoEdificio =
            `edificio-${aula.edificio.toLowerCase()}.jpg`;


        marcoEdificio.innerHTML = `

            <img
                src="${archivoEdificio}"
                alt="Fotografía del edificio ${aula.edificio}"
                onerror="
                    this.parentElement.innerHTML =
                    '<div class=&quot;imagen-pendiente&quot;>
                        Fotografía pendiente de agregar.<br>
                        Coloca el archivo
                        <strong>${archivoEdificio}</strong>
                        en la misma carpeta que el HTML.
                    </div>'
                "
            >

        `;


        const posicion = posicionesEdificios[aula.edificio];

        if (posicion) {

            resaltado.classList.add("activo");

            resaltado.style.left = posicion.left;
            resaltado.style.top = posicion.top;
            resaltado.style.width = posicion.width;
            resaltado.style.height = posicion.height;

        }

    }


    /* BOTÓN DE BÚSQUEDA INICIAL */

    document.getElementById("boton-buscar-aula")
        .addEventListener("click", function () {

            mostrarResultado(
                Number(campoInicial.value),
                campoInicial
            );

        });


    campoInicial.addEventListener("keydown", function (evento) {

        if (evento.key === "Enter") {

            mostrarResultado(
                Number(campoInicial.value),
                campoInicial
            );

        }

    });


    /* BOTÓN DE BÚSQUEDA DENTRO DEL RESULTADO */

    document.getElementById("boton-buscar-aula-resultado")
        .addEventListener("click", function () {

            mostrarResultado(
                Number(campoResultado.value),
                campoResultado
            );

        });


    campoResultado.addEventListener("keydown", function (evento) {

        if (evento.key === "Enter") {

            mostrarResultado(
                Number(campoResultado.value),
                campoResultado
            );

        }

    });


    document.getElementById("nueva-busqueda-aula")
        .addEventListener("click", volverABusquedaInicial);


    botonOtrasLocaciones.addEventListener("click", function () {

        volverAlMenuLocaciones();

    });


    botonInicio.addEventListener("click", function () {

        regresarAlInicioDesdeMapa();

    });

}


/* ==========================================================
   ESTILOS DE LOCACIONES Y LABORATORIOS
========================================================== */

function agregarEstilosVistasLocaciones() {

    if (document.getElementById("estilos-vistas-locaciones")) return;

    const estilos = document.createElement("style");

    estilos.id = "estilos-vistas-locaciones";

    estilos.textContent = `

        #seccion-mapa.modo-locacion .plano-mapa,
        #seccion-mapa.modo-laboratorios .plano-mapa {
            display: none !important;
        }

        #seccion-mapa.modo-locacion .contenedor-mapa,
        #seccion-mapa.modo-laboratorios .contenedor-mapa {
            display: block !important;
            width: 100%;
            max-width: 1250px;
            margin: 15px auto;
        }

        #seccion-mapa.modo-locacion #informacion-lugar,
        #seccion-mapa.modo-laboratorios #informacion-lugar {
            display: block;
            width: 100%;
            max-width: none;
            margin: 0;
            padding: 0;
            border: 0;
            background: transparent;
            box-shadow: none;
        }

        #informacion-lugar .vista-locacion,
        #informacion-lugar .vista-laboratorios {
            width: 100%;
            max-width: 1250px;
            min-height: 440px;
            margin: auto;
            padding: 22px;
            display: flex;
            flex-direction: column;
            gap: 18px;
            box-sizing: border-box;
            border: 1px solid #dce6f5;
            border-radius: 16px;
            background: white;
        }

        #informacion-lugar .barra-locacion {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        #informacion-lugar button {
            border: 0;
            border-radius: 9px;
            padding: 11px 16px;
            background: #12356b;
            color: white;
            font-weight: 700;
            cursor: pointer;
        }

        #informacion-lugar .boton-secundario-locacion {
            background: #64748b;
        }

        #informacion-lugar .encabezado-locacion {
            text-align: center;
            padding: 8px;
        }

        #informacion-lugar .encabezado-locacion h3 {
            color: #12356b;
            margin: 5px 0 8px;
            font-size: 25px;
        }

        #informacion-lugar .encabezado-locacion p {
            color: #526174;
            line-height: 1.5;
        }

        #informacion-lugar .etiqueta-locacion {
            color: #2358a6;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 1.2px;
        }

        /* CROQUIS A LA IZQUIERDA Y FOTO A LA DERECHA */

        #informacion-lugar .panel-imagenes-locacion {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            width: 100%;
        }

        #informacion-lugar .columna-imagen-locacion {
            min-width: 0;
            padding: 15px;
            border: 1px solid #dce6f5;
            border-radius: 12px;
            background: #f8fafc;
            box-sizing: border-box;
        }

        #informacion-lugar .columna-imagen-locacion h4 {
            margin: 0 0 12px;
            color: #12356b;
            font-size: 17px;
        }

        #informacion-lugar .marco-imagen-locacion {
            width: 100%;
            min-height: 290px;
            max-height: 470px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 1px dashed #aebed3;
            border-radius: 10px;
            background: #eef3f9;
            box-sizing: border-box;
        }

        #informacion-lugar .marco-imagen-locacion img {
            width: 100%;
            height: 100%;
            max-height: 460px;
            object-fit: contain;
        }

        #informacion-lugar .imagen-locacion-pendiente {
            width: 100%;
            min-height: 250px;
            padding: 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            color: #64748b;
            text-align: center;
            box-sizing: border-box;
        }

        #informacion-lugar .icono-imagen-pendiente {
            font-size: 38px;
        }

        /* BUSCADOR DE LABORATORIOS */

        #informacion-lugar .buscador-laboratorios {
            width: min(100%, 680px);
            margin: auto;
        }

        #informacion-lugar .buscador-laboratorios label {
            display: block;
            margin-bottom: 7px;
            color: #12356b;
            font-weight: 700;
        }

        #informacion-lugar .buscador-laboratorios input {
            width: 100%;
            padding: 13px 15px;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            box-sizing: border-box;
            font-size: 16px;
        }

        #informacion-lugar .ayuda-laboratorios {
            color: #64748b;
            font-size: 12px;
        }

        #informacion-lugar .resultados-laboratorios {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
            gap: 14px;
            width: 100%;
        }

        #informacion-lugar .tarjeta-laboratorio {
            min-height: 125px;
            padding: 15px 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 9px;
            border: 1px solid #dce6f5 !important;
            border-radius: 13px;
            background: #f8fafc !important;
            color: #12356b !important;
        }

        #informacion-lugar .tarjeta-laboratorio:hover {
            transform: translateY(-3px);
            border-color: #2358a6 !important;
        }

        #informacion-lugar .icono-laboratorio {
            font-size: 31px;
        }

        #informacion-lugar .nombre-laboratorio {
            font-size: 14px;
            font-weight: 800;
            text-align: center;
        }

        #informacion-lugar .tipo-laboratorio {
            color: #64748b;
            font-size: 11px;
            text-align: center;
        }

        #informacion-lugar .sin-resultados-laboratorios {
            grid-column: 1 / -1;
            padding: 22px;
            background: #f1f5f9;
            color: #64748b;
            text-align: center;
        }

        #informacion-lugar .datos-laboratorio {
            text-align: center;
            color: #526174;
            line-height: 1.5;
        }

        @media(max-width:700px) {

            #informacion-lugar .panel-imagenes-locacion {
                grid-template-columns: 1fr;
            }

            #informacion-lugar .vista-locacion,
            #informacion-lugar .vista-laboratorios {
                padding: 14px;
            }

            #informacion-lugar .marco-imagen-locacion {
                min-height: 230px;
                max-height: 360px;
            }

        }

    `;

    document.head.appendChild(estilos);

}


/* ==========================================================
   VOLVER AL MENÚ DE LOCACIONES
========================================================== */

function volverAlMenuLocaciones() {

    seccionmapa.classList.remove(
        "modo-aulas",
        "modo-locacion",
        "modo-laboratorios"
    );

    informacionlugar.innerHTML = `

        <h4>Selecciona una locación</h4>

        <p>
            Elige cualquiera de las locaciones del mapa
            para consultar su información.
        </p>

    `;

    lugaresmapa.forEach(function (lugar) {

        lugar.classList.remove("seleccionado");

    });

}


/* ==========================================================
   REGRESAR AL INICIO DESDE EL MAPA
========================================================== */

function regresarAlInicioDesdeMapa() {

    seccionmapa.classList.remove(
        "modo-aulas",
        "modo-locacion",
        "modo-laboratorios"
    );

    pantalla.hidden = true;
    inicio.hidden = false;

    lugaresmapa.forEach(function (lugar) {

        lugar.classList.remove("seleccionado");

    });

}


/* ==========================================================
   CREAR PANEL DE CROQUIS Y FOTOGRAFÍA
========================================================== */

function crearPanelImagenesLocacion(configuracion) {

    const archivoCroquis =
        configuracion.croquis || "croquis-cetis87.jpg";

    const archivoFoto =
        configuracion.foto || "";

    return `

        <div class="panel-imagenes-locacion">

            <!-- COLUMNA IZQUIERDA: CROQUIS -->

            <section class="columna-imagen-locacion">

                <h4>
                    ${configuracion.tituloCroquis || "Ubicación en el croquis"}
                </h4>

                <div class="marco-imagen-locacion">

                    <img
                        src="${archivoCroquis}"
                        alt="Croquis de la locación"
                        onerror="
                            this.parentElement.innerHTML =
                            '<div class=&quot;imagen-locacion-pendiente&quot;>
                                <span class=&quot;icono-imagen-pendiente&quot;>🗺️</span>
                                <strong>Espacio reservado para el croquis</strong>
                                <span>Agrega ${archivoCroquis} junto al HTML.</span>
                            </div>'
                        "
                    >

                </div>

            </section>


            <!-- COLUMNA DERECHA: FOTOGRAFÍA -->

            <section class="columna-imagen-locacion">

                <h4>
                    ${configuracion.tituloFoto || "Fotografía exterior del lugar"}
                </h4>

                <div class="marco-imagen-locacion">

                    ${archivoFoto ? `

                        <img
                            src="${archivoFoto}"
                            alt="Fotografía exterior"
                            onerror="
                                this.parentElement.innerHTML =
                                '<div class=&quot;imagen-locacion-pendiente&quot;>
                                    <span class=&quot;icono-imagen-pendiente&quot;>📷</span>
                                    <strong>Espacio reservado para la fotografía</strong>
                                    <span>Agrega ${archivoFoto} junto al HTML.</span>
                                </div>'
                            "
                        >

                    ` : `

                        <div class="imagen-locacion-pendiente">

                            <span class="icono-imagen-pendiente">📷</span>

                            <strong>
                                Espacio reservado para la fotografía
                            </strong>

                            <span>
                                La imagen se podrá agregar posteriormente.
                            </span>

                        </div>

                    `}

                </div>

            </section>

        </div>

    `;

}


/* ==========================================================
   VISTA INDIVIDUAL DE CUALQUIER LOCACIÓN
========================================================== */

function mostrarVistaLocacion(nombre, descripcion, configuracion = {}) {

    agregarEstilosVistasLocaciones();

    seccionmapa.classList.remove(
        "modo-aulas",
        "modo-laboratorios"
    );

    seccionmapa.classList.add("modo-locacion");

    const slug = (configuracion.slug || nombre)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    const archivoFoto =
        configuracion.foto || `locacion-${slug}-exterior.jpg`;


    informacionlugar.innerHTML = `

        <div class="vista-locacion">

            <div class="barra-locacion">

                <button
                    type="button"
                    class="boton-secundario-locacion"
                    id="volver-menu-locaciones"
                >
                    ← Todas las locaciones
                </button>

                <button
                    type="button"
                    id="volver-inicio-locacion"
                >
                    ⌂ Volver al inicio
                </button>

            </div>


            <header class="encabezado-locacion">

                <span class="etiqueta-locacion">
                    MAPA DIGITAL · CETIS 87
                </span>

                <h3>${nombre}</h3>

                <p>${descripcion}</p>

            </header>


            ${crearPanelImagenesLocacion({

                croquis: configuracion.croquis || "croquis-cetis87.jpg",

                foto: archivoFoto,

                tituloCroquis: "Ubicación en el croquis",

                tituloFoto: "Fotografía exterior del lugar"

            })}

        </div>

    `;


    document.getElementById("volver-menu-locaciones")
        .addEventListener("click", volverAlMenuLocaciones);


    document.getElementById("volver-inicio-locacion")
        .addEventListener("click", regresarAlInicioDesdeMapa);

}


/* ==========================================================
   DATOS DE LOS LABORATORIOS
========================================================== */

const datosLaboratorios = [

    {
        id: "A",
        nombre: "Laboratorio A",
        etiqueta: "# A Lab.",
        tipo: "Laboratorio de cómputo",
        icono: "💻",
        edificio: "H"
    },

    {
        id: "B",
        nombre: "Laboratorio B",
        etiqueta: "# B Lab.",
        tipo: "Laboratorio de cómputo",
        icono: "🖥️",
        edificio: "H"
    },

    {
        id: "C",
        nombre: "Laboratorio C",
        etiqueta: "# C Lab.",
        tipo: "Laboratorio de cómputo",
        icono: "⌨️",
        edificio: "H"
    },

    {
        id: "D",
        nombre: "Laboratorio D",
        etiqueta: "# D Lab.",
        tipo: "Laboratorio de cómputo",
        icono: "🖱️",
        edificio: "H"
    },

    {
        id: "E",
        nombre: "Laboratorio E",
        etiqueta: "# E Lab.",
        tipo: "Laboratorio de cómputo",
        icono: "🧑‍💻",
        edificio: "H"
    },

    {
        id: "CONTA",
        nombre: "Laboratorio de Contabilidad",
        etiqueta: "CONTA",
        tipo: "Área de Contabilidad",
        icono: "📊",
        edificio: "Por confirmar"
    },

    {
        id: "ING",
        nombre: "Laboratorio de Inglés",
        etiqueta: "ING",
        tipo: "Área de Inglés",
        icono: "🌐",
        edificio: "Por confirmar"
    },

    {
        id: "QUI",
        nombre: "Laboratorio de Química",
        etiqueta: "QUI",
        tipo: "Área de Química",
        icono: "🧪",
        edificio: "Por confirmar"
    }

];


/* ==========================================================
   BUSCADOR DE LABORATORIOS
========================================================== */

function mostrarBuscadorLaboratorios() {

    agregarEstilosVistasLocaciones();

    seccionmapa.classList.remove(
        "modo-aulas",
        "modo-locacion"
    );

    seccionmapa.classList.add("modo-laboratorios");


    informacionlugar.innerHTML = `

        <div class="vista-laboratorios">

            <div class="barra-locacion">

                <button
                    type="button"
                    class="boton-secundario-locacion"
                    id="volver-menu-locaciones-lab"
                >
                    ← Todas las locaciones
                </button>

                <button
                    type="button"
                    id="volver-inicio-lab"
                >
                    ⌂ Volver al inicio
                </button>

            </div>


            <header class="encabezado-locacion">

                <span class="etiqueta-locacion">
                    LOCALIZADOR DEL PLANTEL
                </span>

                <h3>Buscador de laboratorios</h3>

                <p>
                    Busca por letra o por el área del laboratorio
                    y selecciona el icono para consultar su ubicación.
                </p>

            </header>


            <div class="buscador-laboratorios">

                <label for="buscar-laboratorio">
                    ¿Qué laboratorio estás buscando?
                </label>

                <input
                    type="search"
                    id="buscar-laboratorio"
                    placeholder="Ej. Laboratorio A, inglés, conta o química..."
                    autocomplete="off"
                >

                <p class="ayuda-laboratorios">
                    Puedes buscar A, B, C, D, E, CONTA, ING o QUI.
                </p>

            </div>


            <div
                class="resultados-laboratorios"
                id="resultados-laboratorios"
                aria-live="polite"
            ></div>

        </div>

    `;


    document.getElementById("volver-menu-locaciones-lab")
        .addEventListener("click", volverAlMenuLocaciones);


    document.getElementById("volver-inicio-lab")
        .addEventListener("click", regresarAlInicioDesdeMapa);


    const campo =
        document.getElementById("buscar-laboratorio");

    const resultados =
        document.getElementById("resultados-laboratorios");


    function dibujarLaboratorios(texto = "") {

        const busqueda = texto.trim().toLowerCase();

        const encontrados = datosLaboratorios.filter(function (laboratorio) {

            return (

                laboratorio.id.toLowerCase().includes(busqueda) ||

                laboratorio.nombre.toLowerCase().includes(busqueda) ||

                laboratorio.etiqueta.toLowerCase().includes(busqueda) ||

                laboratorio.tipo.toLowerCase().includes(busqueda)

            );

        });


        if (encontrados.length === 0) {

            resultados.innerHTML = `

                <div class="sin-resultados-laboratorios">

                    No se encontraron laboratorios con esa búsqueda.

                    Prueba con A, B, C, D, E, CONTA, ING o QUI.

                </div>

            `;

            return;

        }


        resultados.innerHTML = encontrados.map(function (laboratorio) {

            return `

                <button
                    type="button"
                    class="tarjeta-laboratorio"
                    data-laboratorio="${laboratorio.id}"
                >

                    <span class="icono-laboratorio">
                        ${laboratorio.icono}
                    </span>

                    <span class="nombre-laboratorio">
                        ${laboratorio.etiqueta}
                    </span>

                    <span class="tipo-laboratorio">
                        ${laboratorio.tipo}
                    </span>

                </button>

            `;

        }).join("");

    }


    campo.addEventListener("input", function () {

        dibujarLaboratorios(campo.value);

    });


    resultados.addEventListener("click", function (evento) {

        const tarjeta =
            evento.target.closest(".tarjeta-laboratorio");

        if (!tarjeta) return;


        const laboratorio = datosLaboratorios.find(function (item) {

            return item.id === tarjeta.dataset.laboratorio;

        });


        if (laboratorio) {

            mostrarDetalleLaboratorio(laboratorio);

        }

    });


    dibujarLaboratorios();

}


/* ==========================================================
   VISTA INDIVIDUAL DE CADA LABORATORIO
========================================================== */

function mostrarDetalleLaboratorio(laboratorio) {

    agregarEstilosVistasLocaciones();

    seccionmapa.classList.remove(
        "modo-aulas",
        "modo-locacion"
    );

    seccionmapa.classList.add("modo-laboratorios");


    const archivoFoto =
        `laboratorio-${laboratorio.id.toLowerCase()}-exterior.jpg`;


    informacionlugar.innerHTML = `

        <div class="vista-laboratorios">

            <div class="barra-locacion">

                <button
                    type="button"
                    class="boton-secundario-locacion"
                    id="volver-buscador-laboratorios"
                >
                    ← Volver al buscador
                </button>

                <button
                    type="button"
                    id="volver-inicio-detalle-lab"
                >
                    ⌂ Volver al inicio
                </button>

            </div>


            <header class="encabezado-locacion">

                <span class="etiqueta-locacion">
                    DETALLE DEL LABORATORIO
                </span>

                <h3>${laboratorio.nombre}</h3>

                <p>${laboratorio.tipo}</p>

            </header>


            <div class="datos-laboratorio">

                <strong>Edificio:</strong>

                ${
                    laboratorio.edificio === "H"
                        ? "H (ubicación general provisional)"
                        : "Por confirmar"
                }

                <br>

                <span>
                    La ubicación exacta se podrá completar
                    cuando se confirme el croquis interior.
                </span>

            </div>


            ${crearPanelImagenesLocacion({

                croquis: "croquis-laboratorios.jpg",

                foto: archivoFoto,

                tituloCroquis: "Croquis de laboratorios",

                tituloFoto: "Fotografía exterior del laboratorio"

            })}

        </div>

    `;


    document.getElementById("volver-buscador-laboratorios")
        .addEventListener("click", mostrarBuscadorLaboratorios);


    document.getElementById("volver-inicio-detalle-lab")
        .addEventListener("click", regresarAlInicioDesdeMapa);

}


/* ==========================================================
   SELECCIÓN DE LOCACIONES DEL MAPA
========================================================== */

lugaresmapa.forEach(function (lugar) {

    lugar.addEventListener("click", function () {

        const nombrelugar = lugar.dataset.lugar;


        const espacios = {

            "Control Escolar":
                "Aquí podrás consultar información sobre trámites escolares.",

            "Servicios Docentes":
                "Aquí encontrarás información sobre los servicios para estudiantes.",

            "Aulas":
                "Consulta la ubicación de las aulas del plantel.",

            "Laboratorios":
                "Busca los laboratorios de cómputo A-E y las áreas de Contabilidad, Inglés y Química.",

            "Talleres":
                "Consulta información sobre los talleres de Mantenimiento Industrial.",

            "Biblioteca":
                "Encuentra información sobre la biblioteca escolar.",

            "Dirección":
                "Consulta información sobre la dirección del plantel.",

            "Subdirección":
                "Consulta información sobre la subdirección.",

            "Cafetería":
                "Encuentra información sobre la cafetería escolar.",

            "Otros espacios":
                "Aquí podrás consultar otros espacios del plantel."

        };
        lugaresmapa.forEach(function (otroLugar) {
            otroLugar.classList.remove("seleccionado");
        });
        lugar.classList.add("seleccionado");
        /* ABRIR BUSCADOR DE AULAS */
        if (nombrelugar === "Aulas") {
            mostrarBuscadorAulas();
            return;
        }
        /* ABRIr BUSCADOR DE LABORATORIOS */
        if (nombrelugar === "Laboratorios") {
            mostrarBuscadorLaboratorios();
            return;
        }
        /* ABRIR VISTA INDIVIDUAL DE LAS DEMÁS LOCACIONES */
        mostrarVistaLocacion(
            nombrelugar,
            espacios[nombrelugar] ||
            "Información pendiente de registrar."
        );
    });
});
const filtroavisos = document.querySelectorAll(".filtro-aviso");
const tarjetasavisos = document.querySelectorAll(".tarjeta-aviso");
const mensajesinavisos = document.getElementById("sin-avisos");

filtroavisos.forEach(function(filtro){
    filtro.addEventListener("click", function(){
        const categoria = filtro.dataset.categoria;
        let avisosvisibles = 0;

        filtroavisos.forEach(function(otrofiltro){
            otrofiltro.classList.remove("activo");
        });
        filtro.classList.add("activo");

        tarjetasavisos.forEach(function(aviso){
            const coincide = 
                categoria === "todos" ||
                aviso.dataset.categoria === categoria;
            aviso.hidden = !coincide;

            if (coincide){
                avisosvisibles++;
            }
        });
        mensajesinavisos.hidden =  avisosvisibles > 0;
    });
});

const listaAvisos = document.getElementById("lista-avisos");
const detalleAviso = document.getElementById("detalle-aviso");
const botonVolverAvisos = document.getElementById("volver-avisos");
const detalleCategoria = document.getElementById("detalle-categoria");
const detalleTitulo = document.getElementById("detalle-titulo");
const detalleDescripcion = document.getElementById("detalle-descripcion");
const detalleFecha = document.getElementById("detalle-fecha");
const detalleLugar = document.getElementById("detalle-lugar");


listaAvisos.addEventListener("click", function(evento) {
    const tarjeta = evento.target.closest(".tarjeta-aviso");

    if (!tarjeta || tarjeta.hidden) return;

    const categoria = tarjeta.dataset.categoria;
    const tituloAviso = tarjeta.querySelector("h4").textContent;
    const descripcionAviso = tarjeta.querySelector("p").textContent;
    const etiqueta = tarjeta.querySelector(".etiqueta-aviso").textContent;

    detalleCategoria.textContent = etiqueta;
    detalleCategoria.className = "etiqueta-aviso";

    if (categoria === "eventos") {
        detalleCategoria.classList.add("evento");
        detalleFecha.textContent = "Por confirmar";
        detalleLugar.textContent = "Por confirmar";
    } else if (categoria === "comunicados") {
        detalleCategoria.classList.add("comunicado");
        detalleFecha.textContent = "Por confirmar";
        detalleLugar.textContent = "No especificado";
    } else {
        detalleCategoria.classList.add("fecha");
        detalleFecha.textContent = "Consultar calendario oficial";
        detalleLugar.textContent = "No aplica";
    }
    detalleTitulo.textContent = tituloAviso;
    detalleDescripcion.textContent = descripcionAviso;
    listaAvisos.hidden = true;
    document.querySelector(".categorias-avisos").hidden = true;
    document.querySelector(".encabezado-avisos").hidden = true;
    document.getElementById("sin-avisos").hidden = true;
    detalleAviso.hidden = false;
});
botonVolverAvisos.addEventListener("click", function() {
    detalleAviso.hidden = true;
    listaAvisos.hidden = false;
    document.querySelector(".categorias-avisos").hidden = false;
    document.querySelector(".encabezado-avisos").hidden = false;
});
/*DRIECTORICHISS*/
const personal = [
    {
        nombre: "Alberto Duran",
        cargos: ["Docente", "Administrativo"],
        categorias: ["docentes", "administrativos"],
        areas: ["Servicios Docentes"],
        ubicacion: "Edificio de Servicios Docentes"
    },
    {
        nombre: "Magdalena Cano",
        cargos: ["Personal Administrativo"],
        categorias: ["administrativos"],
        areas: ["Administrativos"],
        ubicacion: "Por confirmar"
    },
    {
        nombre: "Raquel Martinez",
        cargos: ["Directiva"],
        categorias: ["directivos"],
        areas: ["Directivos"],
        ubicacion: "Por confirmar"
    }
];
const buscadorpersonal = document.getElementById("buscar-personal");
const listapersonal = document.getElementById("lista-personal");
const filtrospersonal = document.querySelectorAll(".filtro-personal");
const mensajesinpersonal = document.getElementById("sin-personal");

const detallepersonal = document.getElementById("detalle-personal");
const botonvolverpersonal = document.getElementById("volver-personal");

const nombredetallepersonal = document.getElementById("nombre-detalle-personal");
const cargodetallepersonal = document.getElementById("cargo-detalle-personal");
const areadetallepersonal = document.getElementById("area-detalle-personal");
const ubicaciondetallepersonal = document.getElementById("ubicacion-detalle-personal");

let areaselecionada = "todos";

function mostrarpersonal(){
    const busqueda = buscadorpersonal.value 
        .trim()
        .toLowerCase();
    listapersonal.innerHTML = "";
        const resultados = personal.filter(function(persona){
        const coincidenombre = persona.nombre
            .toLowerCase()
            .includes(busqueda);

        const coincidearea =
            areaselecionada === "todos" ||
            persona.categorias.includes(areaselecionada);

        return coincidenombre && coincidearea;
    });
    console.log("PERSONAL:", personal);

personal.forEach(function(persona, indice) {
    console.log("Registro", indice, persona.nombre, persona.cargos);
});
    resultados.forEach(function(persona){
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-personal";
        tarjeta.dataset.nombre = persona.nombre;

        const etiqueta = document.createElement("span");
        etiqueta.className = "etiquetapersonal";
        etiqueta.textContent = persona.cargos.join(" / ");

        const nombre = document.createElement("h4");
        nombre.textContent = persona.nombre;

        const ubicacion = document.createElement("p");
        ubicacion.textContent = "Ubicacion: "  + persona.ubicacion;

        tarjeta.append(etiqueta, nombre, ubicacion);
        listapersonal.appendChild(tarjeta);
    });
    mensajesinpersonal.hidden = resultados.length > 0;
}
buscadorpersonal.addEventListener("input", mostrarpersonal);

filtrospersonal.forEach(function(filtro){
    filtro.addEventListener("click", function(){
        areaselecionada = filtro.dataset.area;
        filtrospersonal.forEach(function(otrofiltro){
            otrofiltro.classList.remove("activo");
        });
        filtro.classList.add("activo");
        mostrarpersonal();
    });
});
listapersonal.addEventListener("click", function(evento){
    const tarjeta = evento.target.closest(".tarjeta-personal");

    if (!tarjeta)  return;

    const persona = personal.find(function(item){
        return item.nombre === tarjeta.dataset.nombre;
    });
    if (!persona) return;

    nombredetallepersonal.textContent = persona.nombre;
    cargodetallepersonal.textContent = persona.cargos.join(" / ");
    areadetallepersonal.textContent = persona.areas.join(" / ");
    ubicaciondetallepersonal.textContent = persona.ubicacion;

    listapersonal.hidden = true;
    buscadorpersonal.parentElement.hidden = true;
    document.querySelector(".filtros-personal").hidden=true;
    document.querySelector(".encabezado-personal").hidden = true;
    mensajesinpersonal.hidden = true;

    detallepersonal.hidden = false;
});
botonvolverpersonal.addEventListener("click", function(){
    detallepersonal.hidden = true;
    listapersonal.hidden = false;
    buscadorpersonal.parentElement.hidden = false;
    document.querySelector(".filtros-personal").hidden = false;
    document.querySelector(".encabezado-personal").hidden =  false;

    mostrarpersonal()
});
mostrarpersonal();
