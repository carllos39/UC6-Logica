class Veiculo{
    #placa;
    #modelo;
    #cor;
    #tipo;
    #clienteId;
    
    constructor(placa,modelo,cor,tipo,cliente_id){
        this.#placa = placa;
        this.#modelo = modelo;
        this.#cor = cor;
        this.#tipo =tipo;
        this.#clienteId = cliente_id;
    }
    
    get placa(){return this.#placa};
    get modelo(){return this.#modelo};
    get cor(){return this.#cor};
    get tipo(){return this.#tipo};
    get cliente_id(){return this.#clienteId};

}

