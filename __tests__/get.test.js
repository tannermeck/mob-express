const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app)

const data = require('../data.js');

it('gets the dirtbike endpoint', async () => {
    const response = await request.get('/dirtbikes');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
})
it('gets the dirtbike object', async () => {
    const response = await request.get('/dirtbikes/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(data[0]);
})
it('get the dirtbike brand', async () => {
    const response = await request.get('/dirtbikes/brands/kawasaki');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(data[0])
})