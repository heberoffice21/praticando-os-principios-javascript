// > ARRAYS - Parte  - MÉTODOS DE ARRAYS

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// FATIAMENTO: SLICE

// console.log(arr1.splice(2))

// console.clear()

// Adicionando elementos : push |unshift

console.log('Antes de adicionar elemento', arr2)

arr2.push(10, 20, 30)
arr2.push(40)

console.log('Depois de adicionar elemento', arr2)

console.log('Antes de adicionar com unshift', arr2)

arr2.unshift(0)

console.log('Depois de adicionar com unshift', arr2)

console.clear()

// Removendo elementos: pop / shift

console.log('Antes de remover com o pop', arr2)

const elementoRemovido = arr2.pop()

console.log('Depois de remover com o pop:', arr2)
console.log('O elemento removido foi:', elementoRemovido) 

console.log('Antes de remover com o shift', arr2)

arr2.shift()

console.log('Depois de remover com o shift:', arr2)

console.clear()

// Concatenando arrays: concat

console.log('array1', arr1)
console.log('array2', arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

console.clear()

// Buscando elementos: indexOf | lastIndexOf

console.log(arr1)

let indiceDoElemento45 = arr1.indexOf(45)

console.log(indiceDoElemento45)

console.clear()

let arr3 = [1, 2, 3, 3, 5, 3]

// console.log(arr3.indexOf(3))
console.log(arr3.lastIndexOf(3))

