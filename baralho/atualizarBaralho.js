const { baralhos } = require('../data.js');

function atualizarBaralho(id, novoBaralho) {
    let index = baralhos.findIndex(baralho => baralho.id === id) 
    if (index !== -1) {
     baralhos[index] = {id: id, ...novoBaralho}
    } 
}

module.exports = atualizarBaralho;