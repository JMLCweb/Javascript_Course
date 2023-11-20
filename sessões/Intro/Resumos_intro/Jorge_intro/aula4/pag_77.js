/* 
Implemente um programa que em 100 inteiros 
(gerados aleatoriamente entre 1 e 100), 
determine e indique a maior sequencia crescente.
Exemplo de dados: 4 6 8 1 3 5 7 3 4 3 6 7 1
Resultado:
No Elementos: 4 
Sequencia: 1 3 5 7 
*/

const min = 1;
const max = 100;
const n = 10;
var Sequencia = 0;
var numAnterior = min - 1;
var maiorSequencia = 1;
var todosNumeros = "";
var frase = "";
var maiorFrase = "";

for (var i = 1; i <= n; i++) {
  random = Math.floor(Math.random() * (max - min + 1) + min);

  todosNumeros = todosNumeros + random + " ";

  if (random > numAnterior) {
    Sequencia++;
    frase = frase + random + " ";
  } else {
    if (Sequencia > maiorSequencia) {
      maiorSequencia = Sequencia;
      maiorFrase = frase;
    }
    Sequencia = 1;
    frase = random + " ";
  }

  numAnterior = random;
}
console.log("Os Numeros são: ", todosNumeros);
console.log("A sequencia maxima é: ", maiorSequencia);
console.log("A sequencia é: ", maiorFrase);
