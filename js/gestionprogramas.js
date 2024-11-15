var nombreLocalStore = "programas"

function recuperarDatosFormulario() {
    var codigoPrograma = document.getElementById("codigoPrograma")
    var nombrePrograma = document.getElementById("nombrePrograma")
    var duracion = document.getElementById("duracion")
    var modalidad = document.getElementById("modalidad")
    var fechaInicio = document.getElementById("fechaInicio")
}

function limpiarFormulario() {
    codigoPrograma.value = ""
    nombrePrograma.value = ""
    duracion.value = ""
    modalidad.value = ""
    fechaInicio.value = ""
    codigoPrograma.focus()
}

function guardar() {
    recuperarDatosFormulario()
    var programa = new ProgramaAcademico(codigoPrograma.value,
        nombrePrograma.value, duracion.value,
        modalidad.value, fechaInicio.value)
    var programas = getJSONDeLocalStore(nombreLocalStore)
    programas.push(programa)
    setJSONDeLocalStore(nombreLocalStore, programas)
    limpiarFormulario()
    mostrarProgramas()
    alert("El programa ha sido guardado con éxito!")
}

function buscarIndicePrograma() {
    var resultado = -1
    var programas = getJSONDeLocalStore(nombreLocalStore)
    for (let i = 0; i < programas.length; i++) {
        if (programas[i].codigoPrograma == codigoPrograma.value) {
            resultado = i
        }
    }
    return resultado
}

function consultar() {
    recuperarDatosFormulario()
    this.programas = getJSONDeLocalStore(nombreLocalStore)
    var indicePrograma = buscarIndicePrograma()
    if (indicePrograma != -1) {
        nombrePrograma.value = programas[indicePrograma].nombrePrograma
        duracion.value = programas[indicePrograma].duracion
        modalidad.value = programas[indicePrograma].modalidad
        fechaInicio.value = programas[indicePrograma].fechaInicio
    }
}

function actualizar() {
    recuperarDatosFormulario()
    this.programas = getJSONDeLocalStore(nombreLocalStore)
    var indicePrograma = buscarIndicePrograma()

    if (indicePrograma > -1) {
        programas[indicePrograma].nombrePrograma = nombrePrograma.value
        programas[indicePrograma].duracion = duracion.value
        programas[indicePrograma].modalidad = modalidad.value
        programas[indicePrograma].fechaInicio = fechaInicio.value
    }
    setJSONDeLocalStore(nombreLocalStore, programas)
    limpiarFormulario()
    mostrarProgramas()
    alert("El programa ha sido actualizado con éxito!")
}

function eliminar() {
    var programas = getJSONDeLocalStore(nombreLocalStore)
    var indicePrograma = buscarIndicePrograma()

    if (indicePrograma > -1) {
        alert("Programa " + programas[indicePrograma].codigoPrograma + " ELIMINADO")
        programas.splice(indicePrograma, 1)
        setJSONDeLocalStore(nombreLocalStore, programas)
    }
    limpiarFormulario()
}

function mostrarProgramas() {
    var programas = getJSONDeLocalStore(nombreLocalStore)
    var tabla = document.getElementById("tablaProgramas")

    programas.forEach(function(programa) {
        var fila = tabla.insertRow()

        var celdaCodigo = fila.insertCell(0)
        var celdaNombre = fila.insertCell(1)
        var celdaDuracion = fila.insertCell(2)
        var celdaModalidad = fila.insertCell(3)
        var celdaFechaInicio = fila.insertCell(4)

        celdaCodigo.textContent = programa.codigoPrograma
        celdaNombre.textContent = programa.nombrePrograma
        celdaDuracion.textContent = programa.duracion
        celdaModalidad.textContent = programa.modalidad
        celdaFechaInicio.textContent = programa.fechaInicio
    });
}


