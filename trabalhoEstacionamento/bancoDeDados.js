import { Cliente } from "./Pessoa.js";


export class BancoDeDados {
    // CREATE
    static salvar(cliente) {
    

        localStorage.setItem(cliente.id, JSON.stringify({
            id:cliente.id,
            veiculo:cliente.veiculo,
            cpf:cliente.cpf,
            nome:cliente.nome
        }));
        console.log(cliente);
    }
    static buscarTodos(){
        const clientes=[];
     
         for(let i= 0; i < localStorage.length;i++){
             const chave = localStorage.key(i);
             if(!isNaN(parseInt(chave))){
                 const dados = JSON.parse( localStorage.getItem(chave));
                 clientes.push(Cliente.fromJSON(dados));
             }
         }
         return clientes.sort((a,b)=>a.id - b.id);

    
 }
 static excluir(id){
    localStorage.removeItem(id);
 }

}