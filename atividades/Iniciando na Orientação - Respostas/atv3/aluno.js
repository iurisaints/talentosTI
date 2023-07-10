"use strict";
/*Crie uma classe chamada "Aluno" com as propriedades nome e notas
(array de números). Adicione um método chamado "calcularMedia" que calcula
e retorna a média das notas do aluno, serão no total três notas. Em seguida,
crie uma instância da classe, adicione as três notas e imprima a média.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
        this.notas = [];
    }
    Aluno.prototype.adicionarNota = function (nota) {
        this.notas.push(nota);
    };
    Aluno.prototype.calcularMedia = function () {
        var somaNotas = this.notas.reduce(function (soma, nota) { return soma + nota; }, 0);
        return somaNotas / this.notas.length;
    };
    return Aluno;
}());
exports.Aluno = Aluno;
