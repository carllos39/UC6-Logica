export class Veiculo{
    #id;
    #placa;
    #modelo;
    #cor;
    #tipo;
    #cliente_Id;
    
    constructor(placa,modelo,cor,tipo,cliente_id){
        this.#id= Veiculo.getProximoId();
        this.#placa = placa;
        this.#modelo = modelo;
        this.#cor = cor;
        this.#tipo =tipo;
        this.#cliente_Id = cliente_id;
    }
    get id(){return this.#id};
    get placa(){return this.#placa};
    get modelo(){return this.#modelo};
    get cor(){return this.#cor};
    get tipo(){return this.#tipo};
    get cliente_id(){return this.#cliente_Id};


    static getProximoId() {
        let maxId = 0;
    
        for (let i = 0; i < localStorage.length; i++) {
            const chave = localStorage.key(i);
    
            if (!isNaN(parseInt(chave))) {
             maxId = Math.max(maxId,parseInt(chave));
            }
    
        }
        return maxId + 1;

    

}
static fromJSON(json) {
    const veiculo = new Veiculo(json.placa, json.modelo, json.cor, json.cliente_id);
    veiculo.#id = json.id;
    return veiculo;
}
}




