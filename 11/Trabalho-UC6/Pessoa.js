class Pessoa{
    #cpf;
    #nome;

    constructor(cpf,nome){
        this.#cpf = cpf;
        this.#nome = nome;
    }

    get cpf() { return this.#cpf; }
    get nome() { return this.#nome; }

}

class Cliente extends Pessoa{
 #id; 
 #veiculo;

 constructor(id,veiculo){
    this.#id = id;
    this.#veiculo = veiculo;
    super(this.cpf,nome);
 } 
 get id() { return this.#id; }
 get veiculo() { return this.#veiculo; } 

}
class Funcionario extends Pessoa{
  #matricula;
  #cargo; 

  constructor(matricula,cargo){
  
    this.#matricula = matricula;
    this.#cargo = cargo;
    super(this.cpf,nome);
 } 
 get matricula() { return this.#matricula; }
 get cargo() { return this.#cargo; } 
 
}