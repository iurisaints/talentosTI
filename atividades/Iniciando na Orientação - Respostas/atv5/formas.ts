//circulo: pi*(raio * raio)
//retangulo: comprimento * largura
//triangulo: (base*altura)/2

export class Circulo{
    raio: number;

    constructor(raio: number){
        this.raio = raio;
    }

    calcularCirculo(): number{
        return Math.PI * (this.raio*this.raio);
    }
}

export class Triangulo{
    base: number;
    altura: number;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
    }

    calcularTriangulo(): number{
        return (this.base * this.altura) / 2;
    }

}

export class Retangulo{
    comprimento: number;
    largura: number;

    constructor(comprimento: number, largura: number){
        this.comprimento = comprimento;
        this.largura = largura;
    }

    calcularRetangulo(): number{
        return this.comprimento * this.largura;
    }
}