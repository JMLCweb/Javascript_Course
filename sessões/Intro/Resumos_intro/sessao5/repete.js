const min = 1;
const max = 100;
const numero = 36;
var repeticoes = 0;
var previsao = 8;
var aleatorio;

//aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

//gerar 1000 número aleatorios entre 1 e 100!
for (var contador = 1; contador<=1000; contador++) {
    aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    //escrevero número aleatorio se aleatorio é igual a numero(50)
    //contar o numero de vezes que aleatorio é igual ao numero
    if (aleatorio == numero) {
        //console.log(aleatorio);
        repeticoes++;
    }
}
//mostrar quantas vezes o número se repete
console.log("Número de repetições: ",repeticoes);
if (repeticoes == previsao) {
    console.log("Parabéns!");
}
