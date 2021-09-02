// https://www.urionlinejudge.com.br/judge/pt/problems/view/1003
var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var a = parseInt(valores.shift());
var b = parseInt(valores.shift());

var x = a + b;

console.log(`SOMA = ${x}`);
