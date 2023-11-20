const numero = 20;
const cardinalidade = numero % 2 == 0 ? "Par" : "Impar";
console.log("O Numero é", cardinalidade);

const numero1 = 4;
const resultado =
  numero1 > 0 
  ? "Positivo" 
  : numero1 < 0 
  ? "Negativo" 
  : "Igual a zero";

console.log("O numero", numero1, "é", resultado);

// Inicio de condições
/*  if (condição) {
    linha de código;
} 
*/
if (4 > 7) {
    console.log('Vai escrever esta linha');
    console.log('Vai escrever esta linha1');
} else {
    console.log('Não vai escrever esta linha')
}

if (8 > 7) {
    console.log('Vai escrever esta linha');
    console.log("Terminou a execução");
}
   
const nota = 12;
const bomComportamento = true;
if (nota >=9.5 && bomComportamento) { // && = e
        console.log("Parabéns!");
}
if (nota < 9.5 || bomComportamento) { // || =
    console.log("Upsss!");
}

// Estruturas de Repetição - FOR
for ( var contador = 1; contador <= 10; contador++) {
    console.log(contador);
}
// Estrutura de Repetição - Template String
const a = 3;
const b = 5;
 console.log("a =",a, "e b =", + b);
 console.log(`a = ${a} e b = ${b}`);
