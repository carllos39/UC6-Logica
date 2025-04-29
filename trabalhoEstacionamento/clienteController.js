import { BancoDeDados } from "./bancoDeDados.js";
import { Cliente } from "./Pessoa.js"; 

document.getElementById("frmCliente").addEventListener("submit", (e) =>{
    e.preventDefault();
    const id = document.getElementById("id").value ;
    const veiculo = document.getElementById("veiculo").value ;
    const cpf = document.getElementById("cpf").value ;
    const nome = document.getElementById("nome").value ;
  
    
 let cliente = new Cliente(id,veiculo,cpf,nome);
 BancoDeDados.salvar(cliente);
});

