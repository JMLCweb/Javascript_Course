const cars = { BMW: 3, Tesla: 2, Toyota: 1 };
console.log(Object.keys(cars));
console.log(cars.BMW);
console.log(cars["BMW"]);

const valores = Object.keys(cars).map((chave) => cars[chave]);
console.log(valores);

//2017
console.log(Object.values(cars));

for (let [chave, valor] of Object.entries(cars)) {
  console.log(`Key: ${chave}, Valor: ${valor}`);
}
