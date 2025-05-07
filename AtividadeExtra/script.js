
function calcularValores(arr) {
    return function() {
        const soma = arr.reduce((acc, num) => acc + num, 0);
        const quadradoPrimeiro = Math.pow(arr[0], 2);
        const quadradoSegundo = Math.pow(arr[1], 2);
        return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadradoPrimeiro} e o quadrado do segundo é: ${quadradoSegundo}`;
    };
}

function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("resultado").innerText = "Por favor, insira números válidos.";
        return;
    }

    const resultado = calcularValores.apply(null, [[num1, num2, num3]]);
    document.getElementById("resultado").innerText = resultado();
}

function gerarPalavras() {
    const letras = [
        document.getElementById("letra1").value.toUpperCase(),
        document.getElementById("letra2").value.toUpperCase(),
        document.getElementById("letra3").value.toUpperCase(),
        document.getElementById("letra4").value.toUpperCase(),
        document.getElementById("letra5").value.toUpperCase()
    ];

    if (letras.some(letra => letra.length !== 1 || !/[A-Z]/.test(letra))) {
        document.getElementById("palavras").innerText = "Por favor, insira 5 letras válidas (A-Z).";
        return;
    }

    const palavras = [];

    function criarPalavra() {
        return letras.sort(() => Math.random() - 0.5).join('');
    }

    while (palavras.length < 10) {
        const novaPalavra = criarPalavra();
        if (!palavras.includes(novaPalavra)) {
            palavras.push(novaPalavra);
        }
    }

    document.getElementById("palavras").innerText = `Palavras geradas: ${palavras.join(", ")}`;
}
