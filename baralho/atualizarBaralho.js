let baralhos = ('../data.js');

function atualizarBaralho(id, novoBaralho){
    let index = baralhos.findIndex(baralho => baralho.id === id);
    if (index !== -1){
        baralhos[index] = {id, ...novoBaralho};
    } else {
        throw new Error("Baralho não encontrado!");
    }
}

module.exports = atualizarBaralho;