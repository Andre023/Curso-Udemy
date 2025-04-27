function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // undefined
seForVerdadeEuFalo(null) // null
seForVerdadeEuFalo(0) // 0
seForVerdadeEuFalo('') // ''
seForVerdadeEuFalo(-1) // -1
seForVerdadeEuFalo(NaN) // NaN
seForVerdadeEuFalo(' ') // ' '
seForVerdadeEuFalo('?') // '?'
seForVerdadeEuFalo([]) // []
seForVerdadeEuFalo([1, 2]) // [1, 2]
seForVerdadeEuFalo({}) // {}