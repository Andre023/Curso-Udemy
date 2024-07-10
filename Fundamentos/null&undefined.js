const a = {name: 'Teste'} // a recebe o endereço de memória do objeto
console.log(a)

const b = a // b recebe o mesmo endereço de memória de a
console.log(b)

let c = 3
let d = c
d++
console.log(d)

let valor // não inicializada
console.log(valor) // undefined

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)