// funcao sem retorno
function imprimirSoma(a,b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) //NaN



// funcao com retorno
function soma(a,b = 0) {
    return a + b                // retorna r da funcao
}

console.log(soma(2,3))
console.log(soma(2))  // considerou b=0

