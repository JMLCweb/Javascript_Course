function retorno(array, digitos) {
  const resultado = [];
  var tamanho = digitos.toString();
  array.forEach(function (elemento) {
    if (String(elemento).length == digitos) {
      resultado.push(elemento);
    }
  });

  return resultado;
}

const list = [1, 20, 2, 2.5, 4, 300, 50];
console.log(retorno(list, 2));
/// .....____......

function criarData(dia, mes, ano, diaSemana, hora) {
  return {
    hora: hora,
    diaSsemana: diaSemana,
    dia: dia,
    mes: mes,
    ano: ano,
    mostrar: function () {
      console.log(`Hoje é: ${this.diaSsemana}`);
      console.log(`Hora atual: ${this.hora}`);
    },
    exibir: function () {
      console.log(`${this.dia}/${this.mes}/${this.ano}`);
    },
  };
}
const d1 = criarData(10, 12, 2021, "Quarta-feira", "11:00PM");
const d2 = criarData(2, 2, 2022);
d1.mostrar();
d2.exibir();
