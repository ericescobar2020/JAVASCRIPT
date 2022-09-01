let factorial= [10,9,8,7,6,5,4,3,2,1];
let acumulador= [1];

for (let i= 0; i<factorial.length;i++){
    acumulador= acumulador * factorial[i]
}
      
console.log(acumulador)