class pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(` Meu nome é ${this.nome}`)
    }
}

const P1 = new pessoa('Joao')
P1.falar()

const criarPessoa = nome => {
return {
    falar: () => console.log(`Meu nome é ${nome}`)
    }
}   
const p2 = criarPessoa('Joao')
p2.falar()