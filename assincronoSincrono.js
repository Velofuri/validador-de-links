import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
  console.error(erro)
  throw new Error(chalk.red(erro.code, 'Arquivo não encontrado'));
}

// Algoritmo Assincrono (async/await)

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.green(texto));
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.yellow('fim!!!'));
  }
}

// Algoritmo Assincrono (promisses com then())
// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   fs.promises.readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     // .catch((erro) => trataErro(erro))
//     .catch(trataErro)
// }
// Algoritmo Sincrono
// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   setTimeout(() => {
//     console.log("Delayed for 2 second.");
//   }, "2000")
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if (erro) {
//       trataErro(erro);
//     }
//     console.log(chalk.green(texto));
//   })
// }

pegaArquivo('./arquivos/');
