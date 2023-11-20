function dobro(numero) {
    return numero * 2;
}

console.log(dobro(2));

const dobroAnonimo = function(numero) {
    return numero * 2;
}

console.log(dobroAnonimo(2));

const dobroArrow = (numero) => numero * 2;

console.log(dobroArrow(2));

function removerCaracter(frase, posicao) {
    return frase.substring(0,posicao-1) + frase.substring(posicao);
}

const removerArrow = (frase, posicao) => frase.substring(0,posicao-1) + frase.substring(posicao);

console.log(removerArrow("Javascript é fácil", 5));