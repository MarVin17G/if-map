# IFMap

## Documento de arquitetura do sistema

### Histórico de reivsão
| Data | Versão | Descrição | Autor |
|------|--------|-----------|-------|
| 21/01/2023 | 1.0 | versão inicial do documento. |  Manrick Lázaro |
| 22/01/2023 | 2.0 | versão atualizada do documento. | Giovanna Melo |
| 23/01/2023 | 3.0 | versão atualizada do documento. | Giovanna Melo |
| 23/01/2023 | 4.0 | versão atualizada do documento. | Giovanna Melo |
### 1. Introdução
É importante salientar a nossa decisão de mudar a linguagem de programação de um projeto de Django para React e Backend em Node.js, o que representa uma mudança significativa na arquitetura do projeto. Django é um framework de desenvolvimento web baseado em Python que segue uma abordagem de "tudo incluído" e fornece uma estrutura de aplicativo pronta para uso. Isso é útil para projetos que precisam ser desenvolvidos rapidamente, mas pode ser limitante em termos de escalabilidade e flexibilidade. Em contraste, React é uma biblioteca JavaScript para construção de interfaces de usuário e Node.js é um ambiente de execução JavaScript do lado do servidor. Essas tecnologias seguem uma abordagem de "construir tudo você mesmo" e permitem aos desenvolvedores criar aplicativos altamente escaláveis e flexíveis. Ao mudar para React e Node.js, o projeto pode se beneficiar de uma arquitetura mais modular, o que facilita a manutenção e o desenvolvimento contínuo. Além disso, a separação clara entre a camada de front-end e back-end permite aos desenvolvedores trabalhar de forma mais eficiente em diferentes áreas do projeto. Em resumo, a mudança de linguagem de programação de um projeto de Django para React e Backend em Node.js representa uma mudança significativa na arquitetura do projeto e pode oferecer benefícios em termos de escalabilidade, flexibilidade e eficiência de desenvolvimento.

### 2. Termos e abreviações
#### *IFRN* - Instituto Federal do Rio Grande do Norte.
*Usuário* - Frequentador do if que usará o sistema.

*Rota* - Caminho que o usuário percorrerá, utilizando o guia (de fotos ou video) para chegar no ambiente.

*Guia* - Conjunto de fotos com explicações ou vídeo, que ajudam o usuário a chegar no ambiente desejado.

*Ambiente* - Local ou ponto de destino, procurado pelo usuário e mapeado no sistema.

### 3. Descrição de requisitos
#### 3.1. Requisitos funcionais
*RF01*: Buscar pontos de referência.

*RF02*: Guia - orientar o usuário até o local desejado.

*RF03*: Mostrar mapa.

*RF04*: Listar ambientes.

*RF05*: Listar diretorias.

#### 3.2. Atributos de Qualidade
| Id | Atributo De Qualidade | Motivação |
| -- | --------------------- | --------- |
| 1 | Funcionalidade | Desejamos um software que seja totalmente funcional, ou seja, que implemente todas as funcionalidades propostas. Além disso, é importante que o software seja fácil de entender em relação às suas capacidades, ou seja, que seja compreensível para os usuários. Isso geralmente inclui uma interface amigável e documentação clara. Isso é importante para garantir que os usuários possam utilizar o software de maneira eficiente e eficaz, sem se deparar com problemas ou dificuldades desnecessárias. |
| 2 | Confiabilidade | É crucial que um software que envolve mapeação esteja sempre disponível e ofereça rotas confiáveis. Isso significa que o software deve estar sempre funcionando e disponível para uso, independentemente do momento ou da localização. É de extrema importância que o aplicativo esteja sempre disponível e forneça informações precisas e confiáveis para que os usuários possam se orientar e chegar ao seu destino de forma segura e eficiente. |
| 3 | Eficiência | É essencial para os usuários que o software seja capaz de lidar com várias solicitações simultaneamente, sem comprometer o desempenho. Isso significa que o software deve ser escalável e ter uma boa capacidade de gerenciamento de recursos para poder lidar com uma grande quantidade de solicitações ao mesmo tempo. Isso é particularmente importante para aplicativos que são usados por muitas pessoas simultaneamente. |

#### 3.3. Stakeholders
| Papel | Interesse |
| ----- | --------- |
| Usuário | pesquisar por um ambiente |

### 4. Restrição arquiteturais
#### 4.1. Restrição de software e programação
|   | Restrição | Contexto e/ou motivação |
| - | --------- | ----------------------- |
| RT1 | Dependências | A separação da aplicação por módulos nos trás uma dependência entre os modulos, seja ela tanto em ambiente de desenvolvimento quanto de produção. É necessário que todas as peças estejam devidamente funcionais para comunicação e funcionamento do conjunto. |

