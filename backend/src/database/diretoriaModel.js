const db = require('./connection');

const create = async (nome, gestorFk) => {
  const query = 'insert into ifmapdb.Diretorias (nome, gestorFk) values (?,?)';
  const [rows] = await db.execute(query, [nome, gestorFk]);

  return {
    id: rows.insertId,
    nome,
    gestorFk,
  };
};

const getAll = async () => {
  const query = 'select * from ifmapdb.Diretorias';
  const [rows] = await db.execute(query);
  return rows;
};

const getById = async (diretoriaId) => {
  const query = 'select * from ifmapdb.Diretorias where diretoriaId = ?';
  const [rows] = await db.execute(query, [diretoriaId]);
  return rows[0];
};

const update = async (nome, diretoriaId, gestorFk) => {
  const query =
    'update ifmapdb.Diretorias set nome = ?, set gestorFk = ? where diretoriaId = ?';
  const [rows] = await db.execute(query, [nome, gestorFk, diretoriaId]);

  return {
    nome,
    gestorFk,
  };
};

const remove = async (diretoriaId) => {
  const query = 'delete from ifmapdb.Diretorias where diretoriaId = ?';
  await db.execute(query, [diretoriaId]);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
