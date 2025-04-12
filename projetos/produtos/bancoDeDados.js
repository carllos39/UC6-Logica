export class BancoDeDados {
    // CREATE
    static salvar(produto){
        localStorage.setItem(produto.getId(), JSON.stringify(produto));
    }
    // READ
    buscarTodos(){
        
    }
    // UPDATE
    buscarPorId(){
        
    }

    //DELETE
    excluir(){
        
    }
}