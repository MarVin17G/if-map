use bd_ifmap

-- PONTO DE REFERENCIA --

insert dbo.tbl_ponto_referencia (descricao) values ('Sala Áudio visual 01')
insert dbo.tbl_ponto_referencia (descricao) values ('Corredor de acesso ao audiovisual 1 da DIATINF')
insert dbo.tbl_ponto_referencia (descricao) values ('Laboratório 05')
insert dbo.tbl_ponto_referencia (descricao) values ('Coordenação de cursos')
insert dbo.tbl_ponto_referencia (descricao) values ('Salão da DIATINF')
insert dbo.tbl_ponto_referencia (descricao) values ('Entrada para a DIATINF')
insert dbo.tbl_ponto_referencia (descricao) values ('Corredor da DIATINF')
insert dbo.tbl_ponto_referencia (descricao) values ('Secretaria acadêmica.')
insert dbo.tbl_ponto_referencia (descricao) values ('Entrada para o buraco de vento')
insert dbo.tbl_ponto_referencia (descricao) values ('Corredor das rosquinhas')
insert dbo.tbl_ponto_referencia (descricao) values ('Corredor do bloco B')
insert dbo.tbl_ponto_referencia (descricao) values ('Rampa de acesso ao bloco B')
insert dbo.tbl_ponto_referencia (descricao) values ('Campo')
insert dbo.tbl_ponto_referencia (descricao) values ('Entrada do campo')
insert dbo.tbl_ponto_referencia (descricao) values ('Acesso ao bloco D')
insert dbo.tbl_ponto_referencia (descricao) values ('Acesso às arquibancadas e ao bloco B')
insert dbo.tbl_ponto_referencia (descricao) values ('Lojinha dos estudantes, perto da grande rampa')
insert dbo.tbl_ponto_referencia (descricao) values ('Acesso ao Bloco A e arquibancadas')
insert dbo.tbl_ponto_referencia (descricao) values ('Praça das rosquinhas')
insert dbo.tbl_ponto_referencia (descricao) values ('Cantina')
insert dbo.tbl_ponto_referencia (descricao) values ('Acesso a Praça de alimentação e refeitório')
insert dbo.tbl_ponto_referencia (descricao) values ('Ginásio')
insert dbo.tbl_ponto_referencia (descricao) values ('Entrada para a quadra')
insert dbo.tbl_ponto_referencia (descricao) values ('Ginasio e Praça das Rosquinhas')
insert dbo.tbl_ponto_referencia (descricao) values ('Escadas e Rampas de acesso à praça das rosquinhas')
insert dbo.tbl_ponto_referencia (descricao) values ('Biblioteca')
insert dbo.tbl_ponto_referencia (descricao) values ('Entrada da Biblioteca; escadaria e rampas de acesso à Praça das Rosquinhas')
insert dbo.tbl_ponto_referencia (descricao) values ('Entrada de pedestres, conhecida como Tapete Vermelho')


-- ROTAS --

insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)
insert dbo.tbl_rota (video) values (null)




-- rota x ponto --


insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (1, 28)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (1, 27)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (1, 25)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (1, 24)

insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (2, 28)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (2, 18)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (2, 17)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (2, 16)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (2, 14)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (2, 13)

insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (3, 28)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (3, 18)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (3, 17)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (3, 16)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (3, 7)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (3, 6)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (3, 5)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (3, 4)

insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (4, 28)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (4, 18)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (4, 17)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (4, 16)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (4, 12)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (4, 11)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (4, 10)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (4, 9)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (4, 8)


insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (5, 28)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (5, 27)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (5, 25)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (5, 24)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (5, 23)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (5, 22)

insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (6, 28)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (6, 18)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (6, 17)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (6, 16)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (6, 12)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (6, 11)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (6, 10)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (6, 7)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (6, 6)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (6, 5)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (6, 3)

insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (7, 28)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (7, 18)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (7, 17)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (7, 16)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (7, 12)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (7, 11)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (7, 10)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (7, 7)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (7, 6)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (7, 5)

insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (8, 28)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (8, 27)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (8, 25)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (8, 24)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (8, 21)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (8, 20)

insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (9, 28)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (9, 27)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (9, 26)

insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (10, 28)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (10, 18)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (10, 17)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (10, 16)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (10, 12)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (10, 11)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (10, 10)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (10, 7)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (10, 2)
insert dbo.tbl_rotaXponto_referencia (fk_rota, fk_ponto) values (10, 1)



