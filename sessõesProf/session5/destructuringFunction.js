const pessoa = {
    nome: "Paulo",
    idade: 30,
    reformado: true,
    endereco: {
        rua: "Rua da Avenida",
        localidade: "Faro"
    }
};

function escreverNome({nome = "Vazio"}) {
    console.log(nome);
}

escreverNome(pessoa);
escreverNome('');
escreverNome(); // Erro

var a = 1;
var b = 2;
[b,a]=[a,b]
console.log(a,b);