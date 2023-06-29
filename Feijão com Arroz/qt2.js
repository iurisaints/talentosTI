const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*MENOR QUE 18,5	MAGREZA	0
ENTRE 18,5 E 24,9	NORMAL	0
ENTRE 25,0 E 29,9	SOBREPESO	I
ENTRE 30,0 E 39,9	OBESIDADE	II
MAIOR QUE 40,0	OBESIDADE GRAVE	III*/

rl.question("Olá! Insira seu nome: ", (nome) =>{
    console.log("Olá", nome, ", insira seu peso: ")
    rl.question("", (peso) =>{
        rl.question("Agora insira sua altura em cm: ", (altura) =>{
            const imc = peso / ((altura*altura)/100);
            console.log(imc);
            if(imc < 18.5){
                console.log("MAGREZA");
            } else if (imc >= 18 && imc < 24.9){
                console.log("NORMAL");
            } else if (imc >= 25 && imc < 29.9){
                console.log("SOBREPESO");
            } else if (imc >= 30 && imc < 39.9){
                console.log("OBESIDADE");
            } else if (imc >= 40){
                console.log("OBESIDADE GRAVE");
            }
            rl.close();
        });
    });
});