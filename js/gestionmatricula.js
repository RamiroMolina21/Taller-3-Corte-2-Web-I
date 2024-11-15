var nombreLocalStoreMatricula = "matriculas";

function cargarOpcionesSelectMatricula() {
    var estudiantes = getJSONDeLocalStore("estudiantes");
    var programas = getJSONDeLocalStore("programas");

    var selectEstudiantes = document.getElementById("identificacionEstudiante");
    var selectProgramas = document.getElementById("codigoPrograma");

    // Limpiar opciones actuales
    selectEstudiantes.innerHTML = "<option value=''>Seleccionar Estudiante</option>";
    selectProgramas.innerHTML = "<option value=''>Seleccionar Programa</option>";

    // Agregar opciones de estudiantes
    estudiantes.forEach(estudiante => {
        var opcionEstudiante = document.createElement("option");
        opcionEstudiante.value = estudiante.identificacionEstudiante;
        opcionEstudiante.text = `${estudiante.identificacionEstudiante} - ${estudiante.nombreCompleto}`;
        selectEstudiantes.add(opcionEstudiante);
    });

    // Agregar opciones de programas
    programas.forEach(programa => {
        var opcionPrograma = document.createElement("option");
        opcionPrograma.value = programa.codigoPrograma;
        opcionPrograma.text = `${programa.codigoPrograma} - ${programa.nombrePrograma}`;
        selectProgramas.add(opcionPrograma);
    });
}

function recuperarDatosFormularioMatricula() {
    var idMatricula = document.getElementById("idMatricula").value;
    var identificacionEstudiante = document.getElementById("identificacionEstudiante").value;
    var codigoPrograma = document.getElementById("codigoPrograma").value;
    var fechaMatricula = document.getElementById("fechaMatricula").value;
    var estado = document.getElementById("estado").value;

    return { idMatricula, identificacionEstudiante, codigoPrograma, fechaMatricula, estado };
}

function limpiarFormularioMatricula() {
    document.getElementById("idMatricula").value = "";
    document.getElementById("identificacionEstudiante").value = "";
    document.getElementById("codigoPrograma").value = "";
    document.getElementById("fechaMatricula").value = "2024-11-15";
    document.getElementById("estado").value = "";
    document.getElementById("idMatricula").focus();
}

function guardarMatricula() {
    var datos = recuperarDatosFormularioMatricula();
    var matricula = new Matricula(datos.idMatricula, datos.identificacionEstudiante, datos.codigoPrograma, datos.fechaMatricula, datos.estado);
    var matriculas = getJSONDeLocalStore(nombreLocalStoreMatricula);
    matriculas.push(matricula);
    setJSONDeLocalStore(nombreLocalStoreMatricula, matriculas);
    limpiarFormularioMatricula();
    mostrarMatriculas();
    alert("La matrícula ha sido guardada con éxito!");
}

function buscarIndiceMatricula() {
    var datos = recuperarDatosFormularioMatricula();
    var matriculas = getJSONDeLocalStore(nombreLocalStoreMatricula);
    return matriculas.findIndex(m => m.idMatricula === datos.idMatricula);
}

function consultarMatricula() {
    var indiceMatricula = buscarIndiceMatricula();
    var matriculas = getJSONDeLocalStore(nombreLocalStoreMatricula);

    if (indiceMatricula !== -1) {
        var matricula = matriculas[indiceMatricula];
        document.getElementById("identificacionEstudiante").value = matricula.identificacionEstudiante;
        document.getElementById("codigoPrograma").value = matricula.codigoPrograma;
        document.getElementById("fechaMatricula").value = matricula.fechaMatricula;
        document.getElementById("estado").value = matricula.estado;
    } else {
        alert("Matrícula no encontrada.");
    }
}

function actualizarMatricula() {
    var indiceMatricula = buscarIndiceMatricula();
    var matriculas = getJSONDeLocalStore(nombreLocalStoreMatricula);
    var datos = recuperarDatosFormularioMatricula();

    if (indiceMatricula !== -1) {
        matriculas[indiceMatricula] = datos;
        setJSONDeLocalStore(nombreLocalStoreMatricula, matriculas);
        limpiarFormularioMatricula();
        mostrarMatriculas();
        alert("La matrícula ha sido actualizada con éxito!");
    } else {
        alert("Matrícula no encontrada.");
    }
}

function eliminarMatricula() {
    var indiceMatricula = buscarIndiceMatricula();
    var matriculas = getJSONDeLocalStore(nombreLocalStoreMatricula);

    if (indiceMatricula !== -1) {
        matriculas.splice(indiceMatricula, 1);
        setJSONDeLocalStore(nombreLocalStoreMatricula, matriculas);
        alert("Matrícula eliminada con éxito.");
    } else {
        alert("Matrícula no encontrada.");
    }
    limpiarFormularioMatricula();
    mostrarMatriculas();
}

function mostrarMatriculas() {
    var matriculas = getJSONDeLocalStore(nombreLocalStoreMatricula);
    var tabla = document.getElementById("tablaMatriculas");

   
    tabla.innerHTML = "";

    matriculas.forEach(function(matricula) {
        var fila = tabla.insertRow();

        var celdaIdMatricula = fila.insertCell(0);
        var celdaIdentificacion = fila.insertCell(1);
        var celdaCodigoPrograma = fila.insertCell(2);
        var celdaFechaMatricula = fila.insertCell(3);
        var celdaEstado = fila.insertCell(4);

        celdaIdMatricula.textContent = matricula.idMatricula;
        celdaIdentificacion.textContent = matricula.identificacionEstudiante;
        celdaCodigoPrograma.textContent = matricula.codigoPrograma;
        celdaFechaMatricula.textContent = matricula.fechaMatricula;
        celdaEstado.textContent = matricula.estado;
    });
}

// Llama a esta función para cargar las opciones al iniciar la página
window.onload = cargarOpcionesSelectMatricula;   




