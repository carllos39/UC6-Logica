import { BancoDeDados } from "./bancoDeDados.js";

const ul= document.getElementById("listaCliente");
const clientes = BancoDeDados.buscarTodos();
if(clientes.length === 0){
ul.innerHTML="<li>Nenhum cliente cadastrado!</li>";
}else{
clientes.forEach(c=> {
  const li = document.createElement("li");
  li.textContent = c.toString();
  
  const btnEditar= document.createElement("button");
  btnEditar.textContent="Editar";
  btnEditar.onclick = () => window.location.href=`formularioCliente.html?id=${c.id}`;

  const btnExcluir= document.createElement("button");
  btnExcluir.textContent="Excluir";
  btnExcluir.onclick = ()=>{
    BancoDeDados.excluir(c.id);
    window.location.reload();
  };
  li.append(btnEditar,btnExcluir);
  ul.appendChild(li);
});
}