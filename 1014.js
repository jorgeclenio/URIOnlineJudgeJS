// https://www.urionlinejudge.com.br/judge/pt/problems/view/1014
const input = require('fs').readFileSync('stdin', 'utf8');
const [X, Y] = input.split("\n");

const consumoMD = X / Y;

console.log(`${consumoMD.toFixed(3)} km/l`);