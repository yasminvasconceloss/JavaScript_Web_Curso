console.log(Math.ceil(6.1))


const objeto1 = {}
objeto1.nome = 'bola'
console.log(objeto1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('exec...')

    }

}

const objeto2 = new Obj('caderno')
const objeto3 = new Obj('mesa')

console.log(objeto2.nome)
console.log(objeto3.nome)
objeto3.exec()


