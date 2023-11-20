function somarNum(...numeros) {
  console.log(numeros);
  var total = 0;
  numeros.forEach(function (numero) {
    total += numero;
  });
  console.log(total);
}
somarNum(3, 4, 5, 6);
console.log(Math.max(45, 5, 6, 76)); // math + lista de numero _maximonumero
console.log(Math.max(...[45, 5, 6, 76])); //math + metodo_rest + array _maximonumero
