// 3
// 6
// 5
// 563 -> 563 / 10 = 56,3 -> 563 % 10 = 3!! Math.floor(563/10) = 56
// 56 -> 56 % 10 = 6!! -> Math.floor(56/10) = 5!!
/* var numero = 327;
while (numero >= 10) {
  console.log(numero % 10);
  numero = Math.floor(numero / 10);
  console.log(numero);
} */
var numero = 327;
soma = 0;

const resto = function (numero) {
  return numero % 10;
};
const algarismos = function (numero) {
  return (numero - resto(numero)) / 10;
};
while (numero >= 10) {
  soma += resto(numero);
  numero = algarismos(numero);
}

soma += numero;
console.log(algarismos(344));
console.log(soma);