-- tbl_diretoria --

insert dbo.tbl_diretoria (nome) values ('Diatinf')
insert dbo.tbl_diretoria (nome) values ('Diaren')
insert dbo.tbl_diretoria (nome) values ('Diac')
insert dbo.tbl_diretoria (nome) values ('Diacin')
insert dbo.tbl_diretoria (nome) values ('Diacon')



-- tbl_gestor -- 

insert dbo.tbl_gestor (nome, matricula) values ('joãozinho', 123456789)



-- tbl_gestorXdiretoria --

insert dbo.tbl_getorXdiretoria (fk_gestor, fk_diretoria) values (1, 1)
insert dbo.tbl_getorXdiretoria (fk_gestor, fk_diretoria) values (1, 2)
insert dbo.tbl_getorXdiretoria (fk_gestor, fk_diretoria) values (1, 3)
insert dbo.tbl_getorXdiretoria (fk_gestor, fk_diretoria) values (1, 4)
insert dbo.tbl_getorXdiretoria (fk_gestor, fk_diretoria) values (1, 5)


-- tbl_ambiente --

insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (1, 1, 'Praça das rosquinhas')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (2, 1, 'Praça das rosquinhas')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (3, 1, 'Praça das rosquinhas')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (4, 1, 'Praça das rosquinhas')

insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (5, 5, 'Campo')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (6, 5, 'Campo')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (7, 5, 'Campo')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (8, 5, 'Campo')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (9, 5, 'Campo')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (10, 5, 'Campo')

insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (11, 1, 'Coordenação do curso')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (12, 1, 'Coordenação do curso')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (13, 1, 'Coordenação do curso')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (14, 1, 'Coordenação do curso')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (15, 1, 'Coordenação do curso')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (16, 1, 'Coordenação do curso')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (17, 1, 'Coordenação do curso')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (18, 1, 'Coordenação do curso')

insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (19, 1, 'Secretaria academica')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (20, 1, 'Secretaria academica')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (21, 1, 'Secretaria academica')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (22, 1, 'Secretaria academica')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (23, 1, 'Secretaria academica')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (24, 1, 'Secretaria academica')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (25, 1, 'Secretaria academica')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (26, 1, 'Secretaria academica')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (27, 1, 'Secretaria academica')

insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (28, 1, 'Ginasio')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (29, 1, 'Ginasio')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (30, 1, 'Ginasio')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (31, 1, 'Ginasio')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (32, 1, 'Ginasio')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (33, 1, 'Ginasio')

insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (34, 1, 'Laboratorio 05')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (35, 1, 'Laboratorio 05')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (36, 1, 'Laboratorio 05')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (37, 1, 'Laboratorio 05')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (38, 1, 'Laboratorio 05')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (39, 1, 'Laboratorio 05')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (40, 1, 'Laboratorio 05')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (41, 1, 'Laboratorio 05')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (42, 1, 'Laboratorio 05')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (43, 1, 'Laboratorio 05')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (44, 1, 'Laboratorio 05')

insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (45, 1, 'Diatinf')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (46, 1, 'Diatinf')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (47, 1, 'Diatinf')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (48, 1, 'Diatinf')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (49, 1, 'Diatinf')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (50, 1, 'Diatinf')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (51, 1, 'Diatinf')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (52, 1, 'Diatinf')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (53, 1, 'Diatinf')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (54, 1, 'Diatinf')

insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (55, 1, 'Cantina')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (56, 1, 'Cantina')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (57, 1, 'Cantina')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (58, 1, 'Cantina')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (59, 1, 'Cantina')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (60, 1, 'Cantina')

insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (61, 1, 'Biblioteca')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (62, 1, 'Biblioteca')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (63, 1, 'Biblioteca')

insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (64, 1, 'Sala de audio visual 01')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (65, 1, 'Sala de audio visual 01')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (66, 1, 'Sala de audio visual 01')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (67, 1, 'Sala de audio visual 01')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (68, 1, 'Sala de audio visual 01')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (69, 1, 'Sala de audio visual 01')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (70, 1, 'Sala de audio visual 01')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (71, 1, 'Sala de audio visual 01')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (72, 1, 'Sala de audio visual 01')
insert dbo.tbl_ambiente (fk_rotaXponto, fk_diretoria, nome) values (73, 1, 'Sala de audio visual 01')