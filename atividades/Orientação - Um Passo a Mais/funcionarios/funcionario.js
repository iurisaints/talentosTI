"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaDev = exports.Funcionario = void 0;
var rl = require("readline-sync");
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }
    return Funcionario;
}());
exports.Funcionario = Funcionario;
var EmpresaDev = /** @class */ (function () {
    function EmpresaDev(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.funcionarios = [];
    }
    EmpresaDev.prototype.adicionarFuncionario = function () {
        var nome = rl.question("Digite o nome do funcionario: ");
        var cargo = rl.question("Digite o cargo do funcionario: ");
        var funcionario = new Funcionario(nome, cargo);
        this.funcionarios.push(funcionario);
        console.log("O funcionario ", funcionario.nome, "foi adicionado à empresa");
    };
    EmpresaDev.prototype.removerFuncionario = function () {
        var nome = rl.question("Digite o nome do funcionario a ser removido: ");
        var indice = this.funcionarios.findIndex(function (funcionario) { return funcionario.nome === nome; });
        if (indice !== -1) {
            var remover = this.funcionarios.splice(indice, 1)[0];
            console.log("O funcionario: ", remover.nome, "foi removido!");
        }
        else {
            console.log("O funcionario: ", nome, "não foi encontrado!");
        }
    };
    EmpresaDev.prototype.exibirFuncionario = function () {
        console.log("Os funcionarios que trabalham aqui na", this.nome, "são: ");
        for (var _i = 0, _a = this.funcionarios; _i < _a.length; _i++) {
            var funcionario = _a[_i];
            console.log("".concat(funcionario.nome, " - ").concat(funcionario.cargo));
        }
    };
    return EmpresaDev;
}());
exports.EmpresaDev = EmpresaDev;
