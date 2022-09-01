const boton = document.querySelector("#btn") // ya que usamos id tenemos que usar # para seleccionarlo
// console.log(boton); // para comprobar si funciona 

boton.addEventListener("click",()=>{
    // console.log("click")
    // alert("se ha hecho clcick, bien alli")
    ///////////////////////////////////////
    // confirm("¿Estas de acuerdo?") 
    // ? console.log("ok")
    // : console.log ("NO!!!")
    // lo podemos explicar mejor
    
      const respuesta = confirm("¿Seguro?")
      if (respuesta){
        console.log("estas de acuerdo")
      }else {
        console.log("No estas de acuerdo")
      }
})

const botoninfo= document.querySelector("#informacion")
botoninfo.addEventListener("click", ()=>{
    const nombre = prompt ("¿Cual es tu nombre?")
    if(nombre){
        console.log("Tu nombre es" + nombre)
    }else{
        console.log("No has introducido nada")
    }
})

const lista = [{
    nombre: "gorka",
    edad: 34
},{
    nombre:"julen",
    edad:23
},{
    nombre:"brenda",
    edad:34 
},{
    nombre:"brendia",
    edad: 34
}]

// podemos poner console.log pero podemos mostrar de una forma mas 
// profesional 
console.table(lista); 