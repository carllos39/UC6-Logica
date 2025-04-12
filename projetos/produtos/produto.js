export class Produto {
    static proximoId = 1;
    id;
    nome;
    preco;
    peso;
    validade;

    constructor(nome, preco, peso, validade) {
        this.id = Produto.proximoId++;
        this.nome = nome;
        this.preco = preco;
        this.peso = peso;
        this.validade = validade;
    }

    toString() {
        let mensagem = `Produto ${this.nome} ID: ${this.id}`;
        if(this.estaProximoDaValidade()) {
            mensagem += " [ATENÇÃO: Próximo do Vencimento!]"
        }
        return mensagem;
    }

    getId() {
        return this.id;
    }

    estaProximoDaValidade() {
        const hoje = new Date();
        const diff = (this.validade - hoje) / (1000 * 60 * 60 * 24);
        return diff < 10;
    }
}


// let p1 = new Produto("Boné", 20, 1, Date.now())
// let p2 = new Produto("Ps5", 4500, 1, Date.now())

// console.log(p2.toString());



