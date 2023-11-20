const mes = 54;
var dias;

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12)
    dias = "31 dias";
else
    if (mes == 4 || mes == 6 || mes == 9 || mes == 11)
        dias = "30 dias";
    else
        if (mes == 2)
            dias = "28 dias";
        else
            dias = "Mês inválido!";

console.log(dias);