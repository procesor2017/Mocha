var should = require("should");
var request = require("request");
var chai = require("chai");
const { doesNotMatch } = require("assert");

var expect = chai.expect;
var urlBase = "http://data.pid.cz/stops/json/stops.json";


describe("Api tram station",function(){
    it("Expect response 200", function () {
        request(urlBase, function (error,response, body){
            console.log(error);
            console.log(response.statusCode);
            expect(response.statusCode).to.equal(200);
        });
    });
    it("Expect Albertov", function(){
        request.get(urlBase, function (error,response, body){
            console.log(error);
            console.log(response.statusCode);
            var _body = {};
            _body = JSON.parse(body);
            var expectValue = _body['stopGroups']['0']['name']
            if(_body.should.have.property('stopGroups')){
                expect(expectValue).to.equal('Albertov');
            };
        });
    });
});
