var lista = [10, 20, 30, 35, 40, 45, 50];
var nomes = [];
console.log(lista);
lista[2] = 30.5;
console.log(lista);
console.log(typeof nomes);

console.log(typeof Math);
console.log(typeof console);
console.log(typeof console.log);

const numeros = [14, 18, 6];
console.log(numeros);
console.log(numeros.length);

for (var i = 0; i < lista.length; i++) {
  console.log(i, lista[i]);
}

var valores = "";
for (var nota of lista) valores += nota + " ";
console.log(valores);

var indices = "";
for (var indice in lista) indices += indice + " ";
console.log(indices);
