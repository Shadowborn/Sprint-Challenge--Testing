const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(hobbit) {
  return db('hobbits')
    .insert(hobbit, 'id')
    .then(ids => {
      return db('hobbits')
        .where({ id: ids[0] })
        .first();
    });
}

async function update(id, changes) {
  return undefined;
}

function remove(hobbit) {
  return db('hobbits')
  .del(hobbit, 'id');
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return db('hobbits')
    .findById(hobbit, 'id')
    .then(ids => {
      return db('hobbits')
        .where({ id: ids[0] })
        .first();
    });
}