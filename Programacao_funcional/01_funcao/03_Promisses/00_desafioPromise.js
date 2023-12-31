const fs = require('fs');
const path = require('path');


function lerArquivo(caminho) {
  return new Promise(resolve => {
    fs.readFile(caminho, function (_, conteudo) {
      resolve(conteudo.toString());
    });
    console.log('ler arquivo!')
  });
}
const caminho = path.join(__dirname, 'dado.txt');

lerArquivo(caminho).then(caminho => console.log(caminho));


