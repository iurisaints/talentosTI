import { Pessoa } from "./pessoa";
import * as rl from "readline-sync";

const nome = rl.question("Digite seu nome: ");
const idade = rl.question("Digite sua idade: ")
const pessoa = new Pessoa(nome, idade);

pessoa.cumprimentar();