const persona = {
    nombre: "eric",
    edad: 25
}

console.log(persona); 

function dobleEdad (edad){
    return edad *2;
}

const edadDoble= dobleEdad(persona.edad);
console.log(edadDoble);

function obtenArray(edad) {
    let arrayNums = []
    for (let i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}

const array = obtenArray(persona.edad)

console.log(array)