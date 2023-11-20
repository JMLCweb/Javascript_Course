function escreverData() {
  const dataAtual = new Date();
  const dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
  ];
  const dia = dataAtual.getDay();

  console.log(`Dia da semana: ${dias[dia]}`);
}
escreverData();
