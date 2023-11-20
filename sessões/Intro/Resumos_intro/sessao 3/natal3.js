const base = 11;
var espacos = 0;
var linhas = 0;
var caracter = "#";
var linhaEspacos = "";
//calcular linhas
//calcular espacos
linhas = Math.ceil(base / 2);
espacos = Math.floor(base / 2);
for(var contador = 1; contador <= linhas; contador++) {
    //espaços
    for (var contaEspacos = 1; contaEspacos <= espacos; contaEspacos++) {
        linhaEspacos += " ";
    }
    espacos--;
    //caracter
    console.log(linhaEspacos+caracter);
    caracter += "##";
    linhaEspacos = "";
}



