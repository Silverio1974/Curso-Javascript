function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Numeros repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros) {
    try {
        const numeros = []
        for (let_ of Array(qtdeNumeros).fill()) {
            await numeros.push(gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        throw "Que chato!!!"
    }
}

gerarMegaSena(15)
    //gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)
