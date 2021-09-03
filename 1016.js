// https://www.urionlinejudge.com.br/judge/pt/problems/view/1016
const input = require('fs').readFileSync('stdin', 'utf8');
const qMin = (60 * input) / 30;

console.log(`${qMin} minutos`);
