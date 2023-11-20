function escreverData() {

    const dataAtual = new Date();

    const dias = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
    const dia = dataAtual.getDay();
    var horas = dataAtual.getHours();
    const periodo = horas > 11 ? 'PM' : 'AM';
    horas = horas > 12 ? horas - 12 : horas;
    horas = horas < 10 ? "0" + horas : horas;
    var minutos = dataAtual.getMinutes();
    minutos = minutos < 10 ? "0" + minutos : minutos;

    console.log(`Dia da semana: ${dias[dia]}`);
    console.log(`Hora atual: ${horas}:${minutos} ${periodo}`);
}

escreverData();