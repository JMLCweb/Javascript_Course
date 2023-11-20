function numDivisores(num) {
  var divisores = 2;

  for (var contador = 2; contador < num; contador++) {
    if (num % contador == 0) {
      divisores++;
    }
  }
  return divisores;
}
const resultado = numDivisores(16);

if (resultado == 2) {
  console.log("É primo");
} else {
  console.log("Não é primo");
}

console.log(resultado, "Divisores");
