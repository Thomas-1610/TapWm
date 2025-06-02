function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';
    let grauObesidade = '';

    if (imc < 18.5) {
        classificacao = 'Magreza';
        grauObesidade = '0';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Normal';
        grauObesidade = '0';
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
        grauObesidade = 'I';
    } else if (imc >= 30.0 && imc <= 39.9) {
        classificacao = 'Obesidade';
        grauObesidade = 'II';
    } else if (imc >= 40.0) {
        classificacao = 'Obesidade Grave';
        grauObesidade = 'III';
    }

    const resultado = `Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}. Grau de Obesidade: ${grauObesidade}.`;
    document.getElementById('resultado').innerText = resultado;
}
