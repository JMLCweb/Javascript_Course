var nota = -4;
if (nota >= 18.0 && nota <= 20.0) {
  console.log("Aprovado com Distinção, Excelente");
}
if (nota >= 14.0 && nota <= 17.0) {
  console.log("Aprovado com Distinção, Bom");
}
if (nota >= 9.5 && nota < 14) {
  console.log("Aprovado, Suficiente");
}
if (nota >= 4.0 && nota < 9.5) {
  console.log("Reprovado, Insuficiente");
}

if (nota >= 0.0 && nota < 4.0) {
  console.log("Reprovado, Mau");
}

if (nota > 20 || nota < 0) {
  console.log("Nota Invalida!");
}

// Estrutura de controlo ELSE
const hora = 20;
var saudacao;

if (hora > 5 && hora < 12) {
  saudacao = "Bom dia";
} else {
  if (hora > 5 && hora < 19) {
    saudacao = "Boa tarde";
  } else {
    saudacao = "Boa noite";
  }
}
console.log(saudacao);

// Indicar o maior de dois numeros
const a = 12;
const b = 15;
const c = 19;
var maior;

if (a > b && a > c) {
  maior = a;
  console.log("A é o numero maior!", maior);
}
if (b > c) {
  maior = b;
  console.log("B é o maior numero!", maior);
} else maior = c;
console.log("C é o maior numero!", maior);

// Indicar quantos dias tem o mês
const mes = 2;
var diasMes;
if (mes == 2) {
  diasMes = 28;
} else {
  if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    diasMes = 30;
  } else {
    diasMes = 31;
  }
}
console.log("O Mês", mes, "tem", diasMes, "dias.");

// Verificar se o ano é bissexto
const ano = 2000;
if (ano % 4 != 0) {
  console.log("Não é bissexto!");
} else {
  if (ano % 100 != 0) {
    console.log("É Bissexto!");
  } else {
    if (ano % 400 == 0) {
      console.log("É Bissexto!");
    } else {
      console.log("Não é Bissexto!");
    }
  }
}

// Outra forma de Verificar
if (
  (ano % 4 == 0 && ano % 100 != 0) ||
  (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0)
) {
  console.log("É Bissexto!");
} else {
  console.log("Não é Bissexto!");
}

// Estrutura de decisão SWITCH() {case1,2,3,4,etc: break; default: break;}
const mes1 = 3;
var mesExtenso;

switch (Math.ceil(mes1)) { // Math.ceil é para transformar par numero inteiro
  case 1:
    mesExtenso = "Janeiro";
    break;
  case 2:
    mesExtenso = "Fevereiro";
    break;
  case 3:
    mesExtenso = "Março";
    break;
  default:
    mesExtenso = "Mês Inválido";
    break;
}
console.log(mesExtenso);
