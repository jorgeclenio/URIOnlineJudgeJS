// https://www.urionlinejudge.com.br/judge/pt/problems/view/1008
var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var numero = parseInt(valores.shift());
var qHoras = parseInt(valores.shift());
var vHoraTrabalhada = parseFloat(valores.shift());

var r = qHoras * vHoraTrabalhada;

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${r.toFixed(2)}`);
