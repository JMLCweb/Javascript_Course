var troco = 4.80;

const fator = 0.5;
var moedaAtual = 2;

while (moedaAtual >= 0.05) {
    console.log(`Moeda ${moedaAtual}€: ${Math.floor(troco / moedaAtual)}`);
    troco = troco - (Math.floor(troco / moedaAtual))*moedaAtual;
    console.log("Troco: "+troco);
    moedaAtual = moedaAtual * fator;
    if (moedaAtual == 0.25)
        moedaAtual = 0.2;
}