let Carro = function (cor, modelo, velocidadeAtual, velocidadeMaxima) {
    this.cor = cor;
    this.modelo = modelo;
    this.velocidadeAtual = velocidadeAtual;
    this.velocidadeMaxima = velocidadeMaxima;

    this.acelerar = function(indice) {
        let velocidade = this.getVelocidadeAtual() + indice;
        if (velocidade > this.velocidadeMaxima) {
            velocidade = this.velocidadeMaxima;
        }
        this.setVelocidadeAtual(velocidade);
    }

    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual;
    }

    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual;
    }
}