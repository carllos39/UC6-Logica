//Adicionar as reservas

let reservas=[];

function adicionarReserva(){
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;

    if(nome==="" || data===""){
 alert("Preencha todos os campos");

 return;
    }

    let novaReserva={nome,data};

reservas.push(novaReserva);

document.getElementById("nome").value="";
document.getElementById("data").value="";
atualizarListaReserva();

}

//Remove Reservas
function removerReserva(index){
    reservas.splice(index,1);
    atualizarListaReserva();

}

function atualizarListaReserva(){
    let lista = document.getElementById("listareservas");
    lista.innerHTML= "";
reservas.forEach((reserva,index)=>{

 let li= document.createElement("li");
 li.innerHTML=`${reserva.nome}, ${reserva.data} <button class="remover" onclick='removerReserva(${index})'>X</button>`;
 lista.appendChild(li);
});
}