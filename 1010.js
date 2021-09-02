// https://www.urionlinejudge.com.br/judge/pt/problems/view/1010
var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var [id1, qtdd1, vUn1] = valores.shift().split(" ");
var [id2, qtdd2, vUn2] = valores.shift().split(" ");

console.log(`VALOR A PAGAR: R$ ${((qtdd1 * vUn1) + (qtdd2 * vUn2)).toFixed(2)}`);
