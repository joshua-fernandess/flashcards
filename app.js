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
    
    let opcao = prompt('Digite a opção desejada: ');

    switch(opcao){
        case '1': 
            let titulo = prompt('Informe o titulo: ');
            criarBaralho({titulo});
            console.log('Baralho adicionado com sucesso!');
            menu();
            break;
        case '2':
            listarBaralhos();
            menu();
            break;
        case '3':
            listarBaralhos();
            let idBaralho = parseInt(prompt("Escolha um baralho (ID): "));
            let novoTitulo = prompt("Informe o titulo do baralho atualizado: ");
            atualizarBaralho(idBaralho, {titulo: novoTitulo});
            console.log("Baralho atualizado com sucesso!");
            menu();
            break;
        case '4':
            listarBaralhos();
            idBaralho = parseInt(prompt("Escolha um baralho (ID): "));
            deletarBaralho(idBaralho);
            console.log("Baralho removido com sucesso!");
            menu();
            break;
        case '5':
            let pergunta = prompt('Qual a pergunta?');
            let resposta = prompt('Qual é a resposta da pergunta? ');
            idBaralho = prompt('Qual é o ID do baralho que será adicionado o flashcard? ');
            criarFlashcard ({idBaralho, pergunta, resposta});
            console.log('Flashcard adicionado com sucesso!');
            menu();
            break;
        case '6':
            listarFlashcards();
            menu();
            break;
        case '7':
            idBaralho = parseInt(prompt("Informe o ID do balharo para listar os flashcards"));
            listarFlashcardsPorBaralhoId(idBaralho);
            menu();
            break;
        case '8':
            pergunta = prompt("Informe a pergunta para buscar: ");
            buscarFlashcardsPorPergunta(pergunta);
            menu();
            break;
        case '9':
            idBaralho = parseInt(prompt("Informe o ID do baralho para buscar flashcards: "));
            buscarFlashcardsPorBaralho(idBaralho);
            menu();
            break;
        case '10':
            listarFlashcards();
            let idFlashcard = parseInt(prompt("Escolha um flashcard (ID): "));
            let novaPergunta = prompt("Informe a nova pergunta: ");
            let novaResposta = prompt("Informe a nova resposta: ");
            atualizarFlashcard(idFlashcard, {pergunta: novaPergunta, resposta: novaResposta});
            console.log("Flashcard atualizado com sucesso!");
            menu();
            break;
        case '11':
            idFlashcard = parseInt(prompt("Escolha um flashcard (ID): "));
            deletarFlashcard(idFlashcard);
            console.log("Flashcard removido com sucesso!");
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