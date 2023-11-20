// Entrada: frase, posição
// Saida: frase sem o caracter dessa posição
// Exemplo: ("Javascript é fácil", 5);
// Resultado: "Javacript é fácil";

function removerCaracter(frase, posicao) {
    return frase.substring(0,posicao-1) + frase.substring(posicao);
}

console.log(removerCaracter("Javascript é fácil", 5));