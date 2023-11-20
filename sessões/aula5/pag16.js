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

function diaSemana(dia, mes, ano) {
  const data = new Date(ano, mes - 1, dia);
  const dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
  ];
  const diaSemana = data.getDay();
  return dias[diaSemana];
}
console.log(diaSemana(10, 9, 1994));
