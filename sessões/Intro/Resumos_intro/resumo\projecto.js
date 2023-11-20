/* function somar(a, b, c, d, e = 0) { // e=0 funciona como valor default, ao acrscentar arg sem perder execuções anteriores
  console.log(a, b, c, d, e);
  return a + b + c + d + e;
}
console.log("A soma é:", somar(3, 2, 3, 5));
console.log"A soma é:",(somar(5, 5, 5, 5, 5));
 */
function exec(fn, num1, num2) {
  if (typeof fn === "function") {
    console.log(fn(num1, num2));
  } else {
    console.log("nao é funçao");
  }
}
function somar(a, b) {
  return a + b;
}
exec(somar);
exec(somar, 4, 5);
console.log(exec);
console.log(exec());

// outra cena
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
