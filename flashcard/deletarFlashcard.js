const { flashcards } = require('../data.js');

function deletarFlashcard(idDelFlash){
    const index = flashcards.findIndex(flashcard => flashcard.id === idDelFlash);
    if(index !== -1){
        flashcards.splice(index, 1);
    }
}

module.exports = deletarFlashcard;