var espacos = 6;
var linhaEspacos = "";

for (var repetir = espacos; repetir > 0; repetir--) {
  for (var contador = 1; contador <= espacos; contador++) {
    linhaEspacos += "x";
  }
  console.log(linhaEspacos);
  espacos--;
  linhaEspacos = "";
}
