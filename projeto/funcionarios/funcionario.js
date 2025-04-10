class Funcionario{
    nomeCompleto;
    numeroMatricula;
    anoAdmissao;
    endereco;
    salario;
    
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
    console.log(`Funcionario não recebeu salario`);
   }
    }
     ano=2025;
    verificarTempoDeEmpresa(ano){
       
        console.log(`Tempo de empresa do  ${this.nomeCompleto} é: ${ano - this.anoAdmissao}`)
    }

    baterPonto(){
console.log(`Ponto registrado para ${this.nomeCompleto}`);
    }
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