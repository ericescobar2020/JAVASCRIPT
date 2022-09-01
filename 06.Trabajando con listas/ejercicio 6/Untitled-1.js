// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos) "listo"
let compraDeSupermercado= ["pan","lechuga","tomate","carne","fideos","queso"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol" "listo"
console.log(compraDeSupermercado.push("aceite de girasol"))
console.log(compraDeSupermercado);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol" "listo"
console.log(compraDeSupermercado.pop());
console.log(compraDeSupermercado); 

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const películasFavoritas= [
    {titulo: "Dragonball z", director: "Akira Toriyama", fecha:2013},
    {titulo: "Super Cool", director: "Greg Mottola",fecha: 2007},
    {titulo:"El mensajero", director:"Kevin Costner", fecha:1997}
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasPosteriores = películasFavoritas.filter(obj => obj.fecha <= 2010 );
console.log(peliculasPosteriores)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directoresDePelicula = películasFavoritas.map(function(element){
    return element.director;
})
console.log(directoresDePelicula)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let tituloDePeliculas= películasFavoritas.map(function(element){
    return element.titulo;
})
console.log(tituloDePeliculas);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let directoresPeliculas= películasFavoritas.map(function(element){
    return `${element.director}: ${element.titulo}`;

})
console.log(directoresPeliculas)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)






