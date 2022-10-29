| Data | Versão | Descrição | Autor |
| ---- | ------- | ---------- | ------ |
| 19/08/2022 | 1.0 | - | Matheus Arthur / Joana Fernandes / Alice Lima / Manrick Lázaro |
| 29/10/2022 | 1.1 | adicionando prioridade dos casos de uso | Manrick Lázaro |

# Prioridade dos Casos de uso

| CDU | Prioridade |
| --- | ---------- |
| 01 | ⭐⭐⭐⭐⭐ |
| 02 | ⭐⭐⭐⭐ | 
| 03 | ⭐⭐⭐ |
| 04 | ⭐ |
| 05 | ⭐⭐⭐ |
| 06 | ⭐ |

<br/>
<br/> 
<br/>

## CDU 01 - Ser guiado por Foto

*Resumo*: tem como objetivo guiar o usuário até um local de interesse utilizando fotos e uma descrição textual.

*Atores*: Usuário

*Pré-condições*

*Pós-condições*

### Fluxos de eventos

*principal*
| Usuário | Sistema |
| -------- | -------- |
| 1.  clica no menu de “Busca” | |
| | 2.  Apresenta um formulário com dois campos de preenchimento, Diretoria e Ambiente. |
| 3.  preenche o formulário e submete ele | |
| | 4.  Apresenta um menu de escolhas ao usuário, menu com fotos, menu com vídeo ou mapa. |
| 5.  seleciona a opção menu com fotos  | |
| | 6.  Apresenta a página de guia, contendo uma foto, uma descrição e duas opções, avançar ou voltar. |
| 7.  clica em avançar até chegar na última página do guia. | |
| | 8.    Apresenta as opções de fazer um novo guia ou encerrar. |

*Exceção I do fluxo principal*: Passo 3. retornar um erro quando o usuário for submeter um formulário com um ambiente que não existe.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## CDU 02 - Buscar Ambiente

*Resumo*: Tem como intenção ajudar o usuário a buscar e encontrar um determinado local.

*Atores*: usuário

*Pré-Condições*:

*Pós-Condições*:

### Fluxos de Eventos
*Principal*:

|Usuário | Sistema|
| ------- | ------- |
| 1. No menu, clique em “Busca”;  | |
| | 2. Mostra um seletor com os nomes das diretorias e uma caixa de pesquisa direta ao ambiente; |
| 3. Digita o ambiente desejado e submete;  | |
| |  4. Mostra ao usuário as opções de guia por foto, vídeo ou mapa. |

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## CDU 03 - Listar Diretorias

*Resumo*: Tem como objetivo exibir para o usuário a lista de diretorias cadastradas. 

Atores: Usuário

Pré-condições:

Pós condições

### Fluxo de eventos:

*Principal*

| Usuário | Sistema |
| ----------- | ----------- |
| 1. Seleciona a opção de escolher diretoria. | |
| | 2. Exibe uma lista com as opções de diretorias cadastradas.| 

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## CDU 04 - Exibir Mapa de um Ambiente

*Resumo*: Tem como objetivo exibir para o usuário o mapa de um ambiente escolhido de uma diretoria.

Atores: Usuário

Pré-condições:

Pós condições

### Fluxo de eventos:

*Principal*

| Usuário | Sistema |
| ----------- | ----------- |
| 1. Seleciona a opção com mapa. | |
| | 2. Exibe uma página de guia com mapa para o ambiente selecionado. |

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## CDU 05 - Listar Ambientes

*Resumo*: Tem como objetivo exibir para o usuário a lista de ambientes encontrados em cada diretoria.

Atores: Usuário

Pré-condições:

Pós condições

### Fluxo de eventos:

*Principal*

| Usuário | Sistema |
| ----------- | ----------- |
| | 1. Seleciona a opção de escolher diretoria. |
| 2. Exibe uma lista com as opções de diretorias cadastradas.| |
| | 3. Seleciona a diretoria desejada. |
| 4. Solicita a escolha de um ambiente da diretoria. | |
| | 5. Escolhe um dos ambientes da diretoria. |
| 6. Exibe as opções de guia (vídeo, descrição, foto ou mapa) até o ambiente escolhido. | |

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## CDU 06 - Ser Guiado por Vídeo

*Resumo*: Tem como objetivo guiar o usuário até um local de interesse utilizando vídeos.

Atores: Usuário

Pré-condições:

Pós condições

### Fluxo de eventos:

*Principal*

| Usuário | Sistema |
| ----------- | ----------- |
| 1. Seleciona a opção com vídeo. | |
| | 2. Reprodução de rota desejada a partir do vídeo.|
