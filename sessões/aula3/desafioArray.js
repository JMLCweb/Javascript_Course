function getRandom(min, max, tamanho) {
  const resultado = [];
  for (var i = 1; i < tamanho; i++) {
    resultado.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return resultado;
}
console.log(getRandom(1, 10, 6));

// maior em array
function encontraMaior(array) {
  var maior = array[0]; //mais alto iniciado como o primeiro elemento

  for (var i = 1; i < array.length; i++) {
    //           ^--- Começa no segundo pois o primeiro já foi considerado

    //se o valor que tem no momento é maior que o mais alto
    if (array[i] > maior) {
      maior = array[i]; //atualiza o mais alto
    }
  }
  return maior;
}
const arr = getRandom(1, 10, 6);
console.log(arr);
console.log(encontraMaior(arr));

// maior metodo forEach
