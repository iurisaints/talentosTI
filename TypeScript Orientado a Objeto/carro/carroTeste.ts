import { Carro } from "./carro";
import * as rl from 'readline-sync';

const carros: Carro[] = [];
let menu: boolean = true;
let id: number = 0;

while(menu === true) {
    
    console.log("Menu: \n 1 - Construir Carro \n 2 - Verificar Carro \n 3 - Ligar o carro \n 4 - Acelerar o carro \n 5 - Desligar o carro \n 0 - Sair");

    const opcao = rl.question("Escolha a opção pelo número: ");

    switch(opcao){
        case "1":
            const marca = rl.question("Qual a marca do carro?: ");
            const modelo = rl.question("Qual o modelo do carro?: ");
            const ano = rl.questionInt("Qual o ano do carro?: ");
            id++; 
            const carroNovo = new Carro(id, marca, modelo, ano);
            carros.push(carroNovo);
            console.log("Novo carro inserido no sistema: \n", carroNovo);
            break;
        case "2":
            const carroConsulta = rl.questionInt("Qual o id do carro?: ");
            const carroConsultado = carros.find(carro => carro.id === carroConsulta);
            if(carroConsultado){
                console.log("O resultado da busca: ", carroConsultado);
            } else {
                console.log("Carro inexistente ou inválido");
            }
            break;
        case "3":
            const carroConsultaLigar = rl.questionInt("Qual o id do carro?: ");
            const carroConsultadoLigar = carros.find(carro => carro.id === carroConsultaLigar);
            if(carroConsultadoLigar){
                carroConsultadoLigar.ligar();
            } else {
                console.log("Carro inexistente ou inválido");
            }
            break;
        case "4":
            const carroConsultaAcelerar = rl.questionInt("Qual o id do carro?: ");
            const carroConsultadoAcelerar = carros.find(carro => carro.id === carroConsultaAcelerar);
            if(carroConsultadoAcelerar){
                const velocidade = rl.questionInt("Qual a velocidade do carro em km/h?: ")
                carroConsultadoAcelerar.acelerar(velocidade);
            } else {
                console.log("Carro inexistente ou inválido");
            }
            break;
        case "5":
            const carroConsultaDesligar = rl.questionInt("Qual o id do carro?: ");
            const carroConsultadoDesligar = carros.find(carro => carro.id === carroConsultaDesligar);
            if(carroConsultadoDesligar){
                carroConsultadoDesligar.desligar();
            } else {
                console.log("Carro inexistente ou inválido");
            }
            break;
        case "0":
            console.log("Saindo...");
            menu = false;
            break;
    }
}