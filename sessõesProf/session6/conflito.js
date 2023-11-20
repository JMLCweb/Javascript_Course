const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();

const novaFalar = pessoa.falar.bind(pessoa);

console.log(typeof novaFalar);

novaFalar();

