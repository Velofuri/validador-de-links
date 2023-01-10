import pegaArquivo from './index.js';
import fs from 'fs';
import listaValidada from './http-validacao.js';

const caminho = process.argv;

async function imprimeLista(valida, resultado, arquivo = '') {
  if (valida) {
    console.log(`Lista validada ${arquivo}: `, await listaValidada(resultado));
  } else {
    console.log(`Lista de Links do arquivo ${arquivo}: `, resultado);
  }
}

async function processaTexto(argumento) {
  const caminho = argumento[2];
  const valida = argumento[3] === '--valida';

  try {
    fs.lstatSync(caminho);
  } catch (erro) {
    if (erro.code === 'ENOENT') {
      console.log('Arquivo ou diretório inválido!');
      return;
    }
  }
  if (fs.lstatSync(caminho).isFile()) {
    const resultado = await pegaArquivo(caminho);
    imprimeLista(valida, resultado);
  } else if (fs.lstatSync(caminho).isDirectory()) {
    const arquivo = await fs.promises.readdir(caminho);
    arquivo.forEach(async (nomeDeArquivo) => {
      const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
      imprimeLista(valida, lista, nomeDeArquivo);
    });
  }
}

processaTexto(caminho);
