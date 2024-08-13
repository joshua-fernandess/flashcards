const prompt = require('prompt-sync')();
const criarBaralho = require('./baralho/criarBaralho.js');
const listarBaralhos = require('./baralho/listarBaralhos.js');
const atualizarBaralho = require('./baralho/atualizarBaralho.js');
const deletarBaralho = require('./baralho/deletarBaralho.js');
const atualizarFlashcard = require('./flashcard/atualizarFlashcard.js');
const buscarFlashcardsPorBaralho = require('./flashcard/buscarFlashcardsPorBaralho.js');
const buscarFlashcardsPorPergunta = require ('./flashcard/buscarFlashcardsPorPergunta.js');
const criarFlashcard = require('./flashcard/criarFlashcard.js');
const deletarFlashcard = require('./flashcard/deletarFlashcard.js');
const findFlashcardIndexById = require('./flashcard/findFlashcardIndexById.js');
const listarFlashcards = require('./flashcard/listarFlashcards.js');
const listarFlashcardsPorBaralhoId = require('./flashcard/listarFlashcardsPorBaralhoId.js');

function menu(){
    console.log(`
    ------Menu----------
    1. Criar baralho
    2. Listar baralhos
    3. Atualizar baralho
    4. Deletar baralho
    5. Criar flashcard
    6. Listar flashcards
    7. Listar flashcards por baralho
    8. Buscar flashcard por pergunta
    9. Buscar flashcard por baralho
    10. Atualizar flashcard
    11. Deletar flashcard
    12. Sair
    `);
}


