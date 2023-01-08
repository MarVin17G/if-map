const db = require('./connection');

const create = async (nome, email, matricula, senha) => {
  const query =
    'insert into ifmapdb.Gestores (nome, email, matricula, senha) values (?,?,?,?)';
  const [rows] = await db.execute(query, [nome, email, matricula, senha]);

  return {
    id: rows.insertId,
    nome,
    email,
    matricula,
    senha,
  };
};

const getByEmail = async (email) => {
  const query = 'select * from ifmapdb.Gestores where email = ?';
  const [rows] = await db.execute(query, [email]);
  return rows[0];
};

const getAll = async () => {
  const query = 'select * from ifmapdb.Gestores';
  const [rows] = await db.execute(query);
  return rows;
};

const getById = async (gestorId) => {
  const query = 'select * from ifmapdb.Gestores where gestorId = ?';
  const [rows] = await db.execute(query, [gestorId]);
  return rows[0];
};

const update = async (nome, email, matricula, senha, gestorId) => {
  const query =
    'update ifmapdb.Gestores set nome = ?, email = ?, matricula = ?, senha = ? where gestorId = ?';
  const [rows] = await db.execute(query, [
    nome,
    email,
    matricula,
    senha,
    gestorId,
  ]);

  return {
    nome,
    email,
    matricula,
  };
};

const remove = async (gestorId) => {
  const query = 'delete from ifmapdb.Gestores where gestorId = ?';
  await db.execute(query, [gestorId]);
};

module.exports = {
  create,
  getByEmail,
  getAll,
  getById,
  update,
  remove,
};
