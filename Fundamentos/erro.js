function tratarErroELancar(erro){
    // throw new Error('Erro na função: ' + erro.message);
    // throw 10
    // throw true;
    // throw 'mensagem de erro';
    throw new Error('Erro na função');
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + "!!!");
    }
    catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log('final');
    }
}

const obj = { name: 'Pedro' };
imprimirNomeGritado(obj); // PEDRO!!!