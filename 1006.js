// https://www.urionlinejudge.com.br/judge/pt/problems/view/1006
var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var a = parseFloat(valores.shift());
var b = parseFloat(valores.shift());
var c = parseFloat(valores.shift());

var x = ((a * 2) + (b * 3) + (c * 5)) / 10;

console.log(`MEDIA = ${x.toFixed(1)}`);
