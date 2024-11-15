class ProgramaAcademico{
    constructor(codigoPrograma, nombrePrograma, duracion, modalidad, fechaInicio){
        this.codigoPrograma = codigoPrograma
        this.nombrePrograma = nombrePrograma
        this.duracion = duracion
        this.modalidad = modalidad
        this.fechaInicio = fechaInicio
    }

    getcodigoPrograma(){
        return this.codigoPrograma
    }

    setcodigoPrograma(){
        this.codigoPrograma = this.codigoPrograma
    }
}