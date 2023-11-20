// Gerar 2 números aleatórios
const numAleatorio = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

const numPlayer1 = numAleatorio(1,6);
const numPlayer2 = numAleatorio(1,6);

console.log(numPlayer1,numPlayer2);

//Para jogador, mostrar a imagem respetiva - se saiu o nº 3, por exemplo,
// devo mostar a imagem dice3.png
// Selecionar elemento img e modificar o atributo src (getAttribute / setAttribute)
//selecionar elemento com a class img1
//modificar o atributo src com qualquer

document.querySelector('.img1').setAttribute('src','images/dice'+ numPlayer1+'.png');
document.querySelector('.img2').setAttribute('src','images/dice'+ numPlayer2+'.png');

//No elemento h1 escrever o vencedor ou empate
if (numPlayer1 > numPlayer2)
    document.querySelector('h1').innerText = "Player 1 Wins";
else
    if (numPlayer2 > numPlayer1)
        document.querySelector('h1').innerText = "Player 2 Wins";
    else
        document.querySelector('h1').innerText = "Draw";


