const pessoa = {
    nome: 'Lucas',
    idade: 22,
    endereco: {
        logradouro: 'Rua 1',
        numero: 123,
    }
};

const { nome, idade } = pessoa; // Desestruturação de objeto
console.log(nome, idade);

const { nome: n, idade: i } = pessoa; // Renomeando variáveis
console.log(n, i);

const { sobrenome, bemSucedido = true } = pessoa; // Atribuindo valor padrão
console.log(sobrenome, bemSucedido); // undefined true

const { endereco: { logradouro, numero, cep } } = pessoa; // Desestruturação aninhada
console.log(logradouro, numero, cep); // Rua 1 123 undefined

const { conta: { ag, num } } = pessoa; // Desestruturação de objeto não existente
console.log(ag, num); // undefined undefined