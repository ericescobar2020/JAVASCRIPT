// ejercicio numero 4 

let nombre= "Eric";
let apellido= "Escobar"

let estudiante= nombre +" "+apellido;
console.log(estudiante);


let estudianteMayus= estudiante;
console.log(estudianteMayus.toUpperCase());

let estudianteMinus= estudiante; 
console.log(estudianteMinus.toLowerCase());

let numeroDeLetras= estudiante;
console.log(numeroDeLetras.length);

let primeraLetra= nombre;
console.log(primeraLetra[0]);

let ultimaLetra= apellido;
console.log(ultimaLetra[6]);

let sinEspacios= estudiante; 
console.log(sinEspacios.replace(/ /g,""))

let valor= estudiante === "Eric Escobar"
console.log(valor)
