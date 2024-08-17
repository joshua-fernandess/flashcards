const { baralhos } = require('../data.js');

function deletarBaralho(idDeletar) {
    let index = baralhos.findIndex(baralho => baralho.id === idDeletar);
    if (index !== -1) {
       baralhos.splice(index, 1);
    }
}

module.exports = deletarBaralho;