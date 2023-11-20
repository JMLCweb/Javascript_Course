var numero = 4456;
var soma = 0;

while(numero >= 10) {
    console.log(numero % 10);
    soma += (numero % 10);
    numero = Math.floor(numero / 10);
}
console.log(numero);
soma += numero;
console.log("Soma: ",soma);