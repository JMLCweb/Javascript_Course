const produto = {
    nome: 'Caneta',
    preco: 4.55,
    cor: 'azul',
    caracteristicas: {
        peso: 34,
        tamanho: 3,
        coresDisponiveis: ['Verde', 'Vermelho']
    },
    localidades: [
        {
            rua: 'Abc',
            numero: 4
        },
        {
            rua: 'xpto',
            numero: 10
        }
    ]
};

produto.nome = 'Lápis';
produto.tamanho = 3;

console.log(produto);
console.log(produto.caracteristicas.coresDisponiveis);
console.log(produto.caracteristicas.includes('Vermelho'));

console.log(produto.localidades[1].rua);