const min = 1;
const max = 20;
var soma = 0;
var media = 0;
var positivas = 0;

//gerar 10 números aleatórios, mostrar cada um e a sua soma
for (var contador = 1; contador <= 10; contador++) {
    var aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(aleatorio);
    soma += aleatorio;
    if (aleatorio >= 10)
        positivas++;
}
console.log("Soma: ", soma);

media = soma / 10;
//Média
console.log("Média: ", media);

console.log("Positivas: ", positivas);

