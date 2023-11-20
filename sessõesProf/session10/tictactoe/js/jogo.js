// 1º passo - clicar em qualquer cell e aparecer o x.png
// 1º - a - seleccionar todas as cells
// 1º - b - pendurar um evento on click em que chama uma função
// 1º - c - a função deve adicionar a tag img e carregar a imagem
// 2º passo - evitar colocar varios X na mesma celula
// DICA: node childs
// 3º passo - Alternar a imagem
// 4º passo - Indicar jogador a jogar
// 4º - a - selecionar div turn
// 4º - b - no innerhtml indicar: jogador: <img src=''>
// 4º - c - colocar o ponto b numa função
// 4º - d - chamar a função quando muda de jogador;
// 4º - e - chamar a função no inicio
// 5º - 

const possibilidades = [
    { p1: 0, p2: 1, p3: 2},
    { p1: 3, p2: 4, p3: 5},
    { p1: 6, p2: 7, p3: 8},
    { p1: 0, p2: 3, p3: 6},
    { p1: 1, p2: 4, p3: 7},
    { p1: 2, p2: 5, p3: 8},
    { p1: 0, p2: 4, p3: 8},
    { p1: 2, p2: 4, p3: 6}
];

var jogadorAtual = 'x.png';
var existeVitoria = false;

// meio tradicional
/* if (
    (cells[0].innerHTML == cells[1].innerHTML && cells[0].innerHTML == cells[0].innerHTML) ||
    (cells[3].innerHTML == cells[4].innerHTML && cells[3].innerHTML == cells[5].innerHTML) ||
    (cells[0].innerHTML == cells[1].innerHTML && cells[0].innerHTML == cells[0].innerHTML) ||
    (cells[3].innerHTML == cells[4].innerHTML && cells[3].innerHTML == cells[5].innerHTML) ||
    (cells[0].innerHTML == cells[1].innerHTML && cells[0].innerHTML == cells[0].innerHTML) ||
    (cells[3].innerHTML == cells[4].innerHTML && cells[3].innerHTML == cells[5].innerHTML) ||
    (cells[0].innerHTML == cells[1].innerHTML && cells[0].innerHTML == cells[0].innerHTML) ||
    (cells[3].innerHTML == cells[4].innerHTML && cells[3].innerHTML == cells[5].innerHTML) || */

const verificarVitoria = () => {
    for(let possibilidade of possibilidades) {
        if (cells[possibilidade.p1].childNodes.length > 0 && 
            cells[possibilidade.p1].innerHTML == cells[possibilidade.p2].innerHTML && 
            cells[possibilidade.p1].innerHTML == cells[possibilidade.p3].innerHTML) {
            result.innerHTML = `Vencedor: <img src='images/${jogadorAtual}' width=15px />`;
            return true;
        } 
    }
    return false;
}

const atualizarJogador = () => turn.innerHTML = `Jogador: <img src='images/${jogadorAtual}' width=15px />`;

const cells = document.querySelectorAll(".cell");
const turn = document.querySelector('.turn');
const result = document.querySelector('.result');
atualizarJogador();

cells.forEach( (cell) => {
    cell.onclick = e => {
        const cell = e.currentTarget;
        if (cell.childNodes.length == 0 && !existeVitoria) {
            const imagem = document.createElement('img');
            imagem.src = 'images/' + jogadorAtual;
            cell.appendChild(imagem);
            existeVitoria = verificarVitoria();
            jogadorAtual = jogadorAtual == 'x.png' ? 'o.png' : 'x.png';
            atualizarJogador();
        }
    };
})

const restart = document.querySelector('span');
restart.style.cursor = 'pointer';
restart.onclick = e => window.location.reload();
