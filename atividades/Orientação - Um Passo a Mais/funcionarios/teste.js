"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var funcionario_1 = require("./funcionario");
var rl = require("readline-sync");
var empresa = new funcionario_1.EmpresaDev("TalentosDev", "Av. Unisinos, 900");
console.log("Olá! Seja bem vindo ao nosso sistema de controle de funcionarios!");
var opcao = 0;
while (opcao !== 4) {
    var resposta = rl.questionInt("Digite a opcao desejada:\n1 - Cadastrar Funcionario\n2 - Demitir Funcionario\n3 - Exibir Quadro de Funcionarios\n4 - Sair\nDigite aqui: ");
    opcao = resposta;
    switch (opcao) {
        case 1:
            empresa.adicionarFuncionario();
            break;
        case 2:
            empresa.removerFuncionario();
            break;
        case 3:
            empresa.exibirFuncionario();
            break;
        case 4:
            console.log("Saindo! Obrigado por utilizar nosso sistema.");
            break;
        default:
            console.log("Opcao invalida");
            break;
    }
}
