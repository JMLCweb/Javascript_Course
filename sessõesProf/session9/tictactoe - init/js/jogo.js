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

var jogadorAtual = 'x.png';

const atualizarJogador = () => turn.innerHTML = `Jogador: <img src='images/${jogadorAtual}' width=15px />`;

const cells = document.querySelectorAll(".cell");
const turn = document.querySelector('.turn');
atualizarJogador();

cells.forEach( (cell) => {
    cell.onclick = e => {
        const cell = e.currentTarget;
        if (cell.childNodes.length == 0) {
            const imagem = document.createElement('img');
            imagem.src = 'images/' + jogadorAtual;
            cell.appendChild(imagem);
            jogadorAtual = jogadorAtual == 'x.png' ? 'o.png' : 'x.png';
            atualizarJogador();
        }
    };
})
