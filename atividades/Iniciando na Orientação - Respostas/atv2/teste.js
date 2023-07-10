"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var livro_1 = require("./livro");
var rl = require("readline-sync");
var titulo = rl.question("Digite o título do livro: ");
var autor = rl.question("Digite o autor do livro: ");
var anoPublicacao = rl.questionInt("Digite o ano de publicação do livro: ");
var livro = new livro_1.Livro(titulo, autor, anoPublicacao);
livro.obterDetalhes();
