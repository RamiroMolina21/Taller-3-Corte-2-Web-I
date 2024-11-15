class Estudiante{
    constructor(identificacionEstudiante, nombreCompleto, fechaNacimiento, email, telefono){
        this.identificacionEstudiante = identificacionEstudiante
        this.nombreCompleto = nombreCompleto
        this.fechaNacimiento = fechaNacimiento
        this.email = email
        this.telefono = telefono
    }

    getIdentificacionEstudiante(){
        return this.identificacionEstudiante
    }

    setIdentificacionEstudiante(){
        this.identificacionEstudiante = this.identificacionEstudiante
    }
}