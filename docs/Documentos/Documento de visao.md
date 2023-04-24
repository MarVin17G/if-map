# Documento de Visão

## Histórico da Revisão

| Data | Versão | Descrição | Autor |
|------|--------|-----------|-------|
| 29/05/2022 | 1.0 | Criação do documento de visão |  Manrick Lázaro |
| 12/06/2022 | 1.1 | atualização do documento de visão. | Virginia Menezes |
| 29/06/2022 | 1.2 | atualização do documento de visão. | Giovanna Melo |
| 29/10/2022 | 1.3 | Correção de alguns tópicos | Virginia Menezes / Manrick Lázaro |
| 24/04/2023 | 1.4 | visão do produto | Manrick Lázaro |

<br>
<br>

## 1. Projeto: _IFMap_

<br>
<br>

## 2. Visão do Produto
|        |                                                                  |
| ------ | ---------------------------------------------------------------- |
| *Para* | Frequentadores do IFRN, como alunos, professores e funcionários. |
| *Cuja* | A falta de um mapa ou de guias claros de referências afeta frequentadores do IFRN natal central, dificultando de encontrar salas, diretorias, auditórios e muitas vezes atrasando o frequentador de chegar no seu lugar de interesse. |
| *A* | Plataforma IFMap. |
| *é uma* | Solução de sistema online que possibilita guiar o usuário até o seu destino no campus. |
| *Que* | facilita a acessibilidade de seus visitantes, permitindo que os seus usuários encontrem facilmente os locais desejados dentro do instituto. |
| *Diferente das* | soluções existentes, que oferecem um mapa virtual de seus ambientes. |
| *nosso produto* | tem como foco guiar o usuário, com o máximo de facilidade possível. |

<br>
<br>

## 3. Descrição do problema
A falta de um mapa ou de guias claros de referências afeta frequentadores do IFRN natal central, dificultando de encontrar salas, diretorias, auditórios e muitas vezes atrasando o frequentador de chegar no seu lugar de interesse. Uma  solução para resolvermos esse problema seria criar um sistema online que possibilite guiar o usuário até o seu destino no campus. 

<br>
<br>

## 4. Descrição dos usuários
| Nome | Ambiente | Responsabilidades |
|-------|-----------|--------------------|
| Público geral | IFRN | Poder olhar o mapa do instituto / Ser guiado para uma região específica / Poder identificar as diretorias / Verificar a distância de um local para o outro |
| Gestores do IFRN | IFRN | Inserir o mapa da diretoria pela qual é responsável / Informar quando houver alterações de sala / Atualizar a placa da porta da sala de aula caso haja alteração |

<br>
<br>

## 5. Alternativas concorrentes
·    Mapa virtual da UFRN - https://campusvirtual.ufrn.br/ - Ferramenta para ajudar os usuários a encontrar os espaços da Universidade e conhecer um pouco da história da instituição a partir de suas edificações. O Campus Virtual é constituído por quatro seções principais: Mapa, Memória, Galeria e Download. No mapa, os usuários podem buscar informações de localização, serviços e contato de cada unidade por meio de uma busca com palavras-chave.

<br>
<br>

## 6. Escopo
É um sistema que possuirá um guia virtual do IFRN. Seu principal objetivo é ajudar o usuário a se localizar pelo campus e encontrar um destino desejado, possuindo um sistema que pode guia-lo até um ponto de referência.

<br>
<br>

## 7. Requisitos FUNCIONAIS
| Código | Nome |
|--------|-----------|
| F01 | Buscar ponto de referência                       |
| F02    | Guia – orientar o usuário até o destino desejado |
| F03    | Mostrar mapa                                     |
| F04    | Exibir detalhes dos pontos de referência         |
| F05    | Cadastrar novos guias                            |

<br>
<br>

## 8. Requisitos NÃO-FUNCIONAIS
| Código | Nome | Categoria | Classificação |
|--------|--------|-----------|--------------|
| NF01 | Uso da linguagem Python + Django. | Tecnológico | Obrigatório |
| NF02 | Site responsivo | UX Design | Desejável |
| NF03 | Fixar um menu  para todas as páginas | UX Design | Desejável |

<br>
<br>

## 9. Regras de negócio
| Código | Descrição |
|--------|-----------|
| RN01 | Fornecer site inclusivo. |
| RN02 | Fornecer usabilidade ao usuário. |
| RN03 | Dar ao usuário a opção de reiniciar o passo a passo. |
| RN04 | Dar ao usuário a opção de guia com fotos ou guia com vídeo. |
| RN05 | Na funcionalidade de guia com fotos, é necessário exibir uma foto com um texto explicativo de cada ponto à medida que o usuário avançar. |
| RN06 | Na funcionalidade de guia com vídeos, exibir a opção de um vídeo curto, mostrando o caminho que deve ser feito em cada ponto à medida que o usuário avançar. |
| RN07 | Exibir um botão de retorno para o início do site ou iniciar outro guia quando o usuário chegar no ponto em que deseja. |