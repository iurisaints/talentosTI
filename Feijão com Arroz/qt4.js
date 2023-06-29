const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const estoque = 10;

rl.question("Digite a quantidade desejada: ", (qtdDesejada) => {
    if (qtdDesejada <= estoque){
        console.log("Disponível");
    } else if (qtdDesejada > estoque){
        console.log("Indisponível");
    } else {
        console.log("Valor inválido");
    }
    rl.close();
});