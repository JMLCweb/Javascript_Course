/* Implemente um programa que imprima o número de divisores de um inteiro dado. 
Exemplo de dados: 6
Resultado: 4 (pois 6 tem 4 divisores, 1, 2, 3 e 6).
*/
var valor = 5;
var max = 100;
var contador = 2;
var divisores = 0;
var ePrimo = true;

/* for (i = 1; i <= valor; i++) {
  if (valor % i == 0) {
    console.log(valor, "é divisivel por", i);
    divisores++;
  }
} */
while (contador < valor && divisores == 2) {
  console.log(contador);
  if (valor % contador == 0) {
    ehPrimo = false;
  }
}
contador++;
console.log("Totalidade de divisores: ", contador);

if (divisores == 2) {
  console.log(valor, " É numero primo.");
} else {
  console.log(valor, "Não é numero primo.");
}

while (contador < valor && divisores == 2) {
  console.log(contador);
  if (valor % contador == 0) {
    divisores++;
  }
}
contador++;
