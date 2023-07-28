// Objetos

// Como criar um objeto no Javascript
// >exemplo de buscar um elemento no array
// let arr = ["Heber," 26, 1.65, true]


// > exemplo de busca de elemento no objeto

let pessoa = {
    nome : 'Heber',
    idade : 33,
}

console.log(pessoa)
console.clear()

console.log(pessoa.nome)
console.log(pessoa.idade)
console.clear()

//Formas alternativas de executar a busca dos dados

console.log(pessoa['nome.da.pessoa'])
console.clear()
// console.log(pessoa['idade'])
// console.log(pessoa.nome-da-pessoa) // fomera incorreta



// > COMO ADICIONAR UM PARÂMETRO CHAVE-VALOR?

pessoa.altura = 1.77

console.log(pessoa)
console.clear()


// COMO REMOVER UM PARÂMETRO CHAVE-VALOR?

delete pessoa.idade

console.log(pessoa)
console.clear()

// COMO PERCORRER PELAS CHAVES DO MEU OBJETO

//exemplo de como era array:
for (let chave in pessoa) {
    console.log(chave)
}
























