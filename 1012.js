// https://www.urionlinejudge.com.br/judge/pt/problems/view/1012
var input = require('fs').readFileSync('stdin', 'utf8');

var [a, b, c] = input.split(" ").map(item => parseFloat(item));
var pi = 3.14159;

var areaTriangulo = (a * c) / 2.0;
var areaCirculo = pi * Math.pow(c, 2.0);
var areaTrapezio = ((a + b) * c) / 2.0;
var areaQuadrado = Math.pow(b, 2.0);
var areaRetangulo = a * b;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
