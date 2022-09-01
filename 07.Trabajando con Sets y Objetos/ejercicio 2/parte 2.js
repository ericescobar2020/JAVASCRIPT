// Crea un archivo llamado objetos.js que contenga las siguientes líneas


// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)   
    const datosPersonales= {
        nombre: "Eric",
        apellido: "Escobar",
        edad: 25,
        altura: 1.70,
        eresDesarrolador: false 
    }
// - Una variable que obtenga tu edad a partir del objeto anterior
const objetoAnterior = "edad";
console.log(datosPersonales[objetoAnterior]);
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const nuevaLista= [datosPersonales]
console.log(nuevaLista)

const mejoresAmigos= [{
    nombre:"Emanuel",
    edad: 24},
    {nombre:"Facundo",
    edad: 25
}]
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

mejoresAmigos.sort((a, b)=> b.edad - a.edad);
console.log(mejoresAmigos)