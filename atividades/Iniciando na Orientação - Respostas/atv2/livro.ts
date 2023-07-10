/*Crie uma classe chamada "Livro" com as propriedades título, 
autor e anoPublicacao. Adicione um método chamado 
"obterDetalhes" que retorna uma string com todas as 
informações do livro. Em seguida, crie uma instância da 
classe e chame o método "obterDetalhes".*/

export class Livro{
    titulo: String;
    autor: String;
    anoPublicacao: number;

    constructor(titulo: String, autor: String, anoPublicacao: number){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    obterDetalhes(): void{
        console.log("Os detalhes do livro: \nTítulo", this.titulo, "\nAutor", this.autor, "\nAno de Publicação", this.anoPublicacao);
    }
}
