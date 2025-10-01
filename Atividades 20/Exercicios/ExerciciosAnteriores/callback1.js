const prompt = require('prompt-sync')(); //carrega o modulo de maneira assincrona

function saudacao(nome){
    console.log('oi ' + nome);
}

function entradaNome(callback){ //recebe outra funçao call.. usao o comand prompt e coloca o dado no
    let nome = prompt ('digite seu nome: ');
    callback(nome); 
}
entradaNome(saudacao);