create table tbl_ponto_referencia (
	id int identity (1, 1),
	descricao varchar(300),
	imagem varchar(100)

	constraint pk_ponto_referencia primary key (id)
)

create table tbl_rota (
	id int identity (1, 1),
	video varchar (100)

	constraint pk_rota primary key (id)
)

create table tbl_rotaXponto_referencia (
	id int identity (1, 1),
	fk_rota int,
	fk_ponto int

	constraint pk_rotaXponto primary key (id),
	constraint fk_rota foreign key (fk_rota) references tbl_rota (id), 
	constraint fk_rotaPonto_II foreign key (fk_ponto) references tbl_ponto_referencia (id)
)

create table tbl_diretoria (
	id int identity (1, 1),
	nome varchar(100)

	constraint pk_diretoria primary key (id)
)

create table tbl_gestor (
	id int identity (1, 1),
	nome varchar(100),
	matricula int

	constraint pk_gestor primary key (id) 
)

create table tbl_getorXdiretoria (
	fk_gestor int,
	fk_diretoria int

	constraint fk_gestorDiretoria_I foreign key (fk_gestor) references tbl_gestor (id) on delete set null, 
	constraint fk_gestorDiretoria_II foreign key (fk_diretoria) references tbl_diretoria (id)
)


create table tbl_ambiente (
	id int identity (1, 1),
	fk_rotaXponto int,
	fk_diretoria int,
	nome varchar(100),
	mapa varchar(100), -- imagem
	
	constraint pk_ambiente primary key (id),
	constraint fk_id_rotaXponto foreign key (fk_rotaXponto) references tbl_rotaXponto_referencia (id) on delete cascade,
	constraint fk_id_diretoria foreign key (fk_diretoria) references tbl_diretoria (id) on delete set NULL
)