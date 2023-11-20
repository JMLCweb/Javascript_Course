const notas = [8, 12, -9, 18, 17, 15];
const positivas = [];

for (let nota of notas) {
  if (nota > 0) {
    positivas.push(nota);
  }
}
// callback
const apenasPositivas = (valor) => valor > 0;
const apenasNegativas = (valor) => valor < 0;

const resultadoPos = notas.filter(apenasPositivas); //corre o array e devolve os elemento que correspoonde à regra, neste caso apenasPositivas em cima
const resultadoNeg = notas.filter(apenasNegativas);
console.log(positivas);
console.log(resultadoPos);
console.log(resultadoNeg);
