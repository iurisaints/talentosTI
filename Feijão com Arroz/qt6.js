const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a lista de produtos, separando por vírgula: ", (lista) => {
    const itens = lista.split(',');
    for (let i = 0; i < itens.length; i++){
        console.log(itens[i].trim());
    }
    rl.close();
});