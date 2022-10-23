# Documento de Visão

## Histórico da Revisão
| Data | Versão | Descrição | Autor |
|------|--------|-----------|-------|
| 29/05/2022 | 1.0 | Criação do documento de visão |  Manrick Lázaro |
| 12/06/2022 | 1,1 | atualização do documento de visão. | Virginia Menezes |
| 29/06/2022 | 1,2 | atualização do documento de visão. | Giovanna Melo |

## 1. Projeto: _IFMap_

## 2. Descrição do problema
O problema de falta de um mapa ou de guias claros de referências afeta frequentadores do IFRN natal central, dificultando de encontrar salas, diretorias, auditórios e muitas vezes atrasando o frequentador de chegar no seu lugar de interesse. uma boa solução para resolvermos esse problema seria criar um sistema online que contenha um mapa do instituto e que possibilite guiar o usuário até o seu destino no campus. 

## 3. Descrição dos usuários
| Nome | Ambiente | Responsabilidades |
|-------|-----------|--------------------|
| Público geral | IFRN | Poder olhar o mapa do instituto / Ser guiado para uma região específica / Poder identificar as diretorias / Verificar a distância de um local para o outro |
| Gestores do IFRN | IFRN | Inserir o mapa da diretoria pela qual é responsável / Informar quando houver alterações de sala / Atualizar a placa da porta da sala de aula caso haja alteração |

## 4. Alternativas concorrentes
·    Mapa virtual da UFRN - https://campusvirtual.ufrn.br/ - Ferramenta para ajudar os usuários a encontrar os espaços da Universidade e conhecer um pouco da história da instituição a partir de suas edificações. O Campus Virtual é constituído por quatro seções principais: Mapa, Memória, Galeria e Download. No mapa, os usuários podem buscar informações de localização, serviços e contato de cada unidade por meio de uma busca com palavras-chave.

## 5. Escopo
É um sistema que possuirá um mapa do IFRN. Seu principal objetivo é ajudar o usuário a se localizar pelo campus e encontrar um destino desejado, possuindo um sistema que pode guia-lo até um ponto de referência.

## 6. Requisitos FUNCIONAIS
| Código | Nome |
|--------|-----------|
| F01 | Buscar ponto de referência                       |
| F02    | Guia – orientar o usuário até o destino desejado |
| F03    | Mostrar mapa                                     |
| F04    | Exibir detalhes dos pontos de referência         |
| F05    | Cadastrar novos guias                            |
| F06    | Cadastrar novos usuários                         |

## 7. Requisitos NÃO-FUNCIONAIS
| Código | Nome | Categoria | Classificação |
|--------|--------|-----------|--------------|
| NF01 | Uso da linguagem Python + Django. | Tecnológico | Obrigatório |
| NF02 | Site responsivo | UX Design | Desejável |
| NF03 | Fixar um menu  para todas as páginas | UX Design | Desejável |

## 8. Regras de negócio
| Código | Descrição |
|--------|-----------|
| RN01 | Fornecer site inclusivo. |
| RN02 | Fornecer usabilidade ao usuário. |
| RN03 | Dar ao usuário a opção de reiniciar o passo a passo. |
| RN04 | Dar ao usuário a opção de guia com fotos ou guia com vídeo. |
| RN05 | Na funcionalidade de guia com fotos, é necessário exibir uma foto com um texto explicativo de cada ponto à medida que o usuário avançar. |
| RN06 | Na funcionalidade de guia com vídeos, exibir a opção de um vídeo curto, mostrando o caminho que deve ser feito em cada ponto à medida que o usuário avançar. |
| RN07 | Exibir um botão de retorno para o início do site ou iniciar outro guia quando o usuário chegar no ponto em que deseja. |
