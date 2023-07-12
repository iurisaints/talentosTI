import * as rl from "readline-sync"

export class Produto{
    nome: string;
    preco: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }
}

export class Loja{
    nome: string;
    endereco: string;
    produtos: Produto[];

    constructor(nome: string, endereco: string){
        this.nome = nome;
        this.endereco = endereco;
        this.produtos = [];
    }

    adicionarProduto(): void{
        const nome = rl.question("Digite o nome do produto: ");
        const preco = rl.question("Digite o valor do produto: ");
        const produto = new Produto(nome, preco);
        this.produtos.push(produto);
        console.log("O produto ", produto.nome, "foi adicionado à loja");
    }

    removerProduto(): void{
        const nome = rl.question("Digite o nome do produto a ser removido: ");
        let indice = this.produtos.findIndex((produto) => produto.nome === nome);
        if(indice !== -1){
            const remover = this.produtos.splice(indice, 1)[0];
            console.log("O produto: ", remover.nome, "foi removido!");
        } else {
            console.log("O produto: ", nome, "não foi encontrado!");
        }
    }

    exibirProdutos(): void{
        console.log("Os produtos disponíveis na", this.nome ,"são: ");
        for (let produto of this.produtos){
            console.log(`${produto.nome} - R$${produto.preco}`);
        }
    }
}

