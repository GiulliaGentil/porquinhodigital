class PorquinhoDigital {
    saldo: number;
    objetivo: number;
  
    constructor() {
      this.saldo = 0;
      this.objetivo = 0;
    }
  
    depositar(valor: number): void {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso.`);
      } else {
        console.log('O valor do depósito deve ser maior que zero.');
      }
    }
  
    retirar(valor: number): void {
      if (valor > 0) {
        if (valor <= this.saldo) {
          this.saldo -= valor;
          console.log(`Retirada de R$${valor} realizada com sucesso.`);
        } else {
          console.log('Saldo insuficiente para a retirada.');
        }
      } else {
        console.log('O valor da retirada deve ser maior que zero.');
      }
    }
  
    definirObjetivo(valor: number): void {
      if (valor >= 0) {
        this.objetivo = valor;
        console.log(`Objetivo definido em R$${valor}.`);
      } else {
        console.log('O objetivo deve ser um valor não negativo.');
      }
    }
  
    verificarProgresso(): void {
      const faltaParaObjetivo = this.objetivo - this.saldo;
      if (faltaParaObjetivo > 0) {
        console.log(`Você ainda precisa economizar R$${faltaParaObjetivo} para atingir seu objetivo.`);
      } else if (faltaParaObjetivo === 0) {
        console.log('Parabéns! Você atingiu seu objetivo.');
      } else {
        console.log(`Você já ultrapassou seu objetivo por R$${-faltaParaObjetivo}.`);
      }
    }
  }
  
  const porquinho = new PorquinhoDigital();
  porquinho.depositar(100);
  porquinho.definirObjetivo(500);
  porquinho.depositar(200);
  porquinho.verificarProgresso();
  porquinho.retirar(50);
  porquinho.verificarProgresso();
  