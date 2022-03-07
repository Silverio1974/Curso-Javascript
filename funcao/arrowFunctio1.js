let dobro = function (a) {
    return 2 * a
}

dobro = (a )=> {
    return 2 * a
}

doblo = a => 2 * a // return implicito
console.log(doblo(Math.PI))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola'
ola = _ => 'Ola'
console.log(ola())