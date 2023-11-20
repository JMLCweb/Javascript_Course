class Elevador {
  constructor(totalAndares, capacidade) {
    this.andar = 0;
    this.totalAndares = totalAndares;
    this.lotacaoAtual = 0;
    this.capacidade = capacidade;
  }
  subir() {
    if (this.totalAndares > this.andar) {
      this.andar++;
      console.log("Piso atual: ", this.andar);
    } else {
      console.log("Erro, já não pode subir mais");
    }
  }
  descer() {
    if (this.andar > 0) {
      this.andar--;
      console.log("Piso atual: ", this.andar);
    } else {
      console.log("Erro, já não pode descer mais");
    }
  }
  entrada(numPessoas) {
    if (this.capacidade >= this.lotacaoAtual + numPessoas) {
      this.lotacaoAtual += numPessoas;
      console.log("A lotação atual é: ", this.lotacaoAtual);
    } else {
      console.log("Erro, excesso de peso!");
    }
  }
  saida(numPessoas) {
    if (this.lotacaoAtual - numPessoas >= 0) {
      this.lotacaoAtual -= numPessoas;
      console.log("A lotação atual é: ", this.lotacaoAtual);
    } else {
      console.log("Erro, Não existem tantas pessoas no elvador!");
    }
  }
}
const elevador1 = new Elevador(5, 4);
elevador1.subir();
elevador1.subir();
elevador1.descer();
elevador1.descer();
elevador1.descer();
elevador1.entrada(2);
elevador1.saida(2);
elevador1.saida(2);
