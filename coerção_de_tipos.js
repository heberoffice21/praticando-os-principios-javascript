// Coerção (conversão) de Tipos

// 1° Coerção de tipos Explícita (Manual)

const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)

console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number("131582223"))

console.log(parseFloat("2131515.4685"))
console.log(parseInt("111516516.65466"))
console.log(Boolean(515152284))
console.log(Boolean(0))

console.clear()

// 2° Coerção Implícita (Automática)

console.log("10" + 1)
console.log("10" - 1)
console.log(10 * '3')
console.log(10 - 'asfasfd')

console.clear()

let n = 1 + "1";  //11

n = n - 1;  // 10

console.log(n);
console.clear()

console.log(2 + 3 + 4 + '5'); // 95
console.clear()


console.log('5' + 2 + 3 + 4); // 5234
console.clear()

console.log('10' - '4' - '3' -2 + '5')  // 15
console.clear()


















