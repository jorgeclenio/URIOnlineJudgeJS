// https://www.urionlinejudge.com.br/judge/pt/problems/view/1005
var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var a = parseFloat(valores.shift());
var b = parseFloat(valores.shift());

var x = ((a * 3.5) + (b * 7.5)) / 11;

console.log(`MEDIA = ${x.toFixed(5)}`);
