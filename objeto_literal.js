class Produto {
    constructor(descricao, preco) {
        this.descricao = descricao;
        this.preco = preco;
    }

    verDescricao() {
        console.log(`${this.descricao} por apenas ${this.preco}`);
    }
}

let produto = new Produto('Notebook', 2500);
produto.verDescricao();

let produtoLiteral = {
    descricao: 'Iphone',
    preco: 4500,
    verDescricao: function() {
        console.log(`${this.descricao} por apenas ${this.preco}`);
    }
}

produtoLiteral.verDescricao();