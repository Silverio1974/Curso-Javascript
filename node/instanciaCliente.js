const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorB.inc()
console.log(contadorB.valor)
console.log(contadorA.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC. valor, contadorD.valor)