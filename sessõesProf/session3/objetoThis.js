const produto = {
    nome: 'Caneta',
    preco: 4.55,
    cor: 'azul',
    desconto: 0.2,
    precoComDesconto: function() {
        return this.preco * (1 - this.desconto);
    }
};

console.log(produto.nome);
// console.log(preco); Erro
console.log(produto.preco);
console.log(produto.precoComDesconto());
