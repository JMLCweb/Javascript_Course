var ultimos;
var primeiros;
var soma;
var resultado;
//percorrer todos os números com 4 algarismos
for(var numero = 1000; numero <= 9999; numero++) {
    //obter os ultimos 2 digitos
    ultimos = numero % 100;
    //obter os primeiros 2 digitos
    primeiros = Math.floor(numero / 100);
    //console.log(primeiros,ultimos);
    soma = primeiros + ultimos;
    resultado = soma * soma;
    if (numero == resultado) {
        console.log(numero);
    }
}
