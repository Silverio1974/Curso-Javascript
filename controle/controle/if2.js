function teste1(num){
    if(num > 7)
console.log(num)

console.log('Final')
}
teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { //cuidadocomo ;, nao usar com estrutura de controle
        console.log(num)
    }
}

teste2(8)
teste2(7)
teste2(6)
