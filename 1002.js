// https://www.urionlinejudge.com.br/judge/pt/problems/view/1002
var input = require('fs').readFileSync('stdin', 'utf8');

var pi = 3.14159;
var raio = parseFloat(input);
var area = pi * Math.pow(raio, 2);

console.log(`A=${area.toFixed(4)}`);
