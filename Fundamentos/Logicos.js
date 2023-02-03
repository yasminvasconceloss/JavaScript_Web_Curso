function compras(trabalho1, trabalho2) {
    const comprarTv = trabalho1 || trabalho2
    const comprarCelular = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const poupar = !comprarTv        // negação lógica => operador unário

    
    return {comprarTv, comprarCelular, comprarTv32, poupar}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))


