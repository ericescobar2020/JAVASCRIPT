const f= document.getElementById("formulario")
console.log(f)

f.addEventListener("submit",evento=>{
    console.log(evento)
    evento.preventDefault() // esto significa que evite el comportarmiento por defecto que 
                            // que no me de error en la pagina
})