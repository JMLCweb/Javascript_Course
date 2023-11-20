var temDinheiro = false;
var estaSol = false;
var temCarro = false;

//console.log(temDinheiro && estaSol);

var resultadoE = "#1 - Vai para o shopping? ";

//resultadoE = resultadoE + (temDinheiro && estaSol)
resultadoE += temDinheiro && estaSol;

console.log(resultadoE);

console.log(temCarro || estaSol);

