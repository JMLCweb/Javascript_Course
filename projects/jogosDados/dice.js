const randomNumber = () => Math.floor(Math.random() * (6 - 1 + 1))+1;

const player1 = randomNumber();
const player2 = randomNumber();
 
document.querySelector('.img1').setAttribute("src","images/dice"+player1+".png");
document.querySelector('.img2').setAttribute("src","images/dice"+player2+".png");

document.querySelector('h1').innerText = player1 > player2 ? "🚩 Player 1 wins!" :
player2 > player1 ? "Player 2 wins! 🚩" : "Draw!";
