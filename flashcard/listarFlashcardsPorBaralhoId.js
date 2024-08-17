const { flashcards } = require('../data.js');


function listarFlashcardsPorBaralhoId(idBaralho){
    let flashcardsPorBaralho = flashcards.filter(flashcard => flashcard.idBaralho === idBaralho);
    if (flashcardsPorBaralho.length === 0) {
        console.log("Nenhum flashcard encontrado para este baralho!");
    } else {
        flashcardsPorBaralho.forEach(flashcard => {
            console.log(`
                ID: ${flashcard.id}
                Pergunta: ${flashcard.pergunta}  
                Resposta: ${flashcard.resposta}`);
        });
    }
}

module.exports = listarFlashcardsPorBaralhoId;