export class Pessoa {
  #cpf;
  #nome;

  constructor(cpf, nome) {
    this.#cpf = cpf;
    this.#nome = nome;
  }

  get cpf() { return this.#cpf; }
  get nome() { return this.#nome; }

}

export class Cliente extends Pessoa {
  #id;
  #veiculo;

  constructor( veiculo, cpf,nome) {
    super(cpf, nome);
    this.#id = Cliente.getProximoId();
    this.#veiculo = veiculo;

  }
  get id() { return this.#id; }
  get veiculo() { return this.#veiculo; }
  
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
    const cliente = new Cliente(jon.id,json.veiculo, json.cpf, json.nome);
    cliente.#id = json.id;
    return cliente;
  }

}
export class Funcionario extends Pessoa {
  #id;
  #matricula;
  #cargo;

  constructor(matricula, nome, cpf, cargo) {
    super(cpf, nome);
    this.#id=Funcionario.getProximoId();
    this.#matricula = matricula;
    this.#cargo = cargo;

  }
  get matricula() { return this.#matricula; }
  get cargo() { return this.#cargo; }

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
    const funcionario = new Funcionario(json.matricula, json.cargo, json.nome, json.cpf);
    funcionario.#id = json.id;
    return funcionario;
  }
}






