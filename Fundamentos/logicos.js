function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // Se um dos dois for verdadeiro, compra sorvete
    const comprarTv50 = trabalho1 && trabalho2 // Se os dois forem verdadeiros, compra a TV de 50
    const comprarTv32 = trabalho1 != trabalho2 // Se um deles for verdadeiro, compra a TV de 32
    const manterSaudavel = !comprarSorvete // Se não comprar sorvete, mantém saudável

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true)) // { comprarSorvete: true, comprarTv50: true, comprarTv32: false, manterSaudavel: false }
console.log(compras(true, false)) // { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(compras(false, true)) // { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(compras(false, false)) // { comprarSorvete: false, comprarTv50: false, comprarTv32: false, manterSaudavel: true } 