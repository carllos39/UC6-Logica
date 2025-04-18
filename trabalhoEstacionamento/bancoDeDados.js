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

 buscarTodos() {
    // cria um array de produtos vazio
    const cliente = [];

    // percorre o localStorage buscando todos os dados (JSON)
    for(let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if(!isNaN(parseInt(chave))) {
            const dados = JSON.parse(localStorage.getItem(chave));
            produtos.push(Cliente.fromJSON(dados)); 
        }
    }

    // retornar esse array ordenado
    return cliente.sort((a, b) => a.id - b.id);
}

