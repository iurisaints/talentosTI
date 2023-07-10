/*Crie uma classe chamada "Aluno" com as propriedades nome e notas 
(array de números). Adicione um método chamado "calcularMedia" que calcula 
e retorna a média das notas do aluno, serão no total três notas. Em seguida,
crie uma instância da classe, adicione as três notas e imprima a média.*/

export class Aluno{
    nome: String;
    notas: number[];

    constructor(nome: string){
        this.nome = nome;
        this.notas = [];
    }

    adicionarNota(nota: number): void{
        this.notas.push(nota);
    }

    calcularMedia(): number{
        const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        return somaNotas / this.notas.length;
    }
}