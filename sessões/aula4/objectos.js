const produto = {
  nome: "cane",
  preco: 4.55,
  desconto: 0.2,
  /*   promoDiscount: function () {
    return this.preco * (1 - this.desconto);
  }, */
  caracteristicas: {
    peso: 34,
    tamanho: 3,
    cores: ["verde", "vermelho"],
  },
};
console.log(typeof produto);
console.log(produto.nome);
console.log(produto["preco"]);
// console.log(produto.promoDiscount());
produto.nome = "lápis";
console.log(produto);
console.log(produto.caracteristicas.cores);
console.log(produto.caracteristicas.cores.includes("vermelho"));
