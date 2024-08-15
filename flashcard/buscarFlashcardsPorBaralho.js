let flashcards = require('../data.js');

function buscarFlashcardsPorBaralho(idBaralho){
    let resultados = flashcards.filter(flashcard => flashcard.idBaralho === idBaralho);
    if (resultados.length === 0) {
        console.log("Nenhum flashcard encontrado para este baralho!");
    } else {
        resultados.forEach(flashcard => {
            console.log(`ID: ${flashcard.id} | Pergunta: ${flashcard.pergunta} | Resposta: ${flashcard.resposta}`);
        });
    }
}

module.exports = buscarFlashcardsPorBaralho;