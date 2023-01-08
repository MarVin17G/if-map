const db = require('./connection');

const create = async (nome, gestorPk) => {
  const query = 'insert into ifmapdb.Diretorias (nome, gestorPk) values (?,?)';
  const [rows] = await db.execute(query, [nome, gestorPk]);

  return {
    id: rows.insertId,
    nome,
    gestorPk,
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

const update = async (nome, diretoriaId, gestorPk) => {
  const query =
    'update ifmapdb.Diretorias set nome = ?, set gestorPk = ? where diretoriaId = ?';
  const [rows] = await db.execute(query, [nome, gestorPk, diretoriaId]);

  return {
    nome,
    gestorPk,
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
