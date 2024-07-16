{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

// var é visível fora do bloco
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

console.log(local) // ReferenceError: local is not defined, pois local está no escopo da função, então não é visível fora dela
teste()