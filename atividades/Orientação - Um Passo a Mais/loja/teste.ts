import { Loja, Produto } from "./loja";
import * as rl from "readline-sync";

const loja = new Loja("Loja Talentos", "Av. Unisinos, 900");
console.log("Olá! Seja bem vindo ao nosso sistema de controle de estoque!");
let opcao: number = 0;

while (opcao !== 4){
    const resposta = rl.questionInt("Digite a opcao desejada:\n1 - Adicionar Produto\n2 - Remover Produto\n3 - Exibir Produto\n4 - Sair\nDigite aqui: ");

    opcao = resposta;

    switch(opcao){
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