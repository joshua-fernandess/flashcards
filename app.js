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
const listarFlashcards = require('./flashcard/listarFlashcards.js');
const listarFlashcardsPorBaralhoId = require('./flashcard/listarFlashcardsPorBaralhoId.js');

function menu(){
    console.log(`
        ****************************************
        *              Menu Principal          *
        ****************************************
        * 1. Criar baralho                      *
        * 2. Listar baralhos                    *
        * 3. Atualizar baralho                  *
        * 4. Deletar baralho                    *
        * 5. Criar flashcard                    *
        * 6. Listar flashcards                  *
        * 7. Listar flashcards por baralho      *
        * 8. Atualizar flashcard                *
        * 9. Deletar flashcard                  *
        * 10. Buscar flashcard por pergunta     *
        * 11. Buscar flashcard por baralho      *
        * 12. Sair                              *
        **************************************** `);
    
    let opcao = prompt('Digite a opção desejada: ');

    switch(opcao){
        case '1': 
            let titulo = prompt('Informe o título: ');
            criarBaralho({ titulo });
            console.log('Baralho adicionado com sucesso!');
            menu();
            break;
        case '2':
            listarBaralhos();
            menu();
            break;
        case '3':
            listarBaralhos();
            let id = parseInt(prompt("Escolha um baralho (ID): "));
            let novoTitulo = prompt("Informe o titulo do baralho atualizado: ");
            atualizarBaralho(id, {titulo: novoTitulo});
            console.log("Baralho atualizado com sucesso!");
            menu();
            break;
        case '4':
            listarBaralhos();
            let idDeletar = parseInt(prompt("Escolha um baralho (ID): "));
            deletarBaralho(idDeletar);
            console.log("Baralho removido com sucesso!");
            menu();
            break;
        case '5':
            let pergunta = prompt('Qual a pergunta? ');
            let resposta = prompt('Qual é a resposta da pergunta? ');
            idBaralho = prompt('Qual é o ID do baralho que será adicionado o flashcard? ');
            criarFlashcard ({pergunta, resposta, idBaralho});
            console.log('Flashcard adicionado com sucesso!');
            menu();
            break;
        case '6':
            listarFlashcards();
            menu();
            break;
        case '7':
            listarBaralhos();
            let idBara = parseInt(prompt("Informe o ID do balharo para listar os flashcards: "));
            listarFlashcardsPorBaralhoId(idBara);
            menu();
            break;
        case '8':
            listarFlashcards();
            let idFlashcard = parseInt(prompt("Escolha um flashcard (ID): "));
            let novaPergunta = prompt("Informe a nova pergunta: ");
            let novaResposta = prompt("Informe a nova resposta: ");
            let novoBaralho = prompt("Informe o ID do baralho: ");
            atualizarFlashcard(idFlashcard, {pergunta: novaPergunta, resposta: novaResposta, idBaralho: novoBaralho});
            console.log("Flashcard atualizado com sucesso!");
            menu();
            break;
        case '9':
            let idDelFlash = parseInt(prompt("Escolha um flashcard (ID): "));
            deletarFlashcard(idDelFlash);
            console.log("Flashcard removido com sucesso!");
            menu();
            break;
        case '10':
            let buscarPergunta = prompt("Informe a pergunta do flashcard: ");
            let resultado = buscarFlashcardsPorPergunta(buscarPergunta);
            console.log(resultado);
            menu();
            break;
        case '11':
            listarBaralhos();
            idBaralho = parseInt(prompt("Escolha um baralho para buscar o flashcard: "));
            let flashcardsEncontrados = buscarFlashcardsPorBaralho(idBaralho);
            console.log(flashcardsEncontrados);
            menu();
            break;
        case '12':
            console.log('Saindo...');
            process.exit();
            break;
        default:
            console.log('Opção inválida!');
            menu();
    }
}

menu ();