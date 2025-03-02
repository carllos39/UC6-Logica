let elementosVagas=document.querySelectorAll(".vaga");
let infoElementos=document.querySelector(".resumo div");
let vagas=[null,null,null,null,null,null,null,null,null,null];
let totalHoras=[0,0,0,0,0,0,0,0,0,0];
let resultadoTexto = document.getElementById("resultado");

elementosVagas.forEach(( vaga , i) => {
    vaga.addEventListener("click", ()=> gerenciarVaga(i));

    });



    function gerenciarVaga(numeroDaVaga){
        let hora = parseInt(prompt("Informe a hora(somente números inteiros) :"));

        if(isNaN(hora) || hora < 0 || hora > 23){
       alert("Hora Invalída");
       return;
        }

        if(vagas[numeroDaVaga] === null){
     vagas[numeroDaVaga] = hora;
     elementosVagas[numeroDaVaga].classList.add("ocupado");
        }else{
            if( hora < vagas[numeroDaVaga]){
                alert("Hora de saida não pode ser menor que a de entrada!");
                return;
            }
            totalHoras[numeroDaVaga] += hora- vagas[numeroDaVaga];
            vagas[numeroDaVaga]= null;
            elementosVagas[numeroDaVaga].classList.remove("ocuoado");
        }
    }

    function atualizarInfo(){
        for(let i=0;i < 10;i++){
  infoElementos[i].innerText = `Vaga ${ i + 1}:${totalHoras[i]} h`;
        }
    }
