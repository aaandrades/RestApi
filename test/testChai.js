var expect = require('chai').expect;
var request = require('request');
var chai = require('chai');
var chaiHttp = require('chai-http');


chai.use(chaiHttp);

var host = 'http://localhost:3000';

describe('Testing API REST', function() {

    it('STATUS/ Up Server', function(done) {
        request(host, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('REQUEST/ Response Root', function(done) {
        request(host, function(error, response, body) {
            expect(body).to.equal('Api Rest Working');
            done();
        });
    });

    it('GET/ Obtain all products', function(done) {
        request(host + '/obtainProduct', function(error, response, body) {
            expect(typeof(body)).to.be.an('string').but.not.empty;
            done();
        });
    });

    it('PUT/ Update a Product', function(done) {
        var id = '123123';
        chai
            .request(host)
            .post('/updateProduct/' + id)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                nombre_producto: 'PruebaChai',
                caracteristicas: 'Probando desde Chai',
                fecha_vencimiento: '15/05/2021'
            }).end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
                    done();
                }
            });
    });

    it('POST/ Search a Product', function(done) {
        var id = '123123';
        chai
            .request(host)
            .post('/searchProduct/' + id)
            .set('content-type', 'application/x-www-form-urlencoded')
            .end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
                    done();
                }
            });
    });
});