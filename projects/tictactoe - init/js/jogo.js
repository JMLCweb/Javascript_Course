var jogadorAtual = "x.png";
const cells = document.querySelectorAll(".cell");
const turn = document.querySelector(".turn");
const result = document.querySelector(".result");

var existeVitoria = false;

var quadro = [];

// Jogador da ronda atual
const atualizarJogador = () =>
  (turn.innerHTML = `Jogador: <img src='images/${jogadorAtual}' width=15px />`);
atualizarJogador();

// Função para introduzir os X e O em cada celula
cells.forEach((cell) => {
  cell.onclick = jogar;
  function jogar(e) {
    const cell = e.currentTarget;
    if (cell.childNodes.length == 0 && !existeVitoria) {
      const imagem = document.createElement("img");
      imagem.src = "images/" + jogadorAtual;
      cell.appendChild(imagem);
      existeVitoria = verificarVitoria();
      if (existeVitoria) {
        result.innerHTML = `Vencedor: <img src='images/${jogadorAtual}' width=15px />`;
        atualizarJogador();
      }
      jogadorAtual = jogadorAtual == "x.png" ? "o.png" : "x.png";
    }
  }
});

// Verifivar se existe vencedor
const possibilidades = [
  { p1: 0, p2: 1, p3: 2 },
  { p1: 3, p2: 4, p3: 5 },
  { p1: 6, p2: 7, p3: 8 },
  { p1: 0, p2: 3, p3: 6 },
  { p1: 1, p2: 4, p3: 7 },
  { p1: 2, p2: 5, p3: 8 },
  { p1: 0, p2: 4, p3: 8 },
  { p1: 2, p2: 4, p3: 6 },
];

const verificarVitoria = () => {
  for (let possibilidade of possibilidades) {
    if (
      cells[possibilidade.p1].childNodes.length > 0 &&
      cells[possibilidade.p1].innerHTML == cells[possibilidade.p2].innerHTML &&
      cells[possibilidade.p1].innerHTML == cells[possibilidade.p3].innerHTML
    ) {
      return true;
    }
  }
  return false;
};

const restart = document.querySelector("span");
restart.style.cursor = "pointer";
restart.onclick = (e) => window.location.reload();
