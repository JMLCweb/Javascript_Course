
function testeScope() {
    var varForaDoIf = "fora do if";
    let letForaIf = "let fora if";
    let letDentro = "outra coisa";
    if (true) {
        var varDentro = "dentro";
        let letDentro = "dentro com let";
        console.log(varDentro);
        console.log(letDentro);
        console.log(letForaIf);
    }
    console.log(varDentro);
    console.log(letDentro);
    console.log(varForaDoIf);
    console.log(letForaIf);
}


function aposVariavel() {
    var mensagem;
    mensagem = "xpto";
    console.log(mensagem);
   
}


testeScope();
aposVariavel();