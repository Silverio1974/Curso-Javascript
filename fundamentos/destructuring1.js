// novo recurso do Es2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradoro: "Rua ABC",
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(i,n)


const {sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada)