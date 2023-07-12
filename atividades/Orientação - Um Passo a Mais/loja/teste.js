"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loja_1 = require("./loja");
var rl = require("readline-sync");
var loja = new loja_1.Loja("Loja Talentos", "Av. Unisinos, 900");
console.log("Olá! Seja bem vindo ao nosso sistema de controle de estoque!");
var opcao = 0;
while (opcao !== 4) {
    var resposta = rl.questionInt("Digite a opcao desejada:\n1 - Adicionar Produto\n2 - Remover Produto\n3 - Exibir Produto\n4 - Sair\nDigite aqui: ");
    opcao = resposta;
    switch (opcao) {
        case 1:
            loja.adicionarProduto();
            break;
        case 2:
            loja.removerProduto();
            break;
        case 3:
            loja.exibirProdutos();
            break;
        case 4:
            console.log("Saindo! Obrigado por utilizar nosso sistema.");
            break;
        default:
            console.log("Opcao invalida");
            break;
    }
}
