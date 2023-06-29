const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const login = "admin";
const senha = "admin";

rl.question("Digite o login: ", (loginUser) =>{
    rl.question("Digite a senha: ", (senhaUser) =>{
        if(loginUser === login && senhaUser === senha){
            console.log("Login bem sucedido!");
        } else {
            console.log("Login inválido!");
        }
        rl.close();
    });
});