function quadrado(num) {
  var resultado = num * num;

  return resultado;
}
console.log(quadrado(2));
// outra

function subtrairCinco(numero) {
  var resultado = numero - 5;
  return resultado;
}
console.log(subtrairCinco(60));
var quadrado = quadrado(5);
console.log(subtrairCinco(quadrado));
