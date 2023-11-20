// Entrada de dados: (limiteInferior = 1; limiteSuperior=100; tamanho=5)
// Saída de dados: array de inteiros: [70, 5, 48, 51, 89]
// Math.floor(Math.random() * (max - min + 1) + min);

function numerosAleatorios(limiteInferior, limiteSuperior, tamanho) {
    const resultado = [];

    for(var contador = 1; contador <= tamanho; contador++) {
        resultado.push(
            Math.floor(
                Math.random() * (limiteSuperior - limiteInferior + 1) + limiteInferior
            )
        );
    }

    return resultado;
}

// entrada: array de inteiros
// saida: maior numero do array

function devolverMaior(numeros) {

    var maior = numeros[0];

    //Percorrer o array desde o indice 1 até ao final - numeros.length
    // Verificar se o valor > maior então o maior = valor
    for (var contador = 1; contador < numeros.length; contador++) {
        if (numeros[contador] > maior) {
            maior = numeros[contador];
        }
    }

    return maior;
}

const arrayInteiros = numerosAleatorios(1,100,6);
console.log(arrayInteiros);

arrayInteiros.sort(function (a,b) {
    return b-a;
});
console.log(arrayInteiros);
console.log(arrayInteiros[arrayInteiros.length-1]);

console.log(devolverMaior(arrayInteiros));
