const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router');

test('initialise', (t) =>{
  let number = 2;
  t.equal(number , 2 , 'Should return 2');
  t.end();
})

test('status code is 200', (t) => {
  supertest(router)
  .get('/')
  .expect(200)
  .expect('Content-type', /html/)
  .end((err, res) => {
    t.error(err);
    t.equal(res.statusCode, 200, 'should return 200')
    t.end();
  })
});
