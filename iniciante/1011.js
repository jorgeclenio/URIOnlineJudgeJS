// https://www.urionlinejudge.com.br/judge/pt/problems/view/1011
var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var pi = 3.14159;
var raioEsfera = parseFloat(valores.shift().split(" "));
var resul = (4.0 / 3.0) * pi * Math.pow(raioEsfera, 3);

console.log(`VOLUME = ${resul.toFixed(3)}`);
