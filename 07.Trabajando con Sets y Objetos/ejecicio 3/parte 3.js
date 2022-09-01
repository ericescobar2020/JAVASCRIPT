// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fechaDeHoy= new Date()
console.log(fechaDeHoy)
// - La fecha de tu nacimiento
const fechaDeNacimiento= new Date("february 03, 1997 15:30")
console.log(fechaDeNacimiento)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparacion= fechaDeHoy.getHours > fechaDeNacimiento.getHours;
console.log(comparacion)

// - Una variable que contenga el día de tu nacimiento
const dia = fechaDeNacimiento.getDate();
console.log(dia)

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes= fechaDeNacimiento.getMonth()
console.log(mes+1)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const año= fechaDeNacimiento.getFullYear()
console.log(año)
