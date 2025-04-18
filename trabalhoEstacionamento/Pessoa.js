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

class Cliente extends Pessoa {
  #id;
  #veiculo;

  constructor( veiculo, nome, cpf) {
    super(cpf, nome);
    this.#id = Cliente.getProximoId(id);
    this.#veiculo = veiculo;

  }
  get id() { return this.#id; }
  get veiculo() { return this.#veiculo; }



  static fromJSON(json) {
    const cliente = new Cliente(json.veiculo, json.nome, json.cpf);
    cliente.#id = json.id;
    return cliente;
  }

}
class Funcionario extends Pessoa {
  #id;
  #matricula;
  #cargo;

  constructor(matricula, nome, cpf, cargo) {
    super(cpf, nome);
    this.#id=Funcionario.getProximoId(id);
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








// let funcionario = new Funcionario(23445566, "manobrista");
// let cli = new Cliente(1, "vw", "jorge", 12321);
// console.log(cli.id);

// funcionario.nome;
// funcionario.cpf;
// funcionario.id;
// funcionario.matricula(1445);
// funcionario.cargo("manobrista");
// console.log(funcionario.nome, funcionario.matricula);