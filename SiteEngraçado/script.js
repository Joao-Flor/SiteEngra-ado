let estagio = 1;
const imagemTreino = document.getElementById('imagem-treino');
const botaoLevantar = document.getElementById('botao-levantar');
const botaoProximo = document.getElementById('botao-proximo');
const somPeido1 = document.getElementById('som-peido1');
const somPeido2 = document.getElementById('som-peido2');

function levantarPeso() {
    if (estagio === 1) {
        somPeido1.play();
        imagemTreino.src = 'imagens/Treino1Final.jpg';
        botaoLevantar.style.display = 'none';
        botaoProximo.style.display = 'inline-block';
    } else if (estagio === 2) {
        somPeido2.currentTime = 0; // Garante que o som começa do início
        somPeido2.play();
        imagemTreino.src = 'imagens/Peso2Final.jpg';
        botaoLevantar.style.display = 'none';
    }
}

function proximoPeso() {
    estagio = 2;
    imagemTreino.src = 'imagens/Peso2Inicial.jpg';
    botaoProximo.style.display = 'none';
    botaoLevantar.style.display = 'inline-block';
}
