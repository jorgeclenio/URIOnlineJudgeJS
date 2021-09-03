// https://www.urionlinejudge.com.br/judge/pt/problems/view/1017
var input = require('fs').readFileSync('stdin', 'utf8');
const [tGasto, vMedia] = input.split("\n");

const tPercorrido = (tGasto * vMedia) / 12;

console.log(tPercorrido.toFixed(3));
