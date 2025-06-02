// ===== EXERCÍCIO 1: Retângulo =====
function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
  
    this.calcularArea = function () {
      return this.base * this.altura;
    };
  }
  
  function calcularAreaRetangulo() {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
  
    if (isNaN(base) || isNaN(altura)) {
      alert("Por favor, insira valores válidos para base e altura.");
      return;
    }
  
    const ret = new Retangulo(base, altura);
    document.getElementById("resultadoRetangulo").innerText = `Área: ${ret.calcularArea()} m²`;
  
  }
  
  
  // ===== EXERCÍCIO 2: Conta e Herança =====
  class Conta {
    constructor() {
      this._nomeCorrentista = "";
      this._banco = "";
      this._numeroConta = "";
      this._saldo = 0;
    }
  
    get nomeCorrentista() {
      return this._nomeCorrentista;
    }
    set nomeCorrentista(valor) {
      this._nomeCorrentista = valor;
    }
  
    get banco() {
      return this._banco;
    }
    set banco(valor) {
      this._banco = valor;
    }
  
    get numeroConta() {
      return this._numeroConta;
    }
    set numeroConta(valor) {
      this._numeroConta = valor;
    }
  
    get saldo() {
      return this._saldo;
    }
    set saldo(valor) {
      this._saldo = valor;
    }
  }
  
  class Corrente extends Conta {
    constructor() {
      super();
      this._saldoEspecial = 0;
    }
  
    get saldoEspecial() {
      return this._saldoEspecial;
    }
  
    set saldoEspecial(valor) {
      this._saldoEspecial = valor;
    }
  }
  
  class Poupanca extends Conta {
    constructor() {
      super();
      this._juros = 0;
      this._dataVencimento = "";
    }
  
    get juros() {
      return this._juros;
    }
  
    set juros(valor) {
      this._juros = valor;
    }
  
    get dataVencimento() {
      return this._dataVencimento;
    }
  
    set dataVencimento(valor) {
      this._dataVencimento = valor;
    }
  }
  
  function criarContaCorrente() {
    const cc = new Corrente();
    cc.nomeCorrentista = document.getElementById("ccNome").value;
    cc.banco = document.getElementById("ccBanco").value;
    cc.numeroConta = document.getElementById("ccNumero").value;
    cc.saldo = parseFloat(document.getElementById("ccSaldo").value);
    cc.saldoEspecial = parseFloat(document.getElementById("ccEspecial").value);
  
    const texto = `
      Nome: ${cc.nomeCorrentista}<br>
      Banco: ${cc.banco}<br>
      Conta: ${cc.numeroConta}<br>
      Saldo: R$ ${cc.saldo.toFixed(2)}<br>
      Saldo Especial: R$ ${cc.saldoEspecial.toFixed(2)}
    `;
  
    document.getElementById("resultadoCorrente").innerHTML = texto;
  }
  
  function criarContaPoupanca() {
    const cp = new Poupanca();
    cp.nomeCorrentista = document.getElementById("cpNome").value;
    cp.banco = document.getElementById("cpBanco").value;
    cp.numeroConta = document.getElementById("cpNumero").value;
    cp.saldo = parseFloat(document.getElementById("cpSaldo").value);
    cp.juros = parseFloat(document.getElementById("cpJuros").value);
    cp.dataVencimento = document.getElementById("cpVencimento").value;
  
    const texto = `
      Nome: ${cp.nomeCorrentista}<br>
      Banco: ${cp.banco}<br>
      Conta: ${cp.numeroConta}<br>
      Saldo: R$ ${cp.saldo.toFixed(2)}<br>
      Juros: ${cp.juros}%<br>
      Vencimento: ${cp.dataVencimento}
    `;
  
    document.getElementById("resultadoPoupanca").innerHTML = texto;
  }
  