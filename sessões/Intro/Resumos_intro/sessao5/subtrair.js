var divisor = 9;
var dividendo = 2;
var contar = 0;

//subtrair divisor - dividendo até que resultado seja menor que o dividendo
//mostrar resultado da subtração
do {
    divisor = divisor - dividendo
    console.log(divisor);
    contar++;
} while(divisor >= dividendo);

console.log("Parte inteira da divisão: ", contar);