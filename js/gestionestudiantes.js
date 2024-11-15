var nombreLocalStore = "estudiantes"

function recuperarDatosFormulario() {
    var identificacionEstudiante = document.getElementById("identificacionEstudiante")
    var nombreCompleto = document.getElementById("nombreCompleto")
    var fechaNacimiento = document.getElementById("fechaNacimiento")
    var email = document.getElementById("email")
    var telefono = document.getElementById("telefono")
}

function limpiarFormulario() {
    identificacionEstudiante.value = ""
    nombreCompleto.value = ""
    fechaNacimiento.value = ""
    email.value = ""
    telefono.value = ""
    identificacionEstudiante.focus()
}

function guardar() {
    recuperarDatosFormulario()
    var estudiante = new Estudiante(identificacionEstudiante.value,
        nombreCompleto.value, fechaNacimiento.value,
        email.value, telefono.value)
    var estudiantes = getJSONDeLocalStore(nombreLocalStore)
    estudiantes.push(estudiante)
    setJSONDeLocalStore(nombreLocalStore, estudiantes)
    limpiarFormulario()
    mostrarEstudiantes()
    alert("El estudiante ha sido guardo con exito!")
}

function buscarIndiceEstudiante() {
    var resultado = -1
    var estudiantes = getJSONDeLocalStore(nombreLocalStore)
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].identificacionEstudiante == identificacionEstudiante.value) {
            resultado = i
        }

    }
    return resultado

}

function consultar() {
    recuperarDatosFormulario()
    this.estudiantes = getJSONDeLocalStore(nombreLocalStore)
    var indiceEstudiante = buscarIndiceEstudiante()
    if (indiceEstudiante != -1) {
        nombreCompleto.value = estudiantes[indiceEstudiante].nombreCompleto
        fechaNacimiento.value = estudiantes[indiceEstudiante].fechaNacimiento
        email.value = estudiantes[indiceEstudiante].email
        telefono.value = estudiantes[indiceEstudiante].telefono
    }

}

function actualizar() {
    recuperarDatosFormulario()
    this.estudiantes = getJSONDeLocalStore(nombreLocalStore)
    var indiceEstudiante = buscarIndiceEstudiante()

    if (indiceEstudiante > -1) {
        estudiantes[indiceEstudiante].nombreCompleto = nombreCompleto.value
        estudiantes[indiceEstudiante].fechaNacimiento = fechaNacimiento.value
        estudiantes[indiceEstudiante].email = email.value
        estudiantes[indiceEstudiante].telefono = telefono.value
    }
    setJSONDeLocalStore(nombreLocalStore, estudiantes)
    limpiarFormulario()
    mostrarEstudiantes()
    alert("El estudiante ha sido actualizado con exito!")
    
}


function eliminar() {
    var estudiantes = getJSONDeLocalStore(nombreLocalStore)
    var indiceEstudiante = buscarIndiceEstudiante()

    if (indiceEstudiante > -1) {
        alert("Estudiante" + estudiantes[indiceEstudiante].identificacionEstudiante + " ELIMINADO")
        estudiantes.splice(indiceEstudiante, 1)
        setJSONDeLocalStore(nombreLocalStore, estudiantes)
    }
    limpiarFormulario()
}


function mostrarEstudiantes() {
    var estudiantes = getJSONDeLocalStore(nombreLocalStore)
    var tabla = document.getElementById("tablaEstudiantes")

    estudiantes.forEach(function(estudiante) {
        var fila = tabla.insertRow()

        var celdaIdentificacion = fila.insertCell(0)
        var celdaNombre = fila.insertCell(1)
        var celdaFechaNacimiento = fila.insertCell(2)
        var celdaEmail = fila.insertCell(3)
        var celdaTelefono = fila.insertCell(4)

        celdaIdentificacion.textContent = estudiante.identificacionEstudiante
        celdaNombre.textContent = estudiante.nombreCompleto
        celdaFechaNacimiento.textContent = estudiante.fechaNacimiento
        celdaEmail.textContent = estudiante.email
        celdaTelefono.textContent = estudiante.telefono
    });
}
