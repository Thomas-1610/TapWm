
function encontrarMaior(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  
  function ordenarCrescente(num1, num2, num3) {
    const numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    return numeros;
  }
  
  function ehPalindromo(str) {
    const textoProcessado = str.toLowerCase().replace(/\s/g, '');
    const textoInvertido = textoProcessado.split('').reverse().join('');
    return textoProcessado === textoInvertido;
  }
  
  function ehSubconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2) {
      return "erro";
    }
    return palavra1.includes(palavra2);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const inputMaior1 = document.getElementById('maior1');
    const inputMaior2 = document.getElementById('maior2');
    const inputMaior3 = document.getElementById('maior3');
    const resultadoMaior = document.getElementById('resultadoMaior');
    const botaoMaior = document.getElementById('botaoMaior');
  
    if (botaoMaior) {
      botaoMaior.addEventListener('click', function() {
        const num1 = parseFloat(inputMaior1.value);
        const num2 = parseFloat(inputMaior2.value);
        const num3 = parseFloat(inputMaior3.value);
        if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
          resultadoMaior.textContent = `O maior número é: ${encontrarMaior(num1, num2, num3)}`;
        } else {
          resultadoMaior.textContent = 'Por favor, insira números válidos.';
        }
      });
    }
  
    const inputCrescente1 = document.getElementById('crescente1');
    const inputCrescente2 = document.getElementById('crescente2');
    const inputCrescente3 = document.getElementById('crescente3');
    const resultadoCrescente = document.getElementById('resultadoCrescente');
    const botaoCrescente = document.getElementById('botaoCrescente');
  
    if (botaoCrescente) {
      botaoCrescente.addEventListener('click', function() {
        const num1 = parseFloat(inputCrescente1.value);
        const num2 = parseFloat(inputCrescente2.value);
        const num3 = parseFloat(inputCrescente3.value);
        if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
          resultadoCrescente.textContent = `Em ordem crescente: ${ordenarCrescente(num1, num2, num3).join(', ')}`;
        } else {
          resultadoCrescente.textContent = 'Por favor, insira números válidos.';
        }
      });
    }
  
    const inputPalindromo = document.getElementById('palindromo');
    const resultadoPalindromo = document.getElementById('resultadoPalindromo');
    const botaoPalindromo = document.getElementById('botaoPalindromo');
  
    if (botaoPalindromo) {
      botaoPalindromo.addEventListener('click', function() {
        const texto = inputPalindromo.value;
        resultadoPalindromo.textContent = ehPalindromo(texto) ? 'É um palíndromo.' : 'Não é um palíndromo.';
      });
    }
  
    const inputSubconjunto1 = document.getElementById('subconjunto1');
    const inputSubconjunto2 = document.getElementById('subconjunto2');
    const resultadoSubconjunto = document.getElementById('resultadoSubconjunto');
    const botaoSubconjunto = document.getElementById('botaoSubconjunto');
  
    if (botaoSubconjunto) {
      botaoSubconjunto.addEventListener('click', function() {
        const palavra1 = inputSubconjunto1.value;
        const palavra2 = inputSubconjunto2.value;
        resultadoSubconjunto.textContent = ehSubconjunto(palavra1, palavra2);
      });
    }
  });