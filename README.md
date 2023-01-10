# Validador de links para arquivos Markdown

Esta projeto tem como objetivo fazer a leitura de um arquivo markdown e coletar todos os links existentes, com a opção de testá-los e trazer uma resposta de links validados.

## Modo de uso
Para usar esta biblioteca, siga os seguintes passos:

1. Clone este repositório para sua máquina:
`git clone https://github.com/seu-usuario/validador-links-markdown.git`

2. Abra o terminal e navegue até a pasta do repositório:
`cd validador-links-markdown`

3. Para exibir uma lista com todos os links existentes no arquivo, digite o seguinte comando em seu terminal:
`node ./src/cli.js "local do arquivo ou diretório"`
Caso tenha um diretório com vários arquivos markdown, basta digitar o caminho até o diretório, a aplicação fará a leitura de todos os arquivos.

4. Para exibir uma lista com todos os links validados:
`node ./src/cli.js "local do arquivo ou diretório" --valida`

Note que é importante ter Node.js versão 18 instalado na sua máquina para usar essa biblioteca.

## Credito e Agradecimentos
Esta projeto foi desenvolvido no curso de Node.JS da Alura 

Juliana Amoasei tem uma didática excelente

Obrigado Ju!
