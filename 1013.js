// https://www.urionlinejudge.com.br/judge/pt/problems/view/1013
var input = require('fs').readFileSync('stdin', 'utf8');
var [A, B, C] = input.split(" ").map(item => parseInt(item));

var maiorAB = (A + B + Math.abs(A - B)) / 2;

if (maiorAB > C) {
    console.log(`${maiorAB} eh o maior`);
} else {
    console.log(`${C} eh o maior`);
}
