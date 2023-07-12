import { Cachorro, Gato, Passaro } from "./animais";
import * as rl from "readline-sync"

let menu: Boolean = true;

while(menu === true){
    const opcao = rl.questionInt("Escolha sua opção:\n1 - Cachorro\n2 - Gato\n3 - Passaro\n4 - Sair\nDigite aqui: ");
    switch(opcao){
        case 1:
            const nomeDog = rl.question("Qual o nome do seu cachorro?: ")
            const novoDog = new Cachorro(nomeDog);
            novoDog.latir();
            break;
        case 2:
            const nomeCat = rl.question("Qual o nome do seu gato?: ")
            const novoCat = new Gato(nomeCat);
            novoCat.miar();
            break;
        case 3:
            const nomeBird = rl.question("Qual o nome do seu passaro?: ")
            const novoBird = new Passaro(nomeBird);
            novoBird.piar();
            break;
        case 4:
            console.log("Saindo... :(");
            menu = false;
            break;
    }
}