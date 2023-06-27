/*Desenvolva um programa que peça ao usuário um número 
e verifique se esse número é positivo, negativo ou zero. 
Exiba uma mensagem correspondente.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número a ser verificado: ", (num) =>{
    num = Number(num);
    if (num === 0){
        console.log("O número digitado é zero!");
    } else if (num < 0){
        console.log("O número digitado é negativo!");
    } else if (num > 0) {
        console.log("O número digitado é positivo!");
    } else {
        console.log("O número digitado é inválido!");
    }
    rl.close();
})