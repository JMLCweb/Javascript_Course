// basta a palavra async para tornar a função assíncrona!
const paises = async () => {
  const response = await fetch("https://restcountries.com/v3.1/name/portugal");
  //O fetch devolve uma Promise, então usamos a palavra await para que o jscript atribua
  // o valor a response apenas quando a Promise estive concluída! // Não esquecer que estamos dentro da função assíncrona!!!
  // Também podemos usar o fecth com ficheiros JSON locais
  //Por exemplo fetch('autores.json')
  console.log(response);
};

const listaPaises = paises();

console.log(listaPaises);
// Um função assíncrona devolve sempre uma Promise!
