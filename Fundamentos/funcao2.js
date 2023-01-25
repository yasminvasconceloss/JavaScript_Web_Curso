// Armazenando funcao em variável
const imprimirSoma = function (a,  b){   //funcao anônima
    console.log(a+b)
}

imprimirSoma(2, 3)




// Armazenando funcao arrow em variável (forma reduzida)
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))



// Retorno implícito
const subtração = (a, b) => a - b
console.log(subtração(2, 3))
