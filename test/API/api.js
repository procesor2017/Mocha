var should = require("should");
var request = require("request");
var http = require("http");
var chai = require("chai");
const { doesNotMatch } = require("assert");
const { url } = require("inspector");
const { SSL_OP_EPHEMERAL_RSA } = require("constants");

var expect = chai.expect;
var urlBase = "http://data.pid.cz/stops/json/stops.json";

var urlCalculator = "http://api.mathjs.org/v4/?expr=1%2B1"
var urlPostCalculator = "http://api.mathjs.org/v4/"

var testData = [1,1,'2',2,2,'4'];


describe("Reques :: GET", function(){
    it("Response :: Expect response 200", function (done) {
        request(urlBase, function (error,response){
            console.log(error);
            console.log(response.statusCode);
            expect(response.statusCode).to.equal(200);
        });
        done();
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

describe("Claculator :: Loop with http", function(){
    it("Must use http, bcs its async @tag", function(done){
        var i = 0;
        var _body;
        // začátek cyklu
        while (i < testData.length){
            var numberOne = testData[i];
            var numberTwo = testData[i + 1];
            var numberThree = testData[i + 2];
            var newUrl = urlPostCalculator + "?expr=" + numberOne + "%2B" + numberTwo
            http.get(url, res => {
                res.setEncoding("utf8");
                let body = "";
                res.on("data", data => {  // response.on('data', function(data){)
                  body += data;
                });
                res.on("end", () => {   // ničím asychronitu tím to příkazem který se má provést vždy na konci
                  body = JSON.parse(body);
                  expect(body).to.equal(numberThree);
                });
            });
            i += 3;
        };
        done();
    });
});