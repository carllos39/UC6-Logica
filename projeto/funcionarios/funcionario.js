class Funcionario{
    nomeCompleto;
    numeroMatricula;
    anoAdmissao;
    endereco;
    salario=2000;
    
    constructor(nomeCompleto,numeroMatricula,anoAdmissao,endereco,salario){
        this.nomeCompleto=nomeCompleto;
        this.numeroMatricula=numeroMatricula;
        this.anoAdmissao=anoAdmissao;
        this.endereco=endereco;
        this.salario=salario;

    }
    receberSalario(salario){
   if(this.salario === salario){
   console.log(`Funcionario recebeu ${salario}`);
   }else{
    console.log(`Funcionario não recebeu salarioclear`);
   }
    }
    verificarTempoDeEmpresa(){
        console.log(`Tempo de empresa do  ${this.nomeCompleto} é: ${ano - this.anoAdmissao}`)
    }

    baterPonto(pontoRegistrado){

    }
}

class Gerente extends Funcionario {
    autorizacaoDespesas;
    constructor(parameters) {
        
    }
}

class OperadorDeCaixa extends Funcionario{
    fechamentoDeCaixa;
    constructor(){

    }
}
class Estagiario extends Funcionario{
    registrarAtividade;
}