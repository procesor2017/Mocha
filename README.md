# Co je to mocha
Js testovací framework založený na BDD (Behavior test driven)
Mocha byla založena 2011´, není to klasický testovací framework, ani se nesnaží být.
Mocha zahrnuje jen základy a zbytek si pak rozšíříš dle toho co potřebuješ.

```
Bdd example:
describe("My First Test Suite", function() {
  it("introduces a test suite", function() {
    expect(true).toBe(true);
  });
});
```

# Co je třeba dodávat do mochy
## Assertion Library
- Nejpopulárnější je knihovna Chai.
- Nabízí tkzv. "fluent" syntax, kdy porovnávací operátory mohéou být změněny dohromady
- Umí tři základní porovnání:
 - Should
 - Expect
 - Assert
```
Příklad Chai assertion:
expect(foo).to.equal('foo')	     	//equality
expect(foo).to.not.equal('foo')	    //inequality
expect(foo).to.be.a('string')   	//type assertion
```

## Test spies, stubs and Mocks
 - Zatím se zdá že nejlepší je Sinon.js
 - Lze sním mockovat data , vytvářet Test Doubles a spies plus fakovat servery

## Api
- Využíváme knihovnu request, je dešpricated ale není se čehgo bát, nadále je nejpoužívanější
```
Příklad request knihovny:
const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```

# Reporting
## Reporting na podobě html reportů
 - pass
## Reporting do test portalů
 - Easy peasy už vytvořeno
## Reporting do kibany?
 - POkud bude čas vytvořit report v podobě kibany

# Vychytávky
# Knihovna Should
- Rozšiřuje možnosti testů