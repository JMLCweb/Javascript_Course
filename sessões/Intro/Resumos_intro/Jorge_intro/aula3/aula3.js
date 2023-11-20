// Novo ciclo FOR para repetir a instrução seguinte 10 vezes.
for (var tabuada = 1; tabuada <= 10; tabuada++) {
  console.log(`Tabuada do ${tabuada}`);
  for (var contador = 1; contador <= 10; contador++) {
    console.log(`${tabuada} x ${contador} = ${tabuada * contador}`);
  }
}
var caracter = "#";
for (var x = 1; x <= 6; x++) {
  console.log(`${caracter}`); // imprime os números de um até seis, inclusive.
  var caracter = caracter + "#";
}
console.log(Math.floor(3 / 2));
console.log(Math.ceil(3 / 2));
console.log(Math.round(3 / 2));

// Estruturas de Repetição FOR
for (var i = 1; i <= 10; i++) {
  console.log("O valor atual é: " + i);
}

// Estruturas de Repetição While
var x = 1;
while (x <= 10) {
  console.log("O valor atual é: " + x);
  x++; // adicionar 1 após a primeira tarefa
}

// Estruturas de Repetição DO
var contador = 1;
do {
  console.log(contador++); // Podemos adicionar em console.log(contador++);
} while (contador <= 10);
