var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// tanto dentro quanto fora do bloco o valor de numero é 2, pois var não tem escopo de bloco