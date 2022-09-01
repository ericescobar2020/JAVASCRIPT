// Casos muy específicos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue;
        // sigue con la ejecucion 
    }
    let j = 50;
    const k = 100;
    console.log(lista[i]);


    console.log(j);
    console.log(k);
     // adentro del bucle le ejecucuion del console log se cumple en lo for osea lo ejecuta 
    if (lista[i] > 5) {
        break;
    } // el break lo corta 
}


// Cuál es el ámbito de un bucle
console.log(k);
console.log(i);
console.log(j);
// afuera del bucle no se ejecuta por eso hay que tener mucho cuidado en la ejecucion 