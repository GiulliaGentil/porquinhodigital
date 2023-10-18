var PorquinhoDigital = /** @class */ (function () {
    function PorquinhoDigital() {
        this.saldo = 0;
        this.objetivo = 0;
    }
    PorquinhoDigital.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Dep\u00F3sito de R$".concat(valor, " realizado com sucesso."));
        }
        else {
            console.log('O valor do depósito deve ser maior que zero.');
        }
    };
    PorquinhoDigital.prototype.retirar = function (valor) {
        if (valor > 0) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                console.log("Retirada de R$".concat(valor, " realizada com sucesso."));
            }
            else {
                console.log('Saldo insuficiente para a retirada.');
            }
        }
        else {
            console.log('O valor da retirada deve ser maior que zero.');
        }
    };
    PorquinhoDigital.prototype.definirObjetivo = function (valor) {
        if (valor >= 0) {
            this.objetivo = valor;
            console.log("Objetivo definido em R$".concat(valor, "."));
        }
        else {
            console.log('O objetivo deve ser um valor não negativo.');
        }
    };
    PorquinhoDigital.prototype.verificarProgresso = function () {
        var faltaParaObjetivo = this.objetivo - this.saldo;
        if (faltaParaObjetivo > 0) {
            console.log("Voc\u00EA ainda precisa economizar R$".concat(faltaParaObjetivo, " para atingir seu objetivo."));
        }
        else if (faltaParaObjetivo === 0) {
            console.log('Parabéns! Você atingiu seu objetivo.');
        }
        else {
            console.log("Voc\u00EA j\u00E1 ultrapassou seu objetivo por R$".concat(-faltaParaObjetivo, "."));
        }
    };
    return PorquinhoDigital;
}());
var porquinho = new PorquinhoDigital();
porquinho.depositar(100);
porquinho.definirObjetivo(500);
porquinho.depositar(200);
porquinho.verificarProgresso();
porquinho.retirar(50);
porquinho.verificarProgresso();
