exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('games')
    .truncate()
    .then(function() {
      return knex('games').insert([
        { title: 'Blob', genre: 'Blah', releaseYear: '3' },
        { title: 'Sob', genre: 'Meh', releaseYear: '2' },
        { title: 'Glob', genre: 'Weh', releaseYear: '1' },
        { title: 'Flob', genre: 'Pff', releaseYear: '6' },
      ]);
    });
};
