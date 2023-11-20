const pessoa = {
  nome: "Jorge",
  idade: 28,
  endereco: {
    rua: "rua normalissima",
    localidade: "porto",
  },
};
const nome = pessoa.nome;
const idade = pessoa.idade;
console.log(nome, idade);
const {
  endereco: { rua },
} = pessoa;
console.log(rua);
// -------

const array = [1, 2, 3, 4, 5];
const [x, , y] = array;
console.log(x, y);
