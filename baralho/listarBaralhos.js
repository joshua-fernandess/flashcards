const {baralhos} = require('../data.js');

function listarBaralhos(){
    if (baralhos === 0){
        throw new Error("Nada aqui!");
    } else {
        baralhos.forEach(baralho => {
            console.log(` ID: ${baralho.id} | Título: ${baralho.titulo}`);
            
        });
    }
}

module.exports = listarBaralhos;