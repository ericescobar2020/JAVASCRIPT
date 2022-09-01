localStorage.setItem("persona",JSON.stringify({nombre:"Eric",apellido:"Escobar"}))
// console.log(JSON.parse(localStorage.getItem("perosna")))

sessionStorage.setItem("nombre", "Eric")
sessionStorage.setItem("apelllido","Escobar")

// Obetenemos los datos y los almacenamos en variables 
let firstname = sessionStorage.getItem("nombre")
let lastname = sessionStorage.getItem("apellido")

// console.log(`hola, mi nombre es ${firstname} ${lastname}`)


document.cookie= "Apellido=Escobar; max-age=20";
document.cookie="Nombre=Eric; max-age=20";