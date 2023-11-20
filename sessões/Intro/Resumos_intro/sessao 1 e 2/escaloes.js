const nota = 12;

var escalao;

if (nota >= 18 && nota <= 20)
    escalao = "Excelente";

if (nota >= 14 && nota < 18)
    escalao = "Bom";

if (nota >= 9.5 && nota < 14)
    escalao = "Suficiente";

if (nota >= 4 && nota < 9.5 )
    escalao = "Insuficiente";

if (nota >= 0 && nota < 4)
    escalao = "Mau";

console.log(escalao);