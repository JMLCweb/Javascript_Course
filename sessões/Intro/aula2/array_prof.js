const notas = [14, 21, 23, 45, 3, 4, 2, 78, 5, 3, 4];
notas[0] = 12;
notas[10] = 2;
notas.push("web");
// console.log(notas);

const list = [1, -2, -1, 4, 3, -6, 4, 4];
/*
for (let contador = 0; contador < list.length; contador++) {
  console.log(`O elemento ${contador + 1} é: ${list[contador]}`);
} */
/* for (var element of list) {
  console.log(element);
} */
for (var indice in list) {
  console.log(indice, list[indice]);
}

list.forEach(function (valor, indice) {
  console.log("Dentro de um forEach", indice, valor);
  console.log(indice, list[indice]);
});
