document.getElementById("frmCliente").addEventListener("submit", (e) =>{
    e.preventDefault();

    const veiculo = document.getElementById("veiculo").value ;
    const nome = document.getElementById("nome").value ;
    const cpf = document.getElementById("cpf").value ;

});

document.getElementById("frmFuncionario").addEventListener("submit", (e) =>{
    e.preventDefault();

    const matricula = document.getElementById("matricula").value ;
    const nome = document.getElementById("nome").value ;
    const cpf = document.getElementById("cpf").value ;
    const cargo = document.getElementById("cargo").value ;

});



document.getElementById("frmVeiculo").addEventListener("submit", (e) =>{
    e.preventDefault();

    const placa = document.getElementById("placa").value ;
    const modelo = document.getElementById("modelo").value ;
    const cor = document.getElementById("cor").value ;
    const tipo = document.getElementById("tipo").value ;

});