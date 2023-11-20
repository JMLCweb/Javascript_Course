// Contagem de numeros negativos em uma array.

const lista = [1, -2, -1, 4, 3, -6, 4, 4];

function verificarComOf(totalNnegativos) {
  var negativos = 0;
  for (var numero of lista) {
    if (numero < 0) {
      negativos++;
    }
  }
  return negativos;
}

console.log(verificarComOf(lista));

// Quantas vezes aparece um determinado numero.

var lista1 = [1, -2, -1, 4, 3, -6, 4, 4];
var repeticao = 0;
var valor = 4;

for (let i = 0; i < lista.length; i++) {
  if (lista1[i] == valor) {
    repeticao++;
  }
}
console.log("O numero", valor, "aparece", repeticao, "vezes.");

// com funçoes
const numeros = [1, -2, -1, 4, 3, -6, 4, 4];
const numeroIgual = 4;

function numDeVezes(array, valor) {
  var resultado = 0;
  for (var numero of array) {
    if (numero == valor) {
      resultado++;
    }
  }
  return resultado;
}

console.log(numDeVezes(numeros, numeroIgual));
