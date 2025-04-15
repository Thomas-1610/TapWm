// Função para capturar a escolha do jogador
function obterEscolhaJogador() {
    const escolhas = ["pedra", "papel", "tesoura"];
    let escolha = prompt("Escolha pedra, papel ou tesoura:").toLowerCase();
    while (!escolhas.includes(escolha)) {
        escolha = prompt("Escolha inválida. Escolha pedra, papel ou tesoura:").toLowerCase();
    }
    return escolha;
}

function obterEscolhaComputador() {
    const escolhas = ["pedra", "papel", "tesoura"];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return escolhas[indiceAleatorio];
}

function determinarVencedor(jogador, computador) {
    if (jogador === computador) {
        return "Empate!";
    }
    if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "tesoura" && computador === "papel") ||
        (jogador === "papel" && computador === "pedra")
    ) {
        return "Você venceu!";
    }
    return "O computador venceu!";
}

function jogar(escolhaJogador) {
    const escolhaComputador = obterEscolhaComputador();

    const resultado = determinarVencedor(escolhaJogador, escolhaComputador);

    document.getElementById("resultado").innerHTML = `
        Você escolheu: ${escolhaJogador}<br>
        O computador escolheu: ${escolhaComputador}<br>
        ${resultado}
    `;
}
