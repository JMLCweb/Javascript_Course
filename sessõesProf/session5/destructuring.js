const pessoa = {
    nome: "Paulo",
    idade: 30,
    reformado: true,
    endereco: {
        rua: "Rua da Avenida",
        localidade: "Faro"
    }
};

/* const nome = pessoa.nome;
const idade = pessoa['idade'];
console.log(nome,idade); */

const { nome: n, idade: i, reformado = false } = pessoa;
console.log(n, i, reformado);

const { endereco: {rua} } = pessoa;
console.log(rua);
//const { rua } = endereco;
//console.log(rua);