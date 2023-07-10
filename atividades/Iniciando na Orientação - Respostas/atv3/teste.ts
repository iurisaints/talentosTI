import { Aluno } from "./aluno";
import * as rl from "readline-sync";

const nome = rl.question("Digite o nome do aluno: ");
const novoAluno = new Aluno(nome);

const n1 = rl.questionFloat("Nota 1: ");
const n2 = rl.questionFloat("Nota 2: ");
const n3 = rl.questionFloat("Nota 3: ");

novoAluno.adicionarNota(n1);
novoAluno.adicionarNota(n2);
novoAluno.adicionarNota(n3);

console.log("a média do aluno é: ", novoAluno.calcularMedia());