#### 4.2. Restrição de sistema operacional 
|   | Restrição | Contexto e/ou motivação |
| - | --------- | ----------------------- |
| RT2 | Aplicativo Android/IOS | O sistema não possui versão nativa para android e ios, a proposta é desenvolver a versão web do sistema de forma responsiva e adaptável para utilização em qualquer tipo de dispositivo que possua navegadores. |

### 5. Escopo do sistema e contexto
#### 5.1. Diagrama de caso de uso
| CDU | Objetivo | Ator primário | Implementado |
| --- | -------- | ------------- | ------------ |
| CDU 01 - Guia por foto | guiar o usuário até um local de interesse utilizando fotos e uma descrição textual. | usuário | SIM |
| CDU 02 - Procurar por um Ambiente | campo de busca que retorna pro usuário uma lista de ambientes que possuam alguma semelhança com o que ele pesquisou | usuário | SIM |
| CDU 03 - Listar diretorias | exibir para o usuário a lista de diretorias cadastradas | usuário | SIM |
| CDU 04 - exibir mapa de um ambiente | exibir para o usuário o mapa de um ambiente escolhido | usuário | SIM |
| CDU 05 - Lista ambientes | exibir para o usuário a lista de ambientes encontrados | usuário | SIM |
| CDU 06 - Guia por video | guiar o usuário até um local de interesse utilizando um vídeo |  usuário | SIM |

### 6. Diagramas conceituais 
#### 6.1. Visão lógica
##### modelo de domínio

![image](https://github.com/tads-cnat/if-map/blob/main/docs/Imagens/Diagramas/Classes.jpg?raw=true)
| Conceito | Descrição |
| -------- | --------- |
| Classe Rota | Responsável por armazenar informações sobre uma determinada rota, como vídeo e ponto de referência. |
| Classe Ponto de Referência | Responsável por armazenar informações sobre um determinado ponto de referência, como imagem e descrição. |
| Classe Ambiente | Responsável por armazenar informações sobre um determinado ambiente, como mapa, nome, diretoria e rota. |
| Classe Mapa | Responsável por armazenar informações sobre um determinado mapa. |
| Classe Diretoria | Responsável por armazenar informações sobre uma determinada diretoria, como nome. |
| Classe Gestor | Responsável por armazenar informações sobre um determinado gestor, como user, matrícula e diretoria. |

##### modelo comportamental

Diagrama de sequência do CDU Listar Ambientes:

Tem como objetivo exibir para o usuário a lista de ambientes encontrados em cada diretoria.

![image](https://github.com/tads-cnat/if-map/blob/main/docs/Imagens/Diagramas/Sequencia%20CDU%2005.jpg?raw=true)

Diagrama de sequência do CDU Guiar por Vídeo:

Tem como objetivo guiar o usuário até um local de interesse utilizando vídeos.

![image](https://github.com/tads-cnat/if-map/blob/main/docs/Imagens/Diagramas/Sequencia%20CDU%2006.jpg?raw=true)

### 7. Detalhamento da Implementação e Ambiente Físico
#### 7.1. Visão de implementação 

![image](https://github.com/tads-cnat/if-map/blob/main/docs/Imagens/Diagramas/Diagrama%20de%20Casos%20de%20Uso.jpg?raw=true)

| Componente | Responsabilidade |
| ---------- | ---------------- |
| Buscar | Busca ambientes no sistema |
| Módulo do gestor | Gerencia todos os dados do sistema |
| Módulo de listagem | Lista todas as diretorias e seus respectivos ambientes |
| Módulo dos guias | Cuida da localização do usuário |

#### 7.2. Visão de distribuição 

Hardware do Cliente: O cliente se conectará ao site acessando-o em seu computador/notebook, utilizando um navegador web, através do protocolo TCP/IP, chamando o front-end da aplicação usando o protocolo HTTP.

Servidor da Aplicação: Garante a comunicação de todos os componentes do back-end com o front-end e o hardware do cliente.

#### 7.3. persistencia 

A persistência dos dados foi feita pelo MySQL. Por ser um banco de dados relacional, proporciona mais facilidade de inserção e recuperação dos dados e é mais indicado para sistemas que necessitam de uma grande consistência de dados.

#### 7.4. Interface de usuário 

A interface do usuário foi inicialmente modelada no figma durante o PDS WEB. Após algumas mudanças no design, o front-end foi implementado utilizando HTML, CSS, Javascript e React


### 8. Anexos 
#### 8.1. API do projeto
| URL |
| --- |
| https://app.swaggerhub.com/apis-docs/EUGIOVANNAMELO_1/IFMap/1.0.0 |

#### 8.2. API externa 
| URL |
| --- |
| https://developer.vimeo.com/api/guides/start |

