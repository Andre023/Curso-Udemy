const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' // Concatenação de strings
const template = `
    Olá
    ${nome}!` // O template string permite quebra de linha e interpolação de variáveis
console.log(concatenacao, template)

// Expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Função que transforma o texto em maiúsculo
console.log(`Ei... ${up('cuidado')}!`) // Chamada da função dentro do template string