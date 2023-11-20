var ePrimo = true;
var max = 1000;
var totalPrimos = 0;

for (var numero = 2; numero < max; numero++) {
  var ePrimo = true;
  var contador = 2;
  while (contador < numero && ePrimo) {
    if (numero % contador == 0) {
      ePrimo = false;
    }
    contador++;
  }
  if (ePrimo) {
    totalPrimos++;
  }
}
console.log(totalPrimos);
