alert('Bem vindo ao jogo do número secreto!');
dificuldade = parseInt(prompt('Para começar, digite um número de 1 a 3 para definir a dificuldade: \n1: Fácil \n2: Médio \n3: Difícil)'));
let numeroAleatorio = definirNumeroAleatorio(dificuldade);

function definirNumeroAleatorio(dificuldade){
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

        default:
            alert('Digite um número válido (entre 1 e 3)')
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

do {
    numeroChute = parseInt(prompt('Digite um número'));
    if (numeroAleatorio > numeroChute) {
        alert('O número aleatório é maior que o número inserido')
    } else if (numeroAleatorio < numeroChute) {
        alert('O número aleatório é menor que o número inserido')
    } else {
        break
    }
} while (numeroChute !== numeroAleatorio);