// OPERADORES BOOLEANOS

// Igualdade: == (ou ===)
//Desiqualdade: != (ou !==)
//Maior que: >
//Maior ou igual: >=
//Menor que: <
// Menor ou igual <=

const numero = 10

console.log(numero > 20)
console.log(numero == 10)

console.log(numero == "10")
console.log(10 == "10")
console.log(10 === "10")

console.clear()

console.log(10 != 10)
console.log(10 !== "10")

//Conjunções Lógicas

//And => &&

let idade = 10;
let tenhoCnh = false;

const possoDirigir = idade >= 18 && tenhoCnh === true

console.log("posso dirijir?", possoDirigir)


// Or => ||

idade = 70

const votoFacultativo = idade < 18 || idade >= 70

console.log("posso votar?", votoFacultativo)

// Not => !

const estouGostandoDestaPratica = true
console.log(!estouGostandoDestaPratica)




