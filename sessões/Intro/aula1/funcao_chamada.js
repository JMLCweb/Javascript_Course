function semReturn() {
  console.log("A função foi chamda!");
  return 1;
}
const x = semReturn();
console.log(x);
//----------
// Primeira Opção
function main(a, b) {
  return a + b;
}
console.log(main(2, 3));
// Segunda Opção
var main = function (a, b) {
  return a + b;
};
console.log(main(3, 5));
// Terceira Opção
var somar = main(2, 4);
console.log(somar);
console.log(typeof somar);
console.log(typeof main);
