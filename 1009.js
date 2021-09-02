// https://www.urionlinejudge.com.br/judge/pt/problems/view/1009
var valores = input.split('\n');

var nome = valores.shift();
var sFixo = parseFloat(valores.shift());
var mVendas = parseFloat(valores.shift());

var r = sFixo + (mVendas * 0.15);

console.log(`TOTAL = R$ ${r.toFixed(2)}`);
