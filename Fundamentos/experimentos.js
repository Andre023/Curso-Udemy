let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(globalThis.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) // true
console.log(module.exports) // true

// criando uma variavel sem var, let ou const
abc = 3 // não faça isso em casa
console.log(global.abc) // 3

