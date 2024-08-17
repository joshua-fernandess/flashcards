const { flashcards } = require('../data');

function atualizarFlashcard(id, novoFlashcard) {
    let index = flashcards.findIndex(flashcard => flashcard.id === id) 
    if (index !== -1) {
     flashcards[index] = {id: id, ...novoFlashcard}
    } else {
        throw new Error("Flashcard não encontrado!");
    }
}

module.exports = atualizarFlashcard;