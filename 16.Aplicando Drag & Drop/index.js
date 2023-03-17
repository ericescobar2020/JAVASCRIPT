const parrafos = document.querySelectorAll(".parrafo"); // esta es la forma de trabajar con html
// saber diferenciar entre ( . punto para la clase  y la # hacemos referencia al ID )
const secciones = document.querySelectorAll(".seccion");
// console.log(parrafos)

// vamos a crear un evento
parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    console.log("Estoy arrastrando el parrafo:" + parrafo.innerText);
    parrafo.classList.add("dragging");
    event.dataTransfer.setData("id", parrafo.id);
    //    const elemento_fantasma= document.querySelector(".imagen-fantasma")
    //    event.dataTransfer.setDragImage(elemento_fantasma,0,0) // requiere de tres elementos
    const tacho_de_basura = document.querySelector(".images.jpg")
    event.dataTransfer.clearData(tacho_de_basura)
  });
  parrafo.addEventListener("dragend", () => {
    console.log("termine de arrastar el parrafo");
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    // console.log("Drag Over") // cuenta los segundos que aprieto el elemento 1 primero o 2,3,4
  });

  seccion.addEventListener("drop", (event) => {
    console.log("Drop");
    const id_parrafo = event.dataTransfer.getData("id"); // nos ayuda transferir informacion por los propios eventos relacionados con el drag
    //    console.log("Parrafo id:",id_parrafo)
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });
});

//informacios sobre el tema: https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer
//https://programandoointentandolo.com/2013/02/arrastrar-y-soltar-en-html5-drag-drop-html5.html
