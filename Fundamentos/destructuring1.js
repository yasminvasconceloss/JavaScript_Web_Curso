// novo recurso ES2015
// desestruturação - OBJETO

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua...',
        numero: 100
    }
}

const { nome,idade } = pessoa
console.log(nome,idade)


const { nome: n,idade: i } = pessoa
console.log(n,i)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num} } = pessoa
console.log(ag, num)