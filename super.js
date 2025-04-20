class Pessoa {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    dormir() {

    }
}

class Homem extends Pessoa {
    constructor(nome, idade, peso, altura, vazec, legend) {
        super(nome, idade, peso, altura);
        this.vazec = vazec;
        this.legend = legend;
    }
}

class Mulher extends Pessoa {
    constructor(nome, idade, peso, altura, ppm, pn) {
        super(nome, idade, peso, altura);
        this.ppm = ppm;
        this.pn = pn;
    }
}