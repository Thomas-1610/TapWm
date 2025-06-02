function criarFuncionarioLiteral() {
    const matricula = document.getElementById("matricula1").value;
    const nome = document.getElementById("nome1").value;
    const funcao = document.getElementById("funcao1").value;
  
    if (!matricula || !nome || !funcao) {
      alert("Preencha todos os campos.");
      return;
    }
  
    const funcionario1 = {
      matricula: matricula,
      nome: nome,
      funcao: funcao
    };
  
    document.getElementById("resultadoLiteral").innerHTML = `
      <strong>Funcionário criado (Objeto Literal):</strong><br>
      Matrícula: ${funcionario1.matricula}<br>
      Nome: ${funcionario1.nome}<br>
      Função: ${funcionario1.funcao}
    `;
  }
  
  function Funcionario(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
  }
  
  function criarFuncionarioConstrutor() {
    const matricula = document.getElementById("matricula2").value;
    const nome = document.getElementById("nome2").value;
    const funcao = document.getElementById("funcao2").value;
  
    if (!matricula || !nome || !funcao) {
      alert("Preencha todos os campos.");
      return;
    }
  
    const funcionario2 = new Funcionario(matricula, nome, funcao);
  
    document.getElementById("resultadoConstrutor").innerHTML = `
      <strong>Funcionário criado (Função Construtora):</strong><br>
      Matrícula: ${funcionario2.matricula}<br>
      Nome: ${funcionario2.nome}<br>
      Função: ${funcionario2.funcao}
    `;
  }
  
  class FuncionarioClasse {
    constructor(matricula, nome, funcao) {
      this.matricula = matricula;
      this.nome = nome;
      this.funcao = funcao;
    }
  }
  
  function criarFuncionarioClasse() {
    const matricula = document.getElementById("matricula3").value;
    const nome = document.getElementById("nome3").value;
    const funcao = document.getElementById("funcao3").value;
  
    if (!matricula || !nome || !funcao) {
      alert("Preencha todos os campos.");
      return;
    }
  
    const funcionario3 = new FuncionarioClasse(matricula, nome, funcao);
  
    document.getElementById("resultadoClasse").innerHTML = `
      <strong>Funcionário criado (Classe ES6):</strong><br>
      Matrícula: ${funcionario3.matricula}<br>
      Nome: ${funcionario3.nome}<br>
      Função: ${funcionario3.funcao}
    `;
  }
  