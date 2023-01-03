CREATE DATABASE IF NOT EXISTS ifmapdb;
CREATE TABLE Gestores (
	gestorId INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	matricula VARCHAR(12) NOT NULL,
	-- tratar no back, n vou salvar a senha bruta
	senha VARCHAR(50) NOT NULL,
	PRIMARY KEY(gestorId)
) CREATE TABLE Diretorias (
	diretoriaId INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(12) NOT NULL,
	gestorPk INT NOT NULL,
	PRIMARY KEY(diretoriaId),
	FOREIGN KEY(gestorPk) REFERENCES Gestores(gestorId)
) CREATE TABLE Ambientes (
	ambienteId INT NOT NULL AUTO_INCREMENT,
	diretoriaPk INT NOT NULL,
	mapaAmbiente MEDIUMBLOB NOT NULL,
	videoRota VARCHAR NOT NULL,
	PRIMARY KEY(ambienteId),
	FOREIGN KEY(diretoriaPk) REFERENCES Diretorias(diretoriaId)
) CREATE TABLE PontosReferencias (
	pontoReferenciaId INT NOT NULL AUTO_INCREMENT,
	descricao VARCHAR(100) NOT NULL,
	PRIMARY KEY(pontoReferenciaId)
) CREATE TABLE AmbienteHasPontoRef (
	ambientePk INT NOT NULL,
	pontoRefPk INT NOT NULL,
	FOREIGN kEY(ambientePk) REFERENCES Ambientes(ambienteId),
	FOREIGN KEY(pontoRefPk) REFERENCES PontosReferencias(pontoReferenciaId)
)