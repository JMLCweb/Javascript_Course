class Data {

    constructor (dia = 1, mes = 1, ano = 2023) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    exibir() {
        console.log(`${this.dia}/${this.mes}/${this.ano}`);
    }

}

const d1 = new Data();
console.log(d1);
const d2 = new Data(20,10,2023);
console.log(d2);
d2.exibir();