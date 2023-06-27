/*Escreva um programa que solicite ao usuário 
três valores e determine o maior e o menor valor 
entre eles. Exiba os resultados.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o 1º número: ", (num1) =>{
    rl.question("Digite o 2º número: ", (num2) => {
        rl.question("Digite o 3º número: ", (num3) => {
            const maior = Math.max(num1, num2, num3);
            const menor = Math.min(num1, num2, num3);

            console.log("O maior valor é: ", maior);
            console.log("O menor valor é: ", menor);

            rl.close();
        })
    })
})
