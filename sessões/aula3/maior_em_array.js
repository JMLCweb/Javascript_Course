function encontraMaior(array) {
  if (array.length < 1) {
    throw new Error("Empty array");
  }
  var maior = array[0]; //mais alto iniciado como o primeiro elemento

  for (var i = 1; i < array.length; ++i) {
    //           ^--- Começa no segundo pois o primeiro já foi considerado

    //se o valor que tem no momento é maior que o mais alto
    if (array[i] > maior) {
      maior = array[i]; //atualiza o mais alto
    }
  }

  return maior;
}

const arr = [10, 3, 1, 6, 70, 2];
console.log(encontraMaior(arr));
