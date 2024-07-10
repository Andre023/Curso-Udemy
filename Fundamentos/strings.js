const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna o caractere no índice 4
console.log(escola.charAt(5)) // Retorna vazios
console.log(escola.charCodeAt(3)) // Retorna o valor do caractere na tabela ASCII
console.log(escola.indexOf('3')) // Retorna o índice do caractere 3

console.log(escola.substring(1)) // Retorna a string a partir do índice 1
console.log(escola.substring(0, 3)) // Retorna a string do índice 0 até o 3

console.log('Escola '.concat(escola).concat("!")) // Concatenação
console.log(escola.replace(3, 'e')) // Substitui o caractere 3 por e

console.log('Ana,Maria,Pedro'.split(',')) // Gera um array com os elementos separados por vírgula 
