// > Estruturas Condicionais

const idade = 10;

if (idade >= 18) {
    console.log('Você é maior de idade')
}
else {
    console.log('Você é menor de idade')
}

// Se media >= 7, aprovado
// Se media < 7 e media >= 5, Recuperação 
// Se media < 5, Reprovado

console.clear()

let media = 4.99999;

if (media >= 7) {
    console.log("aprovado")
} else if (media >= 5) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}