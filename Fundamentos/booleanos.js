let isAtivo = false // booleano
console.log(isAtivo) // false

isAtivo = true // booleano
console.log(isAtivo) // true

isAtivo = 1 // booleano
console.log(!!isAtivo) // true

console.log('Os verdadeiros...')
console.log(!!3) // true
console.log(!!-1) // true
console.log(!!' ') // true
console.log(!!'texto') // true
console.log(!![]) // true
console.log(!!{}) // true
console.log(!!Infinity) // true
console.log(!!(isAtivo = true)) // true

console.log('Os falsos...')
console.log(!!0) // false
console.log(!!'') // false
console.log(!!null) // false
console.log(!!NaN) // false
console.log(!!undefined) // false
console.log(!!(isAtivo = false)) // false

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' ')) // true

let nome = ''
console.log(nome || 'Desconhecido') // Desconhecido