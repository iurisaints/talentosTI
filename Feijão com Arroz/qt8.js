const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Insira o valor do produto: ", (produto) =>{
    rl.question("Insira o desconto do produto", (desconto) => {
        const desconto = produto * (desconto / 100);
        const valor = produto - desconto;
        console.log("Valor final com desconto é: ", valor);
    })
})