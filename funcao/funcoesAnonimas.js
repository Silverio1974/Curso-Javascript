const soma =  function(x, y) {
    return x + y
}

constImprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

constImprimirResultado(3, 4)
constImprimirResultado(3, 4, soma)
constImprimirResultado(3, 4, function(x, y,) {
    return x - y
})

constImprimirResultado(3, 4,(x, y,) => x * y)
const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}

pessoa.falar()