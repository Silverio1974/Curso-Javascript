const peso1 = 1.0
const peso2 = Number('2.0')


console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9
const avaliacao2 = 6

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 * peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) //em binario

console.log('-------------------- avaliação 2 ------------------------------')

const peso3 = 1
const peso4 = 1

console.log(peso3, peso4)
// console.log (Number.isInteger(peso3))
// console.log (Number.isInteger(peso4))

const avaliacao3 = 10
const avaliacao4 = 10

const total1 = avaliacao3 * peso3 + avaliacao4 * peso4
const media1 = total1 / (peso3 * peso4)

console.log(media1.toFixed(2))
console.log(media1.toString(2)) // em binario

console.log ('---------------avaliaçao 3 -----------------')

const peso5 = 2.0
const peso6 = (2)

console.log(peso5, peso6)
console.log(Number.isInteger(peso5))
console.log(Number.isInteger(peso6))

const avaliacao7 = 9
const avaliacao = 5


const total5 = avaliacao7 * peso5 + avaliacao8 * peso6
const media5 = total5 /(peso5 * peso6)

console.log(media.toFixed(2))
console.log(media.toString(2))
