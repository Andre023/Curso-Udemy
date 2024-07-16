var numero = 1 // var não tem escopo de bloco
{
    let numero = 2 // let tem escopo de bloco
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// Dessa forma o valor de numero dentro do bloco é 2 e fora do bloco é 1, pois let tem escopo de bloco