// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function valorDeverdad (numero){
    if (numero >= 0){
        return true;
    }else {
        return false; 
    }
}
console.log(valorDeverdad(0011)) // DESDE CERO HASTA EL INFINITO

// NO ENTENDI LA CONSIGNA MUY BIEN, ASI QUE CREE UNA FUNCION DE NUMEROS, QUE ME DEVUELVA SIEMPRE TRUE 

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const strings= "hola soy una promesa"
const getdatos= () =>{
    return new Promise ((resolve)=>{
        setTimeout (()=>{
            resolve(strings);
        },5000)
    })
}
getdatos().then((strings)=>console.log(strings))

// // - Una función generadora de índices pares automáticos
function* generadorID() {
    let id = 1000; 
    while(true) {
        id++
        if (id === 2000) {
            return id
        }
        yield id 
    }
}
const gen = generadorID();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)