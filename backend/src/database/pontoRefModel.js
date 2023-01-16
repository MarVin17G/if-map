const db = require('./connection');

const create = async (descricao) => {
  const query = 'insert into ifmapdb.PontosReferencias (descricao) values (?)';
  const [rows] = await db.execute(query, [descricao]);

  return {
    id: rows.insertId,
    descricao,
  };
};

const getAll = async () => {
  const query = 'select * from ifmapdb.PontosReferencias';
  const [rows] = await db.execute(query);
  return rows;
};

const getById = async (PontoReferenciaId) => {
  const query =
    'select * from ifmapdb.PontosReferencias where PontoReferenciaId = ?';
  const [rows] = await db.execute(query, [PontoReferenciaId]);
  return rows[0];
};

const update = async (descricao, PontoReferenciaId) => {
  const query =
    'update ifmapdb.PontosReferencias set descricao = ?, where PontoReferenciaId = ?';
  const [rows] = await db.execute(query, [descricao, PontoReferenciaId]);

  return {
    descricao,
    PontoReferenciaId,
  };
};

const remove = async (PontoReferenciaId) => {
  const query =
    'delete from ifmapdb.PontosReferencias where PontoReferenciaId = ?';
  await db.execute(query, [PontoReferenciaId]);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
