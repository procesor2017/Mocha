# Mocha - How to write some basic tests

## [Documentation](https://github.com/procesor2017/Mocha/tree/master/Documentations) | [Tesena](https://www.tesena.com/)

## Basic Info
Repository shows how to use Mocha with node.js library for testing API, mobile aplication and web aplication. 
you can find full documentation under folder Documentations, if you just wanna try these test, follow Install category.

## Install
### For Api and Web testing:

You can install everything with some orders:
```
npm install --save-dev mocha
npm install --save-dev mochawesome
npm i -D playwright
npm install chai

```

or you can just start:
```
npm test
```

### For mobile testing
You need install appium and AVD. 
More information you can find [here](http://appium.io/docs/en/about-appium/getting-started/).

## Resource
 - [Mocha documentation](https://devdocs.io/mocha)
 - [Full command for starting mocha](https://mochajs.org/#command-line-usage)




## What you can find here:
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
# Vychytávky
## Knihovna Should
- Rozšiřuje možnosti testů
## Nejlepší dokumentace

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