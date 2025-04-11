class Funcionario{
    #nome;
    #matricula;
    #anoAdmissao;
    #endereco;
    
    
    constructor(nome,matricula,anoAdmissao,endereco){
        this.#nome  =nome;
        this.#matricula=matricula;
        this.#anoAdmissao=anoAdmissao;
        this.#endereco=endereco;
    

    }

    getNome(){
        return this.#nome;
    }
    
    getMatricula(){
        return this.#matricula;
    }
    
    getAdmissao(){
        return this.#anoAdmissao;
    }
    
    getEndereco(){
        return this.#endereco;
    }
    receberSalario(salario){
   
   return `Funcionario ${this.getNome()}recebeu salario R$${salario}`;
   
   }
    }
     
    verificarTempoDeEmpresa(anoAtual){
       
        return`Tempo de empresa do  ${this.nomeCompleto} é: ${anoAtual - this.anoAdmissao}`;
    }

    baterPonto(){
   return`Ponto registrado para ${this.nomeCompleto}`;
    }


class Gerente extends Funcionario {
    autorizacaoDespesas;
    
    constructor(autorizacaoDespesas) {
      this.autorizacaoDespesas= autorizacaoDespesas;  
      super(this.nomeCompleto,this.numeroMatricula,this.anoAdmissao,this.endereco,this.salario);
      let comissao = 0.20 * salario;
      let salarioTotal = this.salario + comissao;
    }
     
}

class OperadorDeCaixa extends Funcionario{
    fechamentoDeCaixa;

    constructor(fechamentoDeCaixa){
        this.fechamentoDeCaixa = fechamentoDeCaixa;
        super(this.nomeCompleto,this.numeroMatricula,this.anoAdmissao,this.endereco,this.salario);

    }
}
class Estagiario extends Funcionario{
    registrarAtividade;
    salarioFixo;

    constructor(registrarAtividade){
        this.registrarAtividade = registrarAtividade;
        this.salarioFixo = salarioFixo;
        super(this.nomeCompleto,this.numeroMatricula,this.anoAdmissao,this.endereco);

    }
}
let gerente= new Funcionario("Manoel Silva",1212,2000,"Rua Catão",3400);
console.log(gerente);