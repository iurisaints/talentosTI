const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a lista de compras - separe os itens por vírgula: ", (lista) =>{
    const itens = lista.split(',');
    console.log("Lista de compras:");
    for (let i = 0; i < itens.length; i++){
        console.log(itens[i].trim());
    }
    rl.close();
});