const db = require('./connection');

const create = async (nome, gestorPk) => {
  const query = 'insert into ifmap.Diretorias (nome, gestorPk) values (?,?)';
  const [rows] = await db.execute(query, [nome, gestorPk]);

  return {
    id: rows.insertId,
    nome,
    gestorPk,
  };
};

const getAll = async () => {
  const query = 'select * from ifmap.Diretorias';
  const [rows] = await db.execute(query);
  return rows;
};

const getById = async (diretoriaId) => {
  const query = 'select * from ifmap.Diretorias where id = ?';
  const [rows] = await db.execute(query, [diretoriaId]);
  return rows[0];
};

const update = async (nome, diretoriaId) => {
  const query = 'update ifmap.Diretorias set nome = ? where id = ?';
  const [rows] = await db.execute(query, [nome, diretoriaId]);

  return {
    nome,
  };
};

const remove = async (diretoriaId) => {
  const query = 'delete from ifmap.Diretorias where id = ?';
  await db.execute(query, [diretoriaId]);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
