const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router');

test('initialise', (t) =>{
  let number = 2;
  t.equal(number , 2 , 'Should return 2');
  t.end();
})
