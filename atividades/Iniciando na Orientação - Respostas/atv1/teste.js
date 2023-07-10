"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var rl = require("readline-sync");
var nome = rl.question("Digite seu nome: ");
var idade = rl.question("Digite sua idade: ");
var pessoa = new pessoa_1.Pessoa(nome, idade);
pessoa.cumprimentar();
