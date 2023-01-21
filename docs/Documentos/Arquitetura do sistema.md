# IFMap

## Documento de arquitetura do sistema

### Histórico de reivsão
| Data | Versão | Descrição | Autor |
|------|--------|-----------|-------|
| 21/01/2023 | 1.0 | versão inicial do documento. |  Manrick Lázaro |

### 1. Introdução
A falta de um mapa ou de guias claros de referências afeta frequentadores do IFRN natal central, dificultando encontrar salas, diretorias, auditórios e muitas vezes atrasando o frequentador de chegar no seu lugar de interesse. O IFMap surge como uma proposta de solucionar esse problema, sendo um sistema de busca de ambientes que guia os usuários até seu local de destino.

### 2. Termos e abreviações
*IFRN* - Instituto Federal do Rio Grande do Norte.
*Usuário* - Frequentador do if que usará o sistema.
*Rota* - Caminho que o usuário percorrerá, utilizando o guia (de fotos ou video) para chegar no ambiente.
*Guia* - Conjunto de fotos com explicações ou vídeo, que ajudam o usuário a chegar no ambiente desejado.
*Ambiente* - Local ou ponto de destino, procurado pelo usuário e mapeado no sistema.

### 3. Descrição de requisitos
#### 3.1. Requisitos funcionais
*RF01*: buscar pontos de referência.
*RF02*: Guia - orientar o usuário até o local desejado.
*RF03*: Mostrar mapa.
*RF04*: Listar ambientes.
*RF05*: Listar diretorias.

#### 3.2. Atributos de Qualidade
| Id | Atributo De Qualidade | Motivação |
| -- | --------------------- | --------- |

#### 3.3. Stakeholders
| Papel | Interesse |
| ----- | --------- |
| Usuário | pesquisar por um ambiente |

### 4. Restrição arquiteturais
#### 4.1. Restrição de software e programação
|   | Restrição | Contexto e/ou motivação |
| - | --------- | ----------------------- |
| - | - | - |

#### 4.2. Restrição de sistema operacional 
|   | Restrição | Contexto e/ou motivação |
| - | --------- | ----------------------- |
| - | - | - |

#### 4.3. Restrição de hardware
|   | Restrição | Contexto e/ou motivação |
| - | --------- | ----------------------- |
| - | - | - |

### 5. Escopo do sistema e contexto
#### 5.1. Diagrama de caso de uso
| CDU | Objetivo | Ator primário | Implementado |
| --- | -------- | ------------- | ------------ |
| CDU 01 - Guia por foto | guiar o usuário até um local de interesse utilizando fotos e uma descrição textual. | usuário | NÃO |
| CDU 02 - Procurar por um Ambiente | campo de busca que retorna pro usuário uma lista de ambientes que possuam alguma semelhança com o que ele pesquisou | usuário | SIM |
| CDU 03 - Listar diretorias | exibir para o usuário a lista de diretorias cadastradas | usuário | SIM |
| CDU 04 - exibir mapa de um ambiente | exibir para o usuário o mapa de um ambiente escolhido | usuário | NÃO |
| CDU 05 - Lista ambientes | exibir para o usuário a lista de ambientes encontrados | usuário | SIM |
| CDU 06 - Guia por video | guiar o usuário até um local de interesse utilizando um vídeo |  usuário | NÃO |

### 6. Diagramas conceituais 
#### 6.1. Visão lógica
##### modelo de domínio
| Conceito | Descrição |
| -------- | --------- |

##### modelo comportamental

### 7. Detalhamento da Implementação e Ambiente Físico
#### 7.1. Visão de implementação 
| Componente | Responsabilidade |
| ---------- | ---------------- |

#### 7.2. Visão de distribuição 

#### 7.3. persistencia 

#### 7.4. Interface de usuário 


### 8. Anexos 
#### 8.1. API do projeto
| URL | Descrição | Métodos HTTP | Tipo do retorno | Exemplo do retorno |
| --- | --------- | ------------ | --------------- | ------------------ |

#### 8.2. API externa 
| URL | Descrição | Métodos HTTP | Tipo do retorno | Exemplo do retorno |
| --- | --------- | ------------ | --------------- | ------------------ |
