const pessoa = {
  saudacao: "Bom dia!!",
  falar() {
    console.log(this.saudacao);
  },
};
pessoa.falar(); //Bom dia!!
const novafalar = pessoa.falar;
console.log(typeof novafalar);
novafalar(); //undefined - conflito entre paradigmas: funcional e OO
const falarDePessoa = pessoa.falar.bind(pessoa); // para dar contexto da função
falarDePessoa();
