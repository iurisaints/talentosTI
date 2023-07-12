"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animais_1 = require("./animais");
var rl = require("readline-sync");
var menu = true;
while (menu === true) {
    var opcao = rl.questionInt("Escolha sua opção:\n1 - Cachorro\n2 - Gato\n3 - Passaro\n4 - Sair\nDigite aqui: ");
    switch (opcao) {
        case 1:
            var nomeDog = rl.question("Qual o nome do seu cachorro?: ");
            var novoDog = new animais_1.Cachorro(nomeDog);
            novoDog.latir();
            break;
        case 2:
            var nomeCat = rl.question("Qual o nome do seu gato?: ");
            var novoCat = new animais_1.Gato(nomeCat);
            novoCat.miar();
            break;
        case 3:
            var nomeBird = rl.question("Qual o nome do seu passaro?: ");
            var novoBird = new animais_1.Passaro(nomeBird);
            novoBird.piar();
            break;
        case 4:
            console.log("Saindo... :(");
            menu = false;
            break;
    }
}
