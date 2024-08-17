const { flashcards } = require('../data.js');

function buscarFlashcardsPorBaralho(idBaralho){
    return flashcards.filter(flashcard => flashcard.idBaralho === idBaralho);
}

module.exports = buscarFlashcardsPorBaralho;