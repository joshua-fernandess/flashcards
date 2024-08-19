const { baralhos } = require('../data.js');
const { flashcards } = require('../data.js');


function deletarBaralho(idDeletar) {
    let index = baralhos.findIndex(baralho => baralho.id === idDeletar);
    const flashcardDeletar = flashcards.findIndex(flashcard => flashcard.idBaralho === idDeletar);

    if (index !== -1) {
       baralhos.splice(index, 1);
    }
    if (flashcardDeletar !== -1){
        flashcards.splice(flashcardDeletar);
    }
}

   

module.exports = deletarBaralho;