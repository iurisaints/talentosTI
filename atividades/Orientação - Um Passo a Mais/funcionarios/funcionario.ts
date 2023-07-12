import * as rl from "readline-sync"

export class Funcionario{
    nome: string;
    cargo: string;

    constructor(nome: string, cargo: string){
        this.nome = nome;
        this.cargo = cargo;
    }
}

export class EmpresaDev{
    nome: string;
    endereco: string;
    funcionarios: Funcionario[];

    constructor(nome: string, endereco: string){
        this.nome = nome;
        this.endereco = endereco;
        this.funcionarios = [];
    }

    adicionarFuncionario(): void{
        const nome = rl.question("Digite o nome do funcionario: ");
        const cargo = rl.question("Digite o cargo do funcionario: ");
        const funcionario = new Funcionario(nome, cargo);
        this.funcionarios.push(funcionario);
        console.log("O funcionario ", funcionario.nome, "foi adicionado à empresa");
    }

    removerFuncionario(): void{
        const nome = rl.question("Digite o nome do funcionario a ser removido: ");
        let indice = this.funcionarios.findIndex((funcionario) => funcionario.nome === nome);
        if(indice !== -1){
            const remover = this.funcionarios.splice(indice, 1)[0];
            console.log("O funcionario: ", remover.nome, "foi removido!");
        } else {
            console.log("O funcionario: ", nome, "não foi encontrado!");
        }
    }

    exibirFuncionario(): void{
        console.log("Os funcionarios que trabalham aqui na", this.nome ,"são: ");
        for (let funcionario of this.funcionarios){
            console.log(`${funcionario.nome} - ${funcionario.cargo}`);
        }
    }
}

