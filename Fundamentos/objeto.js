const prod1 = {} // Objeto vazio
prod1.nome = 'Celular Ultra Mega' // Adicionando um atributo ao objeto
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaços

console.log(prod1)

const prod2 = { // Objeto com atributos
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

'{"nome": "Camisa Polo", "preco": 79.90}' // JSON (JavaScript Object Notation) - Formato textual