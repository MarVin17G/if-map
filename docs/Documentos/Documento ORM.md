# Projeto IFMap

## Diagrama de classes de domínio
 ![Classes de dominio](Imagens/Diagrama_de_Classes_de_Domínio.jpg)

## Diagrama do modelo relacional
![Modelo relacional](Imagens/Diagrama_do_modelo_relacional.jpg)

## Classes VS Tabelas
| Classe | Tabela | Significado |
| ------ | ------ | ----------- |
| Gestor | ifmap_gestor | Responsável por cadastrar rotas para diretorias |
| Diretoria | ifmap_diretoria | Diretorias do Campus |
| Ambiente | ifmap_ambiente | Laboratórios, audiovisuais e salas das diretorias |
| Rota | ifmap_rota | Indicação dos caminhos pelo campus até o destino desejado |
| PontoReferencia | ifmap_pontoreferencia | Imagens de pontos específicos do campus |

## Relacionamentos
| Tabela Origem | Through | Tabela Destino | Significado |
| --------------| --------| --------------| --------------|
| diretoria | - | gestor |  Gestor responsável por diretoria |
| diretoria | - | ambiente | Ambientes da diretoria |
| map | - | ambiente | Mapa do ambiente |
| rota | - | ambiente | Caminhos para chegar em cada ambiente do campus |
| pontoreferencia | rota_pontoRef | rota | Pontos de referência das rotas |
