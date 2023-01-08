const db = require('./connection');

const create = async (nome, email, matricula, senha) => {
  const query =
    'insert into ifmap.gestores (nome, email, matricula, senha) values (?,?,?,?)';
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
  const query = 'select * from ifmap.gestores where email = ?';
  const [rows] = await db.execute(query, [email]);
  return rows[0];
};

const getAll = async () => {
  const query = 'select * from ifmap.gestores';
  const [rows] = await db.execute(query);
  return rows;
};

const getById = async (gestorId) => {
  const query = 'select * from ifmap.gestores where id = ?';
  const [rows] = await db.execute(query, [gestorId]);
  return rows[0];
};

const update = async (nome, email, matricula, senha, gestorId) => {
  const query =
    'update ifmap.gestores set nome = ?, email = ?, matricula = ?, senha = ? where id = ?';
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
  const query = 'delete from ifmap.gestores where id = ?';
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
