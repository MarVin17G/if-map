const db = require('./connection');

const create = async (nome, diretoriaFk, mapaAmbiente, videoRota) => {
  const query =
    'insert into ifmapdb.Ambientes (nome, diretoriaFk) values (?, ?);';
  const [rows] = await db.execute(query, [nome, diretoriaFk]);
  return {
    id: rows.insertId,
    nome,
    diretoriaFk,
  };
};

const getAll = async () => {
  const [rows] = await db.execute('select * from ifmapdb.Ambientes;');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.execute(
    'select * from ifmapdb.Ambientes where id = ?;',
    [id]
  );
  return rows[0];
};

const update = async (ambienteId, nome, diretoriaFk) => {
  await db.execute(
    `
  update ifmapdb.ambientes
  set nome = ?, diretoriaFk = ?
  where ambienteId = ?;
  `,
    [nome, diretoriaFk, ambienteId]
  );
  const idNumber = parseInt(ambienteId, 10);
  return {
    id: idNumber,
    nome,
    diretoriaFk,
  };
};

const remove = async (ambienteId) => {
  await db.execute('delete from ifmapdb.Ambientes WHERE ambienteId = ?', [
    ambienteId,
  ]);
};

const getByName = async (nome) => {
  const [rows] = await db.query(
    'select * from ifmabdb.Ambientes WHERE nome = ?',
    [nome]
  );
  return rows;
};

module.exports = {
  create,
  getByName,
  getAll,
  getById,
  update,
  remove,
};
