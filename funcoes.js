
// FUNÇÕES


// Definição da função
function saudacao() {
    console.log('Olá, seja bem-vinda(o) a minha aula de javascript')
}

saudacao()

console.clear()

//Como enviar parâmetros para as funções?

function saudacao(nome, curso='Javascript') {
    console.log(`Olá, ${nome}! Seja bem-vinda(o) a minha pratica de ${curso}!`)
}

saudacao ('Heber')

console.clear()

// Returno da função

function soma(numero1, numero2) {
    return numero1 + numero2

}

const resultado = soma(10, 20)

console.log(resultado /2)

console.clear()



//

function maiorDoQue50(numero) {
    if (numero > 50) {
        return true
    }
    return false
}

