import { BancoDeDados } from "./bancoDeDados.js";
const ul= document.getElementById("listaCliente");
const clientes=BancoDeDados.buscarTodos();

clientes.forEach(c => {
  const li = document.createElement("li");
  li.textContent = c.toString();
  
  const btnEditar= document.createElement("button");
  btnEditar.textContent("Editar");
  btnEditar.onclick = ()=> window.location.href="formularioCliente.html?id=c.id";

  const btnExcluir= document.createElement("button");
  btnExcluir.textContent("Editar");
  btnExcluir.onclick = ()=>{
    BancoDeDados.excluir(c.id);
    window.location.reload();
  };
  li.append(btnEditar,btnExcluir);
  ul.appendChild(li);
});