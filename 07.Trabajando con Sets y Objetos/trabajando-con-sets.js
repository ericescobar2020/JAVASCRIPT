// Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, "hola"]

const miSet = new Set(array)

console.log(array)
console.log(miSet) //NO almacena datos repetidos

// .add() // Sirve para agregar datos 
miSet.add(9)
console.log(miSet)
miSet.add(4)
console.log(miSet)

// .delete() // Sirve para eliminar datos 
miSet.delete("hola")
console.log(miSet)

// .clear() // SIRVE PARA ELIMINAR TODOS LOS DATOS 
// miSet.clear()
// console.log(miSet)

// .has() // SIRVE PARA COMPROBAR SI EXISTE EL DATO EN EL SETS 
// console.log(array.includes(2))
console.log(miSet.has(40))

// .size // Dice los valores que existe en el sets "el total de valores"
console.log(miSet.size)

miSet.forEach(valor => {
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [ ...miSet ]  // convierte mi sets en array 
console.log(ar_miSet[1])