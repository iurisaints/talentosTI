/*Crie uma hierarquia de classes para modelar animais, com uma classe base "Animal" 
e classes derivadas como "Cachorro", "Gato" e "Pássaro" com métodos e propriedades 
específicas para cada tipo de animal, por exemplo: quando chamar o cachorro, print 
"Au au au". Obs.: utilize o extends nas classes específicas, link para exemplo*/

export class Animal{
    nome: String;

    constructor(nome: string){
        this.nome = nome;
    }

}

export class Cachorro extends Animal{
    latir(){
        console.log("Olá! Eu sou ", this.nome, ", au, au, au!");
    }
}

export class Gato extends Animal{
    miar(){
        console.log("Olá! Eu sou ", this.nome, " miau, miau.");
    }
}

export class Passaro extends Animal{
    piar(){
        console.log("Olá! Eu sou ", this.nome, " piu, piu.");
    }
}