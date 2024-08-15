let baralhos = require('../data.js');

function deletarBaralho(id){
    let index = baralhos.findIndex(baralho => baralho.id === id);
    if (index !== -1){
        baralhos.splice(index, 1);
        // Deletar flashcards desse baralho
        flashcards = flashcards.filter( flashcard => flashcard.idBaralho !== id);
    }
}

module.exports = deletarBaralho;