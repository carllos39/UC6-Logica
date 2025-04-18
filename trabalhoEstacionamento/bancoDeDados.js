import { Pessoa } from "./Pessoa";
import { Veiculo } from "./Veiculo.js";

export class BancoDeDados {
    // CREATE
    static salvar(cliente) {
        localStorage.setItem(cliente.id, JSON.stringify({
            veiculo:cliente.veiculo,
            nome:cliente.nome,
            cpf:cliente.cpf,
        }));
    }
}

static buscarTodos() {
    // cria um array de produtos vazio
    const clientes = [];

    // percorre o localStorage buscando todos os dados (JSON)
    for(let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if(!isNaN(parseInt(chave))) {
            const dados = JSON.parse(localStorage.getItem(chave));
            clientes.push(Cliente.fromJSON(dados)); 
        }
    }

    // retornar esse array ordenado
    return cliente.sort((a, b) => a.id - b.id);
}

