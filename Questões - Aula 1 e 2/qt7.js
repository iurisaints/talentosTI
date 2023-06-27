const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a temperatura em Celsius: ', (celsius) =>{
    const fahrenheit = (celsius * 9/5) + 32;
    console.log('A temperatura em Fahrenheit é: ', fahrenheit, '°F');
    rl.close();
});