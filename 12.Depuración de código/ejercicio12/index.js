function genrateFibonacci (limite){
 const fib= [0,1]
 for(let i= 2;i< limite; i++){
    fib[i]= fib[i -1] + fib[i-2];
 }
 return fib; 
}

const serieFibonacci = genrateFibonacci(20);
console.log(serieFibonacci);

