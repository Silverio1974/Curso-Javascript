// Operador ...rest(juntar)/spread(espalhar)
// Usar rest com parametro de funçao

// Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, funcionario }
console.log(clone)

//Usar spread com array
const grupoA = ['joao, Pedro, Gloria']
const grupoB =['Maria', 'Rafaela', ...grupoA]
console.log(grupoB)