const num = [5,10,80,1,2,3,5,8,7,11,15,22,27]
const numPar = num
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac,valor) => ac + valor)

console.log(numPar)