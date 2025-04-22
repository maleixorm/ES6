let assinatura = {
    idCliente: 1000,
    descricao: 'Acesso a Internet - 600mb',
    status() {
        console.log('Ativo');
    }
}

console.log(assinatura.descricao);

let y = assinatura;

console.log(y.descricao);

y.descricao = 'Acesso a Internet - 1200mb';

console.log(assinatura.descricao);
console.log(y.descricao);