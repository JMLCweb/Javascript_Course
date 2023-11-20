var numero = 9538
var existeAlgarismo = false;

while(numero >= 10 && !existeAlgarismo) {
    console.log(numero % 10);
    if (numero % 10 == 3) {
        existeAlgarismo = true;
    }
    numero = Math.floor(numero / 10);
}
console.log(numero);
if (existeAlgarismo || numero == 3) {
    console.log("O 3 existe no número");
} else {
    console.log("O 3 NÃO existe no número");
}