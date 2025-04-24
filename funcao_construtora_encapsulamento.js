let Carro = function (cor, modelo, velocidadeAtual, vMax) {
    
    var velocidadeMaxima = vMax;
    var quilometrosRodados = 0;
    
    this.cor = cor;
    this.modelo = modelo;
    this.velocidadeAtual = velocidadeAtual;

    this.acelerar = function(indice) {
        let velocidade = this.getVelocidadeAtual() + indice;
        if (velocidade > velocidadeMaxima) {
            velocidade = velocidadeMaxima;
        }
        this.setVelocidadeAtual(velocidade);

        setQuilometrosRodados(0.1);
        console.log(quilometrosRodados);
    }

    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual;
    }

    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual;
    }

    var setQuilometrosRodados = function(q) {
        quilometrosRodados += q;
    }
}

let carro = new Carro('Vermelho', 'Ferrari', 0, 340);
console.log(carro);
carro.acelerar(10);
console.log(carro.velocidadeAtual);
carro.acelerar(10);
console.log(carro.velocidadeAtual);
carro.acelerar(10);
console.log(carro.velocidadeAtual);
carro.acelerar(10);
console.log(carro.velocidadeAtual);
carro.acelerar(10);
console.log(carro.velocidadeAtual);