INSERT INTO Gestores (nome, email, matricula, senha)
VALUES (
    'Gestor Admin',
    'admingestor@live.com',
    '20172014040004',
    'senha123'
  );
INSERT INTO Diretorias (nome, gestorFk)
VALUES ('Diatinf', 1),
  ('Diacon', 1);
INSERT INTO Ambientes(nome, diretoriaFk, mapaAmbiente, videoRota)
VALUES ('Lab2', 1, null, null),
  ('Lab3', 1, null, null),
  ('ambiente diacon', 2, null, null),
  ('oto ambiente diacon', 2, null, null);
INSERT INTO PontosReferencias (descricao)
VALUES ('dept estágios'),
  ('roscas'),
  ('biblioteca');
INSERT INTO AmbienteHasPontoRef(ambienteFk, pontoRefFk)
VALUES (1, 1),
  (2, 2),
  (1, 3);