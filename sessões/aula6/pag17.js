const str = "Mozilla";

function conversion(string, position) {
  console.log(
    string.substring(position - 1, position),
    "o elemento ",
    position
  ); // mostra posição
  return string.substring(0, position - 1) + string.substring(position);
}

console.log(conversion(str, 3));
// retornar numero de palavras

const retorno = "A vida é bela";
function contagem(string) {
  return string.split(" ").length;
}
console.log(contagem(retorno));
