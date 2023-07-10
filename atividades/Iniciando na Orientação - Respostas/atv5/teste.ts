import { Circulo, Triangulo, Retangulo } from "./formas";
import * as rl from "readline-sync";

const raio = rl.question("Insira o valor do raio do círculo: ");
const circulo = new Circulo(raio);
console.log("A área do círculo é: ", circulo.calcularCirculo());

const base = rl.question("Insira o valor da base do Triangulo: ");
const altura = rl.question("Insira o valor da altura do Triangulo: ");
const triangulo = new Triangulo(base, altura);
console.log("A área do triangulo é: ", triangulo.calcularTriangulo());

const comprimento = rl.question("Insira o valor do comprimento do Retangulo: ");
const largura = rl.question("Insira o valor da largura do Retangulo: ");
const retangulo = new Retangulo(comprimento, largura);
console.log("A área do retangulo é: ", retangulo.calcularRetangulo());

