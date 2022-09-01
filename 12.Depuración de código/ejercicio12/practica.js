function creadorDeFibonacci (limite){
  const fibo = [0,1]
  for (let i=2; i< limite; i++){
    fibo[i]= fibo[i-1]+fibo[i-2]
  }
  return fibo;
}

const seriedefibonacci = creadorDeFibonacci(25);
console.log(seriedefibonacci)
