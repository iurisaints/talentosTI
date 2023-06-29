const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a primeira nota: ", (n1) =>{
    rl.question("Digite o peso da primeira nota", (p1)=>{
        rl.question("Digite a segunda nota: ", (n2) =>{
            rl.question("Digite o peso da segunda nota", (p2)=>{
                rl.question("Digite a terceira nota: ", (n3) =>{
                    rl.question("Digite o peso da terceira nota", (p3)=>{
                        const mediaPonderada = ((+n1 * +p1 + +n2 * +p2 + +n3 * +p3) / (+p1 + +p2 + +p3));
                        console.log("A média ponderada é: ", mediaPonderada.toFixed(2));
                        rl.close();
                    });
                });
            });
        });
    });
});