class estudiante {
    constructor (nombre, asignaturas){
        this.nombre = nombre
        this.asignaturas= asignaturas

    }
    obtenDatos (){
        console.log(`Hola, mi nombre es ${this.nombre}, estoy aprendiendo ${this.asignaturas}`)
    }
}

const estudianteDeOpen = new estudiante ("Eric Escobar", "JavaScript, Html, Css")
console.log(estudianteDeOpen)
estudianteDeOpen.obtenDatos()

class desarrolladorDeBluent extends estudiante{
    constructor (nombre,apellido, curso, formacion, lenguajes, asignaturas,empresas){
        super (nombre,asignaturas)
        this.apellido= apellido
        this.curso=curso
        this.formacion= formacion
        this.lenguajes=lenguajes
        this.empresas= empresas

    }
    saludo (){
        super.saludo()
        console.log(`y voy a cursar las ${this.asignaturas}, para trabajar en ${this.empresas}`)
    }

}
const nuevoDesarrollador = new desarrolladorDeBluent ("Eric","Escobar","Full Stack", "3 semestres","Python", "JavaScript, Html, Css", "Mercado libre, Goblant, IT")
console.log(nuevoDesarrollador)
nuevoDesarrollador.saludo;