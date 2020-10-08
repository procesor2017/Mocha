# Přehled
Využív ám open api od ROPIDu která je na adrese http://data.pid.cz/stops/json/stops.json
Pro volání jsem zvolil knihovnu request.
Líp vypadá needle i když není tak moc používaný.

Musím vloit async aby kod byl synchroní, kvuli špatnému zavolání metody¨
```
Nefunkční kód:
describe('try list', () => {
    it("Get from list", function(done){
        var i = 0;
        var _body;
        while (i < testData.length){
            var numberOne = testData[i];
            var numberTwo = testData[i + 1];
            var numberThree = testData[i + 2];
            var newUrl = urlPostCalculator + "?expr=" + numberOne + "%2B" + numberTwo
            request.get(newUrl, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal(numberThree);
            })
            i += 3;
            done()
        }
    });
})
```