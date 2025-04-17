import { BancoDeDados } from "./bancoDeDados.js";

const ul = document.getElementById("listaProdutos");
const produtos = BancoDeDados.buscarTodos();

if(produtos.length === 0) {
    ul.innerHTML = '<li>Nenhum produto cadastrado!</li>'
} else {
    produtos.forEach(p => {
        // cria e informa o texto dos itens da lista
        const li = document.createElement("li");         
        li.textContent = p.toString();

        // cria um botão "editar"
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.onclick = () => window.location.href =`index.html?id=${p.id}`;
        btnEditar.style.backgroundColor="green";
        btnEditar.style.color="white";
        // cria um botão "excluir"
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.style.backgroundColor="red";
        btnExcluir.style.color="white";
        btnExcluir.onclick = () => {

            BancoDeDados.excluir(p.id);
            window.location.reload();
        };


        li.append(" ", btnEditar," ", btnExcluir);
        ul.appendChild(li);
    });
}