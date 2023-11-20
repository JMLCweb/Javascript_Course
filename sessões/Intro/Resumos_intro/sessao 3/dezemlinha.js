var linha = "";

for (var repetir = 0; repetir <= 9; repetir++) {
  for (var contador = 1; contador <= 10; contador++) {
    //linha = "" - linha = "1 "
    linha = linha + (contador + repetir * 10) + " ";
    //linha = "" + 1 + " " - linha = "1 " + 2 + " ";
    //linha = "1 " - linha = "1 2 "
  }
  console.log(linha);
  linha = "";
}
