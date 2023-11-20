function diaSemanaData(dia, mes , ano) {

    const data = new Date(ano, mes - 1, dia);
    const dias = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
    const diaSemana = data.getDay();

    return data;
}

console.log(diaSemanaData(28,2,1974));