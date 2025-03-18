let elementoVaga = document.querySelectorAll(".vaga");
let infoElemento = document.querySelector(".resumo div");
let vagas =[null,null,null,null,null,null,null,null,null,null];
let totalHoras=[0,0,0,0,0,0,0,0,0,0];
let resultadoTexto=document.getElementById("resultado");
let totalCarros=0;

elementoVaga.forEach((vaga,i)=>{
    vaga.addEventListener("click", () => gerenciarVagas(i));

});

function gerenciarVagas(numeroDaVaga){
    let horas =parseInt(prompt("Informe a horas (Somente números inteiros):"));

    if(isNaN(horas) || horas < 0 || horas > 23 ){
     alert("Horas inválida!");
     return;
    }
     if(vagas[numeroDaVaga]===null){
  vagas[numeroDaVaga] = horas;
  elementoVaga[numeroDaVaga].classList.add("ocupado");
     }else{
  if(horas < vagas[numeroDaVaga]){
alert("Horas de saida não pode ser menor que a entrada!");
return;
  }
  totalHoras[numeroDaVaga]+= vagas[numeroDaVaga];
  vagas[numeroDaVaga]=null;
  totalCarros++;
  elementoVaga[numeroDaVaga].classList.remove("ocupado");
     }


    }

    function atualizarInfo(){
        for(let i=0;i < 10;i++){
            infoElemento[i].innerText=`Vaga ${i +1}:${totalHoras[i]} h`;

        }
    }
    function totalizar(){
        let totalHorasDia=0;

        for(let i=0;i < 10;i++){
            totalHorasDia += totalHoras[i];
        }
        let faturamento = totalHorasDia * 12;
        resultadoTexto.innerText = `Total horas :${totalHorasDia}, Carros atendidos :${totalCarros},Faturamento :R$${faturamento},00`;
    
    }


