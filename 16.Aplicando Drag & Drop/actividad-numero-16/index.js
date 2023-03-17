// Obtenemos los elementos que vamos a usar
const elemento1 = document.getElementById('elemento1');
const elemento2 = document.getElementById('elemento2');
const elemento3 = document.getElementById('elemento3');
const papelera = document.getElementById('papelera');

// Agregamos eventos para el arrastre de los elementos
elemento1.addEventListener('dragstart', dragstart_handler);
elemento2.addEventListener('dragstart', dragstart_handler);
elemento3.addEventListener('dragstart', dragstart_handler);

// Agregamos eventos para el soltar de los elementos
papelera.addEventListener('dragover', dragover_handler);
papelera.addEventListener('drop', drop_handler);

// Función que se ejecuta cuando se empieza a arrastrar un elemento
function dragstart_handler(event) {
  // Almacenamos el ID del elemento que se está arrastrando
  event.dataTransfer.setData('text/plain', event.target.id);
}

// Función que se ejecuta cuando se está arrastrando un elemento sobre la papelera
function dragover_handler(event) {
  // Prevenimos el comportamiento por defecto de la acción
  event.preventDefault();
  
  // Establecemos el efecto visual de copiar el elemento
  event.dataTransfer.dropEffect = 'copy';
}

// Función que se ejecuta cuando se suelta un elemento sobre la papelera
function drop_handler(event) {
  // Prevenimos el comportamiento por defecto de la acción
  event.preventDefault();
  
  // Obtenemos el ID del elemento que se está soltando
  const id = event.dataTransfer.getData('text/plain');
  
  // Obtenemos el elemento y lo eliminamos
  const elemento = document.getElementById(id);
  elemento.parentNode.removeChild(elemento);
}
