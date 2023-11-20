var numero = 327;
var resultado;

while (numero >= 10) {
  console.log(numero % 10);
  numero = Math.floor(numero / 10);
}
console.log(numero);
