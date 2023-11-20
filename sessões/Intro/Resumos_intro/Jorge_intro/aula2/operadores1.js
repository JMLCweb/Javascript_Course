var a = 3;
console.log(a);
a = a + 5;
console.log("After adding: ", a);
a += 4;
console.log('After add and assign', a);
var nome = "JMLC";
console.log(nome);
nome += "Jorge";
console.log(nome);

var b = 5;
console.log(b);
b = b + 1;
console.log(b);
b += 1;
console.log(b);
b++;
console.log(b);
++b; // pre incremento, primeiro faz o ++ e depois retorna para fazer o console log
console.log(b);
console.log(++b); // ++ -- incrementa ou decrementa 1
console.log(--b);

// Operadores Lógicos
var temDinheiro = true;
var estaSol = false;
var temCarro = false;

var resultadoE = "#1 - Vai para o Shopping? ";
var resultadoOu = "#1 - Vai para a Praia? "

console.log(temDinheiro);
console.log(estaSol);
console.log(temDinheiro && estaSol); // verdadeiro com falso dá falso

resultadoE = resultadoE + (temDinheiro && estaSol);
console.log(resultadoE);

estaSol = true;
resultadoE += temDinheiro && estaSol; // & = e
console.log(resultadoE);

resultadoOu += estaSol || temCarro; // || = ou
console.log(resultadoOu); // Dá true, apesar de nao ter carro está sol

console.log(true);
console.log("Negação com !", !true); // ! é negação
console.log(!!true);

var x = 1;
var y = 2;
console.log(++x == y++); // O resultado é True por a soma do Y só será feita depois da comparação
console.log(y);

console.log('texto');
console.log(!'texto'); // a negação de algo que existe é falso
console.log(!!'texto');

console.log(1);
console.log(!1);
console.log(!!1);
console.log(0);
console.log(!0);
console.log(!!0);

// Operador ternário
var numero = 5;
const resultado = numero % 2 == 0 ? 'Par' : 'Impar';
console.log(resultado);

var numero1 = 8;
const resultado1 = numero1 % 2 == 0 
? 'Par' 
: 'Impar';
console.log(resultado1);

