class Motorista {
    #nome

    constructor(nome) {
        this.#nome = nome;
    }

    get nome() { return this.#nome }
}

class Veiculo {
    #placa;
    #modelo;
    constructor(placa, modelo) {
        this.#placa = placa;
        this.#modelo = modelo;
    }

    get placa() { return this.#placa }
    get modelo() { return this.#modelo }
}

//const m1 = new Motorista("Edgar");
const v1=Veiculo("ABC-123","Vectra")

console.log(m1.nome);
console.log(v1.placa, v1.modelo);