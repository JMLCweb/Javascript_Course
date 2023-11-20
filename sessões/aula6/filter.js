const produtos = [
  { nome: "Samsung S21", preco: 800, fragil: true },
  { nome: "Iphone 12", preco: 900, fragil: false },
  { nome: "Tablet Lenovo", preco: 300, fragil: true },
  { nome: "Portátil ASUS", preco: 800, fragil: false, tamanho: "XL" },
];
const caros = (elemento) => elemento.preco > 500;

const frageis = (elemento) => elemento.fragil;
const tamanho = (elemento) => elemento.tamanho == "XL";

const filtroProdutos = produtos.filter(caros);
const filtroProdutos1 = produtos.filter(caros).filter(tamanho);

console.log(filtroProdutos);
console.log(filtroProdutos1);
