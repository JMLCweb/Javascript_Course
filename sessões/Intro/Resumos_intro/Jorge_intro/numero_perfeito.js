const n = 28;
var divisores = 1;
var resultado = 0;

for (var contador = 1; contador < n; contador++) {
  if (n % contador == 0) {
    resultado += contador;
  }
}
if (resultado == n) {
  console.log("O numero e perfeito");
} else {
  console.log("O numero nao e perfeito");
}
console.log(resultado);
