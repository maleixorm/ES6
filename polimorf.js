class Animal {
    constructor(cor, tamanho) {
        this.cor = cor;
        this.tamanho = tamanho;
    }

    dormir() {

    }
}

class Passaro extends Animal  {
    constructor(cor, tamanho, bico) {
        super(cor, tamanho);
        this.bico = bico;
    }

    voar() {
        console.log('Voando');
    }
}

class Papagaio extends Passaro {
    constructor(cor, tamanho, bico, sabeFalar) {
        super(cor, tamanho, bico);
        this.sabeFalar = sabeFalar;
    }
    
    falar() {
        console.log('Falar');
    }
}

class Avestruz extends Passaro {
    constructor(cor, tamanho, bico) {
        super(cor, tamanho, bico);
    }
    
    enterrarCabeca() {
        console.log('Enterrar cabeça');
    }

    voar() {
        console.log('Não sabe voar');
    }
}

let avestruz = new Avestruz('azul', '150cm', 'médio');
console.log(avestruz);
avestruz.enterrarCabeca();
avestruz.voar();