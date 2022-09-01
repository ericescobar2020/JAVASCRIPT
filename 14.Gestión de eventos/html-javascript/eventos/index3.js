const htexto = document.getElementById("h-texto");
console.log(htexto);

htexto.addEventListener("cambioTexto", evento =>{
    console.log(evento.detail)
    htexto.innerText=evento.detail.texto
    htexto.style.color=evento.detail.color
})  //esto se llama vinvcular a un evento 

function cambiarTexto(nuevoTexto,color){
    const evento= new CustomEvent ("cambioTexto",{
        detail: {
            texto: nuevoTexto,
            color: color
        }
    })
    htexto.dispatchEvent(evento)
}

/*despues ponemos en la consola de google la funcion que creamos que seria 
"cambiarTexto(este es un nuevo texto, blue)""
*/