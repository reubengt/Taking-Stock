const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router');

test('initialise', (t) => {
  let number = 2;
  t.equal(number , 2 , 'Should return 2');
  t.end();
})

test('status code is 200 for home route', (t) => {
  supertest(router)
  .get('/')
  .expect(200)
  .expect('Content-type', /html/)
  .end((err, res) => {
    t.error(err);
    t.equal(res.statusCode, 200, 'should return 200');
    t.end();
  })
});

test('is our css file working? - testing public routes ', (t) => {
  supertest(router)
  .get('/public/style.css')
  .expect(200)
  .expect('Content-type', /css/)
  .end((err, res) => {
    t.error(err);
    t.equal(res.statusCode, 200);
    t.end();
  })
});

test('is our front-end request receiving a valid response', (t) =>{
  supertest(router)
  .get(`/search?q=coffee`)
  .expect(200)
  .expect('Content-type', /json/)
  .end((err,res) => {
    t.error(err);
    t.end();
  });
});

test('status code is 404 for invalid route', (t) => {
  supertest(router)
  .get('/anyrandomendpoint')
  .expect(404)
  .expect('Content-type', /html/)
  .end((err, res) => {
    t.error(err);
    t.equal(res.statusCode, 404, 'Oh drag! 404 not found.');
    t.end();
  })
});
