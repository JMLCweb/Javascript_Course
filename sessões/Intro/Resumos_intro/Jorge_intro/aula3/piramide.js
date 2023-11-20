/*
   #        3 espaços   Espaços = base / 2 = 3.5 - 3
  ###       2 espaços
 #####      1 espaço
#######     base = 7    linha = base / 2 = 3.5 = 4

1º escrever apenas 1 # em cada linha
base = 7
 */

var x = 0;
const base = 15;
const linhas = Math.ceil(base / 2); // 0,866...

var numEspacos = Math.floor(base / 2);
var espacos = "";
var caracter = "#";

for (numLinha = 1; numLinha <= linhas; numLinha++) {
  espacos = "";
  for (i = 1; i <= numEspacos; i++) {
    espacos += " ";
  }
  numEspacos--; // Abreviatura de: numEspacos = numEspacos - 1;
  console.log(espacos + caracter);
  caracter += "##";
}
