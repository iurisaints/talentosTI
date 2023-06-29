const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite sua idade: ", (idade) => {
    if(idade < 18){
        console.log("Entrada proibida.");
    } else if (idade >= 18){
        console.log("Entrada autorizada.");
    } else {
        console.log("Idade inválida.");
    }
    rl.close();
});