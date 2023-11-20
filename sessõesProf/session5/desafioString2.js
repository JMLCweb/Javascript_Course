// Entrada: frase
// Saida: inteiro - número de palavras
// Exemplo: ("Javascript é fácil");
// Resultado: 3;


var exemplo = 1;

function contarPalavras(frase) {
    
    console.log(exemplo);
    return frase.trim().split(' ');
}

console.log(contarPalavras(" Javascript é fácil "));
console.log(exemplo);