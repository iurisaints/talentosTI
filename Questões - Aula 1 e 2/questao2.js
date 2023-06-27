const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o 1o número: ', (n1) => {
    rl.question('Digite o 2o número: ', (n2) =>{
        const soma = Number(n1) + Number(n2);
        console.log("A soma dos números é: ", soma);
        rl.close();
    }); 
});
