/*Crie um programa que solicite ao 
usuário uma quantidade de horas e calcule o 
equivalente em minutos e segundos. Exiba os resultados.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a quantidade de horas a ser convertida: ", (horas) =>{
    const minutos = horas * 60;
    const segundos = horas * 3600;

    console.log("Em minutos: ", minutos, "e em segundos: ", segundos);

    rl.close();
});