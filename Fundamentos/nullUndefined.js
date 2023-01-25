let valor // undefined 
console.log(valor)

valor = null // ausência de valor 
console.log(valor)
//console.log(valor.toString())



const objeto = {}
console.log(objeto.preco)
console.log(objeto)

objeto.preco = 5.50
console.log(objeto)

objeto.preco = undefined //evitar
console.log(!!objeto.preco)  //boolean
// delete objeto.preco   // correto
console.log(objeto)

objeto.preco = null  // sem preço
console.log(!!objeto.preco)
console.log(objeto)



