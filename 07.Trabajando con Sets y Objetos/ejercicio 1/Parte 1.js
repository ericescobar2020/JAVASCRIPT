// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia
const nombreFamailiares = ["Nicolas", "Aida", "Antonella", "Micaela", "Jose", "Eric","Eric", "Jose"];
console.log(nombreFamailiares)


// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
const miSets= new Set(nombreFamailiares);
console.log(miSets);


// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miSets.add("Javascript");
console.log(miSets);