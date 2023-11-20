// funcao com entrada de dados
function arvore(simbolo, numLinhas) {
  var caracter = simbolo;
  for (var contador = 1; contador <= numLinhas; contador++) {
    console.log(caracter);
    caracter += simbolo;
  }
}
arvore("*", 4);
arvore("x", 5);
