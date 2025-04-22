import { Cliente } from "./Pessoa";


export class BancoDeDados {
    // CREATE
    static salvar(cliente) {
    

        localStorage.setItem(cliente.id, JSON.stringify({
            veiculo:cliente.veiculo,
            cpf:cliente.cpf,
            nome:cliente.nome
        }));
        console.log(cliente);
    }
    
 }
