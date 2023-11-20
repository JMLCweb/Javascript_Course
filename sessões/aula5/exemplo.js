function myBio(firstname, lastname, ...otherInfo) {
  //metodo rest para agrupar num array
  console.log(firstname);
  console.log(lastname);
  console.log(otherInfo);
}
myBio("jorge", "costa", "Flag", "javascrip");

const dados = ["231", "123", "777"];
// metodo spread para agrupar numa lista
function escreverDados(firstname, lastname, company) {
  console.log(`${firstname}${lastname}-${company}`);
}
escreverDados(...dados);
