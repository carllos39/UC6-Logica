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
  super(cpf,nome);
    this.#id = id;
    this.#veiculo = veiculo;
  
 } 
 get id() { return this.#id; }
 get veiculo() { return this.#veiculo; } 

}
class Funcionario extends Pessoa{
  #matricula;
  #cargo; 

  constructor(matricula,cargo){
    super(cpf,nome);
    this.#matricula = matricula;
    this.#cargo = cargo;
    
 } 
 get matricula() { return this.#matricula; }
 get cargo() { return this.#cargo; } 
 
}
let funcionario=new Pessoa();
funcionario.nome("Jorge Arruda");
funcionario.cpf(14847812301);
funcionario.id(1);
funcionario.matricula(1445);
funcionario.cargo("manobrista");
console.log(funcionario);