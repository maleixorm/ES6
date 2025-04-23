let Carro = function (cor, modelo, velocidadeAtual, velocidadeMaxima) {
    this.cor = cor;
    this.modelo = modelo;
    this.velocidadeAtual = velocidadeAtual;
    this.velocidadeMaxima = velocidadeMaxima;

    this.acelerar = function(indice) {
        let velocidade = this.getVelocidadeAtual() + indice;
        this.setVelocidadeAtual(velocidade);
    }

    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual;
    }

    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual;
    }
}

let carro = new Carro('Amarelo', 'Camaro', 0, 260);
console.log(carro);

carro.acelerar(100);
console.log(carro);