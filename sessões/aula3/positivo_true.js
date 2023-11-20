const list = [1, 2, -2, -2.5, 4, 3, -5];
var tester = 0;

function devolveBoolean(arrayInteiros) {
  const resultado = [];

  arrayInteiros.forEach(function (inteiro) {
    resultado.push(true);
  });
  return resultado;
}
console.log(devolveBoolean([1, 2, -2, -2.5, 4, 3, -5]));
