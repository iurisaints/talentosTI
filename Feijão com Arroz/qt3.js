const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Insira o valor em reais: ", (reais) =>{
    const taxa = 0.3;
    const dolar = 4.9;
    const valorCambio = reais/dolar-taxa;
    console.log("O valor cambiado é: ", valorCambio);
    rl.close();
});