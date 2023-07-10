import { Livro } from "./livro";
import * as rl from "readline-sync";

const titulo = rl.question("Digite o título do livro: ");
const autor = rl.question("Digite o autor do livro: ");
const anoPublicacao = rl.questionInt("Digite o ano de publicação do livro: ");

const livro = new Livro(titulo, autor, anoPublicacao)

livro.obterDetalhes();