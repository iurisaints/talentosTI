"use strict";
/*Crie uma hierarquia de classes para modelar animais, com uma classe base "Animal"
e classes derivadas como "Cachorro", "Gato" e "Pássaro" com métodos e propriedades
específicas para cada tipo de animal, por exemplo: quando chamar o cachorro, print
"Au au au". Obs.: utilize o extends nas classes específicas, link para exemplo*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passaro = exports.Gato = exports.Cachorro = exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    return Animal;
}());
exports.Animal = Animal;
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.latir = function () {
        console.log("Olá! Eu sou ", this.nome, ", au, au, au!");
    };
    return Cachorro;
}(Animal));
exports.Cachorro = Cachorro;
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.miar = function () {
        console.log("Olá! Eu sou ", this.nome, " miau, miau.");
    };
    return Gato;
}(Animal));
exports.Gato = Gato;
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Passaro.prototype.piar = function () {
        console.log("Olá! Eu sou ", this.nome, " piu, piu.");
    };
    return Passaro;
}(Animal));
exports.Passaro = Passaro;
