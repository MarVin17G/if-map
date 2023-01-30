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

const getById = async (ambienteId) => {
  const query = 'select * from ifmapdb.Ambientes where ambienteId = ?';
  const [rows] = await db.execute(query, [ambienteId]);
  return rows[0];
};

const update = async (
  nome,
  diretoriaFk,
  mapaAmbiente,
  videoRota,
  ambienteId
) => {
  await db.execute(
    `
  update ifmapdb.Ambientes
  set nome = ?, diretoriaFk = ?, mapaAmbiente = ?, videoRota = ?
  where ambienteId = ?;
  `,
    [nome, diretoriaFk, mapaAmbiente, videoRota, ambienteId]
  );
  const idNumber = parseInt(ambienteId, 10);
  return {
    id: idNumber,
    nome,
    diretoriaFk,
    mapaAmbiente,
    videoRota,
  };
};

const remove = async (ambienteId) => {
  await db.execute('delete from ifmapdb.Ambientes WHERE ambienteId = ?', [
    ambienteId,
  ]);
};

const getByName = async (nome) => {
  const [rows] = await db.query(
    // 'select * from ifmabdb.Ambientes WHERE nome LIKE = ?',
    // select * from Ambientes where nome like '%diacon%';
    'select * from ifmapdb.Ambientes where nome like ?',
    ['%' + nome + '%']
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
