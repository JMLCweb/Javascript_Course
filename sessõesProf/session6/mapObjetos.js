const carrinho = [
    {
        nome: 'Caneta',
        preco: 4,
        tamanho: 'S'
    },
    {
        nome: 'Monitor',
        preco: 400,
        tamanho: '27'
    },
    {
        nome: 'Teclado',
        preco: 40,
        tamanho: 'XL'
    }
]

carrinho.forEach( elemento => console.log(elemento.preco));
const precos = carrinho.map( elemento => elemento.preco).filter( preco => preco > 10);
console.log(precos);
console.log(Math.max(...precos));


const precoMaior = elemento => elemento.preco > 10;
const tamanhoCerto = elemento => elemento.tamanho == 'XL';

const exemploDuploFiltro = carrinho.filter(precoMaior).filter(tamanhoCerto);
console.log(exemploDuploFiltro);

var somaPrecos = carrinho
                    .map(elemento => elemento.preco)
                    .reduce( (total, preco) => total + preco,5);

console.log(somaPrecos);
