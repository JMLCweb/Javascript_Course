const produtos = [
    { nome: "Samsung S21", preco: 800, fragil: false},
    { nome: "Iphone 12", preco: 900, fragil: true},
    { nome: "Tablet Lenovo", preco: 300, fragil: true},
    { nome: "Portátil ASUS", preco: 800, fragil: true},
    ];

const apenasFrageis = produtos.filter(elemento => elemento.fragil);
console.log(apenasFrageis);
console.log('São todos frágeis: ',produtos.length == apenasFrageis.length);

const umFragil = produtos.filter(elemento => elemento.fragil);
console.log((umFragil));
console.log('Existe um frágil: ', umFragil.length > 0);

