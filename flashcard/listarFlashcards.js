const { flashcards } = require('../data.js');

function listarFlashcards(){
    if (flashcards === 0){
        throw new Error("Nada aqui!");
    } else {
        flashcards.forEach(flashcard => {
            console.log(` ID: ${flashcard.id}
                        Pergunta: ${flashcard.pergunta}
                        Resposta: ${flashcard.resposta}
                        ID Baralho: ${flashcard.idBaralho}`);
            
        });
    }
}

module.exports = listarFlashcards;