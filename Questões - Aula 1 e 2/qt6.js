const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (n1) =>{
    rl.question("Digite outro número: ", (n2) => {
        if(n1 === n2){
            console.log("Os números são iguais");
        } else if(n1 > n2){
            console.log("O 1º número é maior, o valor é: ", n1);
        } else {
            console.log("O 2º número é maior, o valor é: ", n2);
        }
    rl.close();
    })
})