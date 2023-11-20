const divisor = 9;
const dividendo = 2;

var subtracoes = 0;
var sub1 = divisor;

sub1 = divisor - dividendo;
subtracoes++;

console.log("resultados1:", sub1);
console.log("subtracoes " + subtracoes);

do {
  sub1 = sub1 - dividendo;
  subtracoes++;

  /*  console.log("resultados1:", sub1);
  console.log("subtracoes " + subtracoes); */
} while (sub1 >= dividendo);
console.log(subtracoes, "divisao inteira:");
