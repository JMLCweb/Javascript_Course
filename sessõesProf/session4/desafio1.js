function devolverNumeros(arrayNumeros, tamanho) {

    const numeros = [];
    //percorrer o array de numeros
    // para cada valor, verificar o tamanho
    // se tamanho do valor == tamanho, adicionar a um array
    // devolver esse array
    arrayNumeros.forEach( function(numero) {
        // console.log(numero,numero.length,String(numero).length);
        if (String(Math.abs(numero)).length == tamanho) {
            numeros.push(numero);
        }
    })

    return numeros;
}

console.log(devolverNumeros([-5,75,123,4,53],2));