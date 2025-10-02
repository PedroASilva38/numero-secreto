const divAplicacao = document.getElementById('info');
const divRetorno = document.getElementById('retorno');
let numeroSecreto;
let chute;
let min, max;
let tentativa = 1;

function escolherDificuldade() {
    return /*html*/`
        <div class="container__texto">
            <h1>Número</h1>
            <h1 class="container__texto-azul">Secreto</h1>
            <h2>Escolha a dificuldade</h2>
            <button class="container__botao" onclick="definirNumeroSecreto(1)">1: Fácil</button>
            <button class="container__botao" onclick="definirNumeroSecreto(2)">2: Médio</button>
            <button class="container__botao"
            onclick="definirNumeroSecreto(3)">3: Difícil</button>
        </div>
    `;
}

function escolherNumero(min, max) {
    return /*html*/`
        <div class="container__texto">
            <h1>Número</h1>
            <h1 class="container__texto-azul">Secreto</h1>
            <h2>Digite um número entre ${min} e ${max}</h2>
            <input type="number" class="container__input" id="chute">
            <div class="container__botoes">
                <button onclick="chutarNumero()" class="container__botao">Chutar</button>
                <button onclick="reiniciarJogo()" class="container__botao">Novo Jogo</button>
            </div>
        </div>
    `;
}

function ganhouOJogo() { 
    return /*html*/`
        <img src="./img/trophy.png" alt="ícone de um troféu" />
        <div class="container__texto">
            <h1>Você <span class="container__texto-azul">acertou!</span></h1>
            <h2>Você descobriu o número secreto!</h2>
            <button onclick="reiniciarJogo()" class="container__botao">Novo Jogo</button>
        </div>
    `;
}

function definirNumeroSecreto(dificuldade){
    switch (dificuldade){
        case 1:
            min = 1;
            max = 100;
            break;

        case 2:
            min = 1;
            max = 1000;
            break;

        case 3:
            min = -1000;
            max = 1000;
            break;
    }
    numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
    divAplicacao.innerHTML = escolherNumero(min, max);
}

function chutarNumero(){
    chute = parseInt(document.getElementById('chute').value);

    const chuteMenor = /*html*/`
        <p>O número secreto é maior do que ${chute}</p>
    `;

    const chuteMaior = /*html*/`
        <p>O número secreto é menor do que ${chute}</p>
    `;
    
    const tentativas = /*html*/ `
        <p>Tentativas: ${tentativa}</p>
    `;

    if (chute == numeroSecreto) {
        divAplicacao.innerHTML = ganhouOJogo() + tentativas;
        divRetorno.style.display = 'none'
    } else if (chute > numeroSecreto) {
        divRetorno.innerHTML = chuteMaior + tentativas;
    } else if (chute < numeroSecreto) {
        divRetorno.innerHTML = chuteMenor + tentativas;
    }
    tentativa++;

}

function reiniciarJogo(){
    divRetorno.innerHTML = '';
    tentativa = 1;
    divAplicacao.innerHTML = escolherDificuldade();
}
reiniciarJogo();