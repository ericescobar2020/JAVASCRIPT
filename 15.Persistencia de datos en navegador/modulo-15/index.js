// informacion del local storage #1
// localStorage.setItem("nombre","Gorka")

//#2
// localStorage.getItem("nombre","Miguel")

// console.log(localStorage.getItem("nombre"))

// localStorage.setItem("persona",{nombre: "eric", eddad:25})

// localStorage.setItem("persona",JSON.stringify({nombre: "eric", eddad:25})) 
// lo vamos a convertir en un array de obejetos 


// console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify --> Convierte un objeto/Array en string
// JSON.parse --> Convierte un objet/Array convertido a traves de stringify en un objeto de javascript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion","Gorka")

/* cookies*/ 
document.cookie="nombreCookie=GorkaCookie"
// Como darle una caducidad a esta cookie 
document.cookie="nombreCaducidad=Nombre;expire=" + new Date(2023,0,1).toUTCString()

// como crear una nueva cookie 
console.log (document.cookie)

// paginas de informacion del tema https://ed.team/blog/que-es-y-como-utilizar-localstorage-y-sessionstorage
// cookie: https://cybmeta.com/cookies-en-javascript