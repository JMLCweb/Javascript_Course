// Entrada: array de inteiros: [3, 4, -5 , -7, 0, 8]
// Saída: array de boolean: [true, true, false, false, false, true]

function devolveBoolean(arrayInteiros) {
    const arrayBooleans = [];

    arrayInteiros.forEach( function (inteiro) {
            arrayBooleans.push(inteiro > 0);
    });

    return arrayBooleans;
}

console.log(devolveBoolean([4,5,-7,-8,5,5]));
