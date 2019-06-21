const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(hobbit) {
  return db('games')
    .insert(hobbit, 'id')
    .then(ids => {
      return db('games')
        .where({ id: ids[0] })
        .first();
    });
}

async function update(id, changes) {
  return undefined;
}

function remove(hobbit) {
  return db('games')
  .del(hobbit, 'id');
}

function getAll() {
  return db('games');
}

function findById(id) {
  return db('games')
    .findById(hobbit, 'id')
    .then(ids => {
      return db('games')
        .where({ id: ids[0] })
        .first();
    });
}
