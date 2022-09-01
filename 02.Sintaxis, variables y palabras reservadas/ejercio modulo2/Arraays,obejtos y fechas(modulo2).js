 // Listas, array o arreglo
const Lista= [1, "hola", true, undefined, null];
const lista2= new Array(2, "hola", true, undefined, null);
const lista3= new Array(3);
lista3[0]= "soy el primer elemento, index 0"
const lista4= [Lista, lista2,lista3];

console.log(Lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// objetos 
const movil= {
    altura: 5,
    anchura: 5, 
    marca: "samsung",
    iswhite:false, 
    contactos: ["sebastian","riquiu","emanuel"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    }
}

movil.año= 2022;
movil.marca= "iphone";
 console.log(movil.marca);
console.log(movil.contactos);

// fechas 
// Librerias de apoyo Moment. js 
const ahora= new Date();
console.log(ahora);

const fecha_milis= new Date(10);
console.log(fecha_milis); 

const fecha_cadena= new Date("march 25 2020")
console.log(fecha_cadena);

const fecha_valores= new Date(2022,0,15);
console.log(fecha_valores)

const dia= ahora.getDate();
const mes= ahora.getMonth() +1;
const año= ahora.getFullYear(); 

console.log(dia,mes,año)
