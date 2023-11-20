const notas = [8, 12, 9, 19, 17, 15];
const positivas = [];
const negas = [];

for(let nota of notas) {
    if (nota < 10) {
        negas.push(nota);
    } else {
        positivas.push(nota);
    }
}


const apenasNegativas = valor => valor < 10;
const resultado = notas.filter(valor => valor >= 10);
const negativas = notas.filter(apenasNegativas);

console.log(positivas);
console.log(resultado);
console.log(negativas);