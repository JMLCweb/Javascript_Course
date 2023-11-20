// alert('tudo ok');
// 1º gerar um número aleatório de 1 a 6
// 2º gerar outro
// 3º selecionar o elemento com a class img1
// 4º modificar o atributo src para a imagem xpto.png
// 5º adaptar o nome da imagem com o dado
// 6º selecionar o elemento h1 e indicar o vencedor

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const dado1 = getRandomIntInclusive(1,6);
const dado2 = getRandomIntInclusive(1,6);

const imagem1 = document.querySelector('.img1');
imagem1.src = `images/dice${dado1}.png`;

const imagem2 = document.querySelector('.img2');
imagem2.src = `images/dice${dado2}.png`;

const vencedor = dado1 > dado2 ? 
    "Player 1 Wins" : dado1 == dado2 ? 
    "Draw" : "Player 2 Wins";

const h1 = document.querySelector('h1');
h1.innerHTML = vencedor;

