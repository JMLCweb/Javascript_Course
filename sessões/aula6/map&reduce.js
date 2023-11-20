const produtos = [
  { nome: "Samsung S21", preco: 800, fragil: true },
  { nome: "Iphone 12", preco: 900, fragil: true },
  { nome: "Tablet Lenovo", preco: 300, fragil: true },
  { nome: "Portátil ASUS", preco: 800, fragil: false },
];

const frageis = produtos.map((produto) => produto.fragil);
console.log(frageis);

//1 - Todos os produtos são frágeis?
const todosFrageis = (resultado, fragil) => resultado && fragil;
console.log(produtos.map((produto) => produto.fragil).reduce(todosFrageis));

//2 - Algum produto é frágil?
const algumFragil = (resultado, fragil) => resultado || fragil;
console.log(produtos.map((produto) => produto.fragil).reduce(algumFragil));
