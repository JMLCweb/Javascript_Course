// Random in range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

const dado1 = randomRange(1, 6);
const dado2 = randomRange(1, 6);

console.log(dado1);
console.log(dado2);

const imagem1 = document.querySelector(".img1");
imagem1.src = `images/dice${dado1}.png`;
const imagem2 = document.querySelector(".img2");
imagem2.src = `images/dice${dado2}.png`;
console.log(imagem1);

const vencedor =
  dado1 > dado2 ? "Player 1 Wins" : dado1 == dado2 ? "Draw" : "Player 2 Wins";

const resultado = document.querySelector("h1");
resultado.innerHTML = vencedor;
resultado.insertAdjacentHTML;
