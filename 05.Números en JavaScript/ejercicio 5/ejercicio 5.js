/*
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
*/

let alturaEnCentimetros= 170;
let alturaEnMetros= 1.70;

let pesoKilogramo= 79.4;

let redondeoHaciaArriba=  Math.round(alturaEnMetros);
console.log(redondeoHaciaArriba)

let redondeadoHaciaAbajo= Math.floor(pesoKilogramo);
console.log(redondeadoHaciaAbajo)

let maximo_valorEnJS= Number.MAX_VALUE +1;
console.log(maximo_valorEnJS)
