class Matricula{
    constructor(idMatricula, identificacionEstudiante, codigoPrograma, fechaMatricula, estado) {
        this.idMatricula = idMatricula
        this.identificacionEstudiante = identificacionEstudiante
        this.codigoPrograma = codigoPrograma
        this.fechaMatricula = fechaMatricula
        this.estado = estado
    }

    getIdMatricula(){
        return this.idMatricula
    }

    setIdMatricula(){
        this.idMatricula = this.idMatricula
    }
}

