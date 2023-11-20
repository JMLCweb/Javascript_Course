function retornaUmaFuncaoAnonima() {
  return function () {
    return "Boa tarde!";
  };
}
console.log(retornaUmaFuncaoAnonima); //[Function: retornaUmaFuncao]
console.log(retornaUmaFuncaoAnonima()); //[Function: (anonymous)]
console.log(retornaUmaFuncaoAnonima()()); //Bom tarde!
