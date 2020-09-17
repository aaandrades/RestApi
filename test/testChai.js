var expect = require('chai').expect;
var request = require('request');


it('up Server', function(done) {
    request('http://localhost:3000', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Response Root', function(done) {
    request('http://localhost:3000', function(error, response, body) {
        expect(body).to.equal('Api Rest Working');
        done();
    });
});