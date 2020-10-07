var should = require("should");
var request = require("request");
var chai = require("chai");
const { doesNotMatch } = require("assert");
const { url } = require("inspector");

var expect = chai.expect;
var urlBase = "http://data.pid.cz/stops/json/stops.json";

var urlCalculator = "http://api.mathjs.org/v4/?expr=1%2B1"
var urlPostCalculator = "http://api.mathjs.org/v4/"



describe("Reques :: GET", function(){
    it("Response :: Expect response 200", function (done) {
        request(urlBase, function (error,response){
            console.log(error);
            console.log(response.statusCode);
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it("GET :: Expect Albertov", function(done){
        request.get(urlBase, function (error,response, body){
            console.log(error);
            console.log(response.statusCode);
            var _body = {};
            _body = JSON.parse(body);
            var expectValue = _body['stopGroups']['0']['name']
            if(_body.should.have.property('stopGroups')){
                expect(expectValue).to.equal('Albertov');
            };
            done();
        });
    });
});

describe("Calculator :: GET/POST", function(){
    beforeEach('Ukázka Hooku, který se provede před každým testem',function(done){
        request(urlCalculator, function(error, response){
            expect(response.statusCode).to.not.equal(400);
            done();
        })
    })
    after("say hell!!!", function(){
        console.log('Hello world!!!!!!!!!!!!')
    })

    it("GET :: SUM 1 + 1", function(done){
        request.get(urlCalculator,function(error, response, body){
            console.log(error);
            console.log(response.statusCode)
            var _body = {};
            try{
                _body = JSON.parse(body);
            }
            catch(error){
                _body = {};
            }
            if(expect(response.statusCode).to.equal(200)){
                expect(_body).to.equal(2);
            }
            done();
        });
    });
    it("POST :: Some math in body", function(done){
        var formData = {"expr":["a = 1 + 1", "a / 2"]};
        request.post({
            headers: {'content-type' : 'application/json'},
            url: urlPostCalculator,
            body: JSON.stringify(formData)
        },
        function(error, response, body){
            var _body =  {}
            _body = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(_body['result']['0']).to.equal('2');
            done();
        });
    });
});

