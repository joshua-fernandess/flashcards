let flashcards = require('../data.js');

function findFlashcardIndexById(id) {
    flashcards.findIndex(flashcard => flashcard.id === id);
}

module.exports = findFlashcardIndexById;