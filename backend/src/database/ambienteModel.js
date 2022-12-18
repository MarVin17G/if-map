const db = require('./connection');

const create = async (name) => {
  const query = 'insert into IFMapDB.ambientes (name) values (?);';
  const [rows] = await db.execute(query, [name]);
  return {
    id: rows.insertId,
    name,
    quantity,
  };
};

const getAll = async () => {
  const [rows] = await db.execute('select * from IFMapDB.ambientes;');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.execute(
    'select * from IFMapDB.ambientes where id = ?;',
    [id]
  );
  return rows[0];
};

const update = async (id, name, quantity) => {
  await db.execute(
    `
  update IFMapDB.ambientes
  set name = ?, quantity = ?
  where id = ?;
  `,
    [name, quantity, id]
  );
  // gambi
  const idNumber = parseInt(id, 10);
  return {
    id: idNumber,
    name,
    quantity,
  };
};

const remove = async (id) => {
  await db.execute('delete from IFMapDB.ambientes WHERE id = ?', [id]);
};

const getByName = async (name) => {
  const [rows] = await db.query(
    'select * from IFMapDB.ambientes WHERE name = ?',
    [name]
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
