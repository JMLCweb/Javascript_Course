/* 
Implemente um programa que um inteiro n e n inteiros 
(gerados aleatoriamente entre 1 e 100), 
determinando o maior e o menor desses n inteiros.
Implemente o seu programa usando (i) 
uma instrução de ciclo for e (ii) 
uma instrução de ciclo while.
Exemplo de dados: 4 6 8 1 3 
Resultado: 8 1 
*/

/* function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomInt(1, 100)); 
*/

var min = 1;
var max = 100;
const n = 8;
var maior;
var menor;

for (var i = 1; i <= n; i++) {
  random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random);
  if (i == 1) {
    maior = random;
    console.log(maior, "Primeiro maior: ");
    menor = random;
    console.log(menor, "Primeiro menor: ");
  } else if (maior <= random) {
    maior = random;
    console.log(maior, "Maior intermédio: ");
  } else if (menor >= random) {
    menor = random;
    console.log(menor, "Menor intermédio: ");
  }
}
console.log("Maior real: ", maior);
console.log("Menor real: ", menor);
