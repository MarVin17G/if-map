CREATE DATABASE IF NOT EXISTS ifmapdb;
CREATE TABLE Gestores (
  gestorId INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(60) NOT NULL,
  matricula VARCHAR(20) NOT NULL,
  senha VARCHAR(50) NOT NULL,
  PRIMARY KEY(gestorId)
);
CREATE TABLE Diretorias (
  diretoriaId INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(12) NOT NULL,
  gestorFk INT NOT NULL,
  PRIMARY KEY(diretoriaId),
  FOREIGN KEY(gestorFk) REFERENCES Gestores(gestorId)
);
CREATE TABLE Ambientes (
  ambienteId INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(8) NOT NULL,
  diretoriaFk INT NOT NULL,
  mapaAmbiente MEDIUMBLOB NOT NULL,
  videoRota VARCHAR(100) NOT NULL,
  PRIMARY KEY(ambienteId),
  FOREIGN KEY(diretoriaFk) REFERENCES Diretorias(diretoriaId)
);
CREATE TABLE PontosReferencias (
  pontoReferenciaId INT NOT NULL AUTO_INCREMENT,
  descricao VARCHAR(100) NOT NULL,
  PRIMARY KEY(pontoReferenciaId)
);
CREATE TABLE AmbienteHasPontoRef (
  ambienteFk INT NOT NULL,
  pontoRefFk INT NOT NULL,
  FOREIGN kEY(ambienteFk) REFERENCES Ambientes(ambienteId),
  FOREIGN KEY(pontoRefFk) REFERENCES PontosReferencias(pontoReferenciaId)
);