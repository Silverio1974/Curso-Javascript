Array.prototype.filter2 = function (callback) {
    const newarray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newarray.push(this[i])
        }
    }
}
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))