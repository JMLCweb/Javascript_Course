const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

//Funções Callback - são chamadas quando ocorre um evento!

//Neste caso, o evento é o loop de cada elemento do array!
fabricantes.forEach(imprimir);

//Alternativa com função Arrow
fabricantes.forEach((fabricante) => console.log(fabricante));

//Ou mais completo
fabricantes.forEach((fabricante, indice) =>
  console.log(`${indice + 1}. ${fabricante}`)
);

// ___
const fabricante = ["Mercedes", "Audi", "BMW"];
const escreverValor = (valor, indice) => console.log(valor, indice);

// fabricante.forEach(function(valor,indice))
fabricante.forEach(escreverValor); // funçao call back é executada por cada elemento do array
