const hora = 10;

var saudacao;

if ( hora <= 11) {
    saudacao = "Bom dia!";
}
else {
    if ( hora < 20) {
        saudacao = "Boa tarde!";
    }
    else {
        saudacao = "Boa noite!";
    }
}
    
console.log(saudacao);