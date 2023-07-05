"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
//Crie uma classe "Carro" com propriedades como marca, 
//modelo, ano e métodos para ligar, desligar e acelerar o carro.
var Carro = /** @class */ (function () {
    function Carro(id, marca, modelo, ano) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Carro.prototype.ligar = function () {
        if (!this.ligado) {
            this.ligado = true;
            console.log("O carro foi ligado");
        }
        else {
            console.log("O carro já está ligado");
        }
    };
    Carro.prototype.desligar = function () {
        if (this.ligado) {
            this.ligado = false;
            console.log("O carro foi desligado");
        }
        else {
            console.log("O carro já está desligado");
        }
    };
    Carro.prototype.acelerar = function (velocidade) {
        if (this.ligado) {
            this.velocidade += velocidade;
            console.log("O carro acelerou para: ", velocidade, "km/h");
        }
        else {
            console.log("Não é possível acelerar pois o carro está desligado");
        }
    };
    return Carro;
}());
exports.Carro = Carro;
