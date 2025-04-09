let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let soma = num1 + num2;
let subtracao = num1 - num2;
let produto = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;

alert(`Resultados:\nSoma: ${soma}\nSubtração: ${subtracao}\nProduto: ${produto}\nDivisão: ${divisao.toFixed(2)}\nResto: ${resto}`);
