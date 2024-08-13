let baralhos = require('./data.js');

function adicionarBaralho(baralho){
    baralho.id = baralhos.length +1;
    baralhos.push(baralho);
}