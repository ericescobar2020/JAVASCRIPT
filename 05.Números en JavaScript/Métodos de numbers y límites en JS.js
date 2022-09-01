// Operador .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

// NaN (Not a Number) - Infinity
let n = Number('adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);

// Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); // Error de concepto

console.log(Number(numero) + num2); 
// EL METODO number convierte un numero de string a numero

console.log(parseInt(numero))
// Lo convierte en numero entero el parseInt.
console.log(parseFloat(numero))
// PaserFloat tenes el entero con decimales 

let num3 = 4;
console.log(parseInt(num3))
console.log(parseFloat(num3))

// Números hexadecimales (base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));

// Obtener los valores máximo y mínimo en Javascript
let min_precision = Number.EPSILON; // es una propiedad
let min_valor_JS = Number.MIN_VALUE;// es una propiedad
let max_valor_JS = Number.MAX_VALUE;// es una propiedad

console.log(min_precision);// esto seria un 2 con 16 ceros adelante del 2
console.log(min_valor_JS);
console.log(max_valor_JS);