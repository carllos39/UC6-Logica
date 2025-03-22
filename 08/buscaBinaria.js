const promp= require("prompt-sync")();

let numeros = [ 5,10, 20 ,30, 50, 70, 85,90];
let clientes = ["Ana", "Carlos", "Gabriel", "Joao", "Maria"];
//Busca nativa  em javaScript
// console.log(numeros.indexOf(30));//Retorna 2
// console.log(numeros.indexOf(100));//Retorna -1


function buscaBinaria(array, valor) {
    let meio = Math.floor(array.length / 2);
    let inicio = 0
    let final = array.length - 1;

    while(inicio <= final){
        let meio = Math.floor((inicio + final) / 2);

        if (array[meio] === valor) {
            return meio;
        } else if (array[meio] < valor) {
            inicio = meio + 1;
        } else {
            final = meio - 1;
        }
    }
    return -1;
}

console.log(buscaBinaria(numeros, 100));
console.log(buscaBinaria(clientes, "Carlos"));

