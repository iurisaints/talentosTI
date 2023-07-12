"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = exports.Produto = void 0;
var rl = require("readline-sync");
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    return Produto;
}());
exports.Produto = Produto;
var Loja = /** @class */ (function () {
    function Loja(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.produtos = [];
    }
    Loja.prototype.adicionarProduto = function () {
        var nome = rl.question("Digite o nome do produto: ");
        var preco = rl.question("Digite o valor do produto: ");
        var produto = new Produto(nome, preco);
        this.produtos.push(produto);
        console.log("O produto ", produto.nome, "foi adicionado à loja");
    };
    Loja.prototype.removerProduto = function () {
        var nome = rl.question("Digite o nome do produto a ser removido: ");
        var indice = this.produtos.findIndex(function (produto) { return produto.nome === nome; });
        if (indice !== -1) {
            var remover = this.produtos.splice(indice, 1)[0];
            console.log("O produto: ", remover.nome, "foi removido!");
        }
        else {
            console.log("O produto: ", nome, "não foi encontrado!");
        }
    };
    Loja.prototype.exibirProdutos = function () {
        console.log("Os produtos disponíveis na", this.nome, "são: ");
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            console.log("".concat(produto.nome, " - R$").concat(produto.preco));
        }
    };
    return Loja;
}());
exports.Loja = Loja;
