const pessoa = {
    nome: "Paulo",
    idade: 30,
    reformado: true,
    endereco: {
        rua: "Rua da Avenida",
        localidade: "Faro"
    }
};

const pessoa2 = {...pessoa, activo: true};
console.log(pessoa2);

pessoa.nome = "Maria";
console.log(pessoa);
console.log(pessoa2);

const arrayNumero = [4,7,2,6];
const array = [44,...arrayNumero,99];
console.log(array);