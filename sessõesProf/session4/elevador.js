class Elevador {

    constructor (capacidade, totalPisos) {
        this.capacidade = capacidade;
        this.totalPisos = totalPisos;
        this.pisoAtual = 0;
        this.lotacaoAtual = 0;
    }

    subir() {
        if (this.totalPisos > this.pisoAtual) {
            console.log('Piso atual: ',++this.pisoAtual);
        } else {
            console.log('Erro: já não pode subir mais');
        }
    }

    descer() {
        if (this.pisoAtual > 0) {
            console.log('Piso atual: ',--this.pisoAtual);
        } else {
            console.log('Erro: já não pode descer mais');
        }
    }

    entrar(numPessoas) {
        if ( (numPessoas + this.lotacaoAtual) <= this.capacidade) {
            this.lotacaoAtual += numPessoas;
            console.log('Lotação atual:', this.lotacaoAtual);
        } else {
            console.log('Erro: excede a capacidade!');
        }
    }

    sair(numPessoas) {
        if ( (this.lotacaoAtual - numPessoas) >= 0) {
            this.lotacaoAtual -= numPessoas;
            console.log('Lotação atual:', this.lotacaoAtual);
        } else {
            console.log('Erro: não existem essas pessoas!');
        }
    }

}

const elevador1 = new Elevador(5,4);
console.log(elevador1);
elevador1.subir();
elevador1.subir();
elevador1.descer();
elevador1.descer();
elevador1.descer();
elevador1.entrar(3);
elevador1.entrar(2);
elevador1.sair(3);
elevador1.sair(2);

