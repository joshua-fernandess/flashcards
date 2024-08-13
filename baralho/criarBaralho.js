let baralhos = require('./data.js');

function criarBaralho(baralho){
    baralho.id = baralhos.length +1;
    baralhos.push(baralho);
}