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
# Mochawesome
 - Stačí zadat do příkaczu --reporter mochawesome
 ```
mocha --reporter mochawesome test/api/station.js -timeout 20000
```
- důležité je u api přidávat tkzv. done() pod function v it. Více zde: https://mochajs.org/#asynchronous-code

## Reporting do test portalů
 - Easy peasy už vytvořeno
## Reporting do kibany?
 - Pokud bude čas vytvořit report v podobě kibany

# Vychytávky
## Knihovna Should
- Rozšiřuje možnosti testů
## Nejlepší dokumentace
https://devdocs.io/mocha
## Tagování testů
Využívá se příkaz -g / --grep (Z unixu, známý jako že vyhledává shodné znaky)
```
mocha --reporter mochawesome --grep '@tag' test/api/api.js -timeout 4000
```

## Watch Flags
Nejlepší vychytávka ze které jsem uplně odpálenej.
Spustíš test v CMD a kdykoliv v testu něco změníš tak se spustí znova. (tento mód se ukončuje klasicky ctrl-c)

Stačí přidat -w do spouštěcího příkazu
```
mocha --reporter mochawesome -w --grep '@tag' test/api/api.js -timeout 4000
```

## Mobile testing 
- velmi nápomocný (článek)[https://experitest.com/appium-blog/follow-this-guide-to-set-up-appium-automation-using-javascript/]

# ToDO
- Vyřešit zadávání argumentů, třeba u sčítání poslat za sebou víc dotazu na api a vyzkoušet zadávat ty to udaje automaticky a ozkoušet automatickou kontrolu výsledků