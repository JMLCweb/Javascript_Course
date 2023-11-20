const pessoa = {
  nome: "Jorge",
  idade: 28,
  endereco: {
    rua: "rua normalissima",
    localidade: "porto",
  },
};

const pessoa2 = { ...pessoa, activo: true };
console.log(pessoa2);
pessoa.nome = "Maria";
console.log(pessoa);
console.log(pessoa2);

// ----

const array = [2, 3, 5, 4];
const array1 = [44, ...array, 99];
console.log(array1);
