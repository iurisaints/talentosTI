"use strict";
//circulo: pi*(raio * raio)
//retangulo: comprimento * largura
//triangulo: (base*altura)/2
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = exports.Triangulo = exports.Circulo = void 0;
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.raio = raio;
    }
    Circulo.prototype.calcularCirculo = function () {
        return Math.PI * (this.raio * this.raio);
    };
    return Circulo;
}());
exports.Circulo = Circulo;
var Triangulo = /** @class */ (function () {
    function Triangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Triangulo.prototype.calcularTriangulo = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var Retangulo = /** @class */ (function () {
    function Retangulo(comprimento, largura) {
        this.comprimento = comprimento;
        this.largura = largura;
    }
    Retangulo.prototype.calcularRetangulo = function () {
        return this.comprimento * this.largura;
    };
    return Retangulo;
}());
exports.Retangulo = Retangulo;
