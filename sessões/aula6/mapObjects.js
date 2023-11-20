const produtos = [
  { nome: "Samsung S21", preco: 800, fragil: true },
  { nome: "Iphone 12", preco: 900, fragil: true },
  { nome: "Tablet Lenovo", preco: 300, fragil: true },
  { nome: "Portátil ASUS", preco: 800, fragil: false },
];
var somaPrecos = produtos
  .map((produto) => produto.preco)
  .reduce((total, preco) => {
    /* ou  .reduce((total, preco) => total+preco); sem log nem return */

    console.log(total, preco);
    return total + preco;
  });
console.log(somaPrecos);
