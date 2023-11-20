function somarNumeros(...numeros) {
    console.log(numeros);
    var total = 0;
    numeros.forEach(function (numero) {
        total += numero;
    });
    console.log(total);
}

somarNumeros(4,5,7,8);

console.log(Math.max(45,5,67, 8));
console.log(Math.max(...[45,5,67, 8]));


console.log([45,5,67, 8]);
console.log(...[45,5,67, 8]);
