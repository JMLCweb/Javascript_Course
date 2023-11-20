function retornaData(dia, mes, ano) {
    const data = {
        mes,
        dia,
        ano,
        exibir: function () {
            console.log(`${this.dia}/${this.mes}/${this.ano}`);
        }
    }

    return data;
}

const data1 = retornaData(20,10,2024);
const data2 = retornaData(12,5,2001);

console.log(data1);
console.log(data2);
console.log(data2.mes);
data1.exibir();
