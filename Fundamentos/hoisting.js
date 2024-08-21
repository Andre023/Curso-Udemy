console.log('a =', a)
var a = 2 // hoisting (se eu comentar essa linha o código quebra, pois a variável a não foi declarada)
console.log('a =', a)

console.log('b =', b)
let b = 2 // não ocorre hoisting com let