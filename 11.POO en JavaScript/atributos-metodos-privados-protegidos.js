class Persona {
    // private -> # privado 
    // Solo se pueden acceder dentro de la clase.
    #edad
    #nombre 
    
    // protected -> _ barra abajo 
    // Solo se pueden acceder dentro de la clase y desde las clases descendientes 
    _isDeveloper = true 
     
    constructor(nombre, edad){
        this.#nombre= nombre
        this.#edad= edad
    }

// esto es un metodo. 
saludo() {
      console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años`)
}
  
 obtenNombre() { // Funcion Getter -> nos permite acceder (de forma controlada) algun atributo protegido
    return this.#nombre; 
 }
//  #obtenEdad(){
//     return this.#edad;
//  }
 getEdad(){
    return this.#edad;
 }

 setEdad(nuevaEdad){
    this.#edad= nuevaEdad;
 }

}
const persona = new Persona("Eric", 25)
//console.log(persona)

// Para acceder a una propiedad por ejemplo Nombre. 
//console.log(persona.nombre)

// Como puedo usar los metodos: 
persona.saludo() // va devolver: Hola mi nombre es Eric, tengo 25 años 

console.log(persona.obtenNombre())
// console.log(persona.#obtenEdad())

console.log(persona._isDeveloper)

/////////////////////////////////

//Setter: metodos que nos permiten obtener atributos / metodos privados o protegidos 
const edad= persona.getEdad()
console.log(edad)

//Getter:metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos  
// quiero cambiar la edad de la persona 

persona.setEdad(16)
console.log(persona.getEdad())