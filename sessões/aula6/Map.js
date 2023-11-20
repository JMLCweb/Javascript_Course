// map devolve sempre um novo array ao contrario do foreach que nao devolve nada

const notas = [4.5, 11.3, 14.7, 8.7, 10.9];

var notasBonus = notas.map(function (nota) {
  return nota + 2;
});
console.log(notasBonus);

//com função Arrow
var notasBonus = notas.map((nota) => nota * 2);
console.log(notasBonus);

//com função
var triplo = (valor) => valor * 3;
var triploNotas = notas.map(triplo);
console.log(triploNotas);

//com forEach
const dobro = [];
notas.forEach((valor) => dobro.push(valor * 2));
console.log(notas);
console.log(dobro);
