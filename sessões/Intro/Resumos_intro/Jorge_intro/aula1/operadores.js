var nome = "JMLCweb";
console.log("Welcome to", nome + '!');

// Resto da Divisão
console.log(3 % 2);
console.log(16 % 2);

const milha = 1.609344;
var totalMilhas = 200;
var totalKm = totalMilhas * milha;
console.log("Milhas: " + totalMilhas + " <=> Km:", totalKm);

var a = 1;
var b = "1";

console.log(typeof a);
console.log(typeof b);
console.log(typeof a == typeof b);

console.log(a == b); // Verificar se são iguais. Tipagem Fraca.
console.log(a != b); // Verificar se são diferentes. Tipagem Fraca.
console.log(typeof a == typeof b); // Verificar se os tipos das variaveis são iguais.

console.log(a === b); // Verificar  se são iguais. Tipagem Forte.
console.log(a !== b); // Verificar se são diferentes. Tipagem Forte.
