const supertest = require('supertest');

const server = require('./server.js');

const db = require('../data/dbConfig.js');

const { insert, remove } = require('../games/gamesModel');

describe('Server test', () => {

    beforeEach(async () => {
        await db('games').truncate();
      });

    describe('Can reach GET /', () => {
        // asynchronous test need to either return the promise
        it('responds with 200 OK', () => {
            return supertest(server)
                .get('/')
                .expect(200);
        });
        it('responds { api: "up" }', async () => {
            await supertest(server)
                .get('/')
                .then(res => {
                    expect(res.body).toEqual({ api: 'up' });
                });
        });
    })
    describe('Can reach GET /games', () => {
        // asynchronous test need to either return the promise
        it('responds with 200 OK', () => {
            return supertest(server)
                .get('/games')
                .expect(200);
        });
    })
    describe('Can reach POST /games', () => {
        // asynchronous test need to either return the promise
        it('should insert games', async () => {
            await insert({ title: 'World of Warcraft', genre:'Fantasy', releaseYear: '2002' });
            await insert({ title: 'Halo', genre:'scifi', releaseYear: '2004' });
      
            const games = await db('games');
      
            expect(games).toHaveLength(2);
          });

          it('Should display 422 success', async () => {
            await supertest(server)
                .post('/games')
                expect(422);
        });
    })
});