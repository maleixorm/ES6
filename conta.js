class ContaBancaria {
    // agencia
    // numeroConta
    // saldo
    // limite
    constructor(agencia, numeroConta, saldo, limite) {
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.limite = limite;
    }

    depositar(deposito) {
        this.saldo += deposito;
    }

    sacar(saque) {
        this.saldo -= saque;
    }

    consultarSaldo() {
        return this.saldo;
    }
}