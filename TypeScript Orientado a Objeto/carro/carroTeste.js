"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var rl = require("readline-sync");
var carros = [];
var menu = true;
var id = 0;
var _loop_1 = function () {
    console.log("Menu: \n 1 - Construir Carro \n 2 - Verificar Carro \n 3 - Ligar o carro \n 4 - Acelerar o carro \n 5 - Desligar o carro \n 0 - Sair");
    var opcao = rl.question("Escolha a opção pelo número: ");
    switch (opcao) {
        case "1":
            var marca = rl.question("Qual a marca do carro?: ");
            var modelo = rl.question("Qual o modelo do carro?: ");
            var ano = rl.questionInt("Qual o ano do carro?: ");
            id++;
            var carroNovo = new carro_1.Carro(id, marca, modelo, ano);
            carros.push(carroNovo);
            console.log("Novo carro inserido no sistema: \n", carroNovo);
            break;
        case "2":
            var carroConsulta_1 = rl.questionInt("Qual o id do carro?: ");
            var carroConsultado = carros.find(function (carro) { return carro.id === carroConsulta_1; });
            if (carroConsultado) {
                console.log("O resultado da busca: ", carroConsultado);
            }
            else {
                console.log("Carro inexistente ou inválido");
            }
            break;
        case "3":
            var carroConsultaLigar_1 = rl.questionInt("Qual o id do carro?: ");
            var carroConsultadoLigar = carros.find(function (carro) { return carro.id === carroConsultaLigar_1; });
            if (carroConsultadoLigar) {
                carroConsultadoLigar.ligar();
            }
            else {
                console.log("Carro inexistente ou inválido");
            }
            break;
        case "4":
            var carroConsultaAcelerar_1 = rl.questionInt("Qual o id do carro?: ");
            var carroConsultadoAcelerar = carros.find(function (carro) { return carro.id === carroConsultaAcelerar_1; });
            if (carroConsultadoAcelerar) {
                var velocidade = rl.questionInt("Qual a velocidade do carro em km/h?: ");
                carroConsultadoAcelerar.acelerar(velocidade);
            }
            else {
                console.log("Carro inexistente ou inválido");
            }
            break;
        case "5":
            var carroConsultaDesligar_1 = rl.questionInt("Qual o id do carro?: ");
            var carroConsultadoDesligar = carros.find(function (carro) { return carro.id === carroConsultaDesligar_1; });
            if (carroConsultadoDesligar) {
                carroConsultadoDesligar.desligar();
            }
            else {
                console.log("Carro inexistente ou inválido");
            }
            break;
        case "0":
            console.log("Saindo...");
            menu = false;
            break;
    }
};
while (menu === true) {
    _loop_1();
}
