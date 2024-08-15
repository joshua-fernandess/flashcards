let flashcards = require('../data.js');

function buscarFlashcardsPorPergunta(pergunta){
    let resultados = flashcards.filter(flashcard => flashcard.pergunta.includes(pergunta));
    if (resultados.length === 0) {
        console.log("Nenhum flashcard encontrado com esta pergunta!");
    } else {
        resultados.forEach(flashcard => {
            console.log(`ID: ${flashcard.id} | Pergunta: ${flashcard.pergunta} | Resposta: ${flashcard.resposta} | ID Baralho: ${flashcard.idBaralho}`);
        });
    }
}

module.exports = buscarFlashcardsPorPergunta;