# Mochaopts
.mmocharc.js je konfigurovatelný soubor pro nastavení a spouštění mochy. Dřívě známy jako mocha.opts
Lze spustit příkazem 
```
❯ mocha --config test/.mocharc.js
```

Rozdíl oproti původnímu:
```
--exit
--bail
--recursive
--slow 1000
--file ./test/pretest.js
```
na nový:
```
'use strict'

module.exports = {  
  exit: true,
  bail: true,
  slow: 1000,
  recursive: true,
  file: ['./test/pretest.js']
}

```

# Příklad z dokumentace
ODkaz na příklad, který jsem (našel)[https://github.com/mochajs/mocha/blob/master/example/config/.mocharc.yml]
Celý yml se pak musí předělat do JSON.


## File
```
...
file : [
  '/path/to/some/file',
  '/path/to/some/other/file'
]
```

## Všeobecné nastavení
```
---ui tdd
--r ts-node/register
--r tsconfig-paths/register
```

se změnilo na:
```
{
    "require" : [
        "ts-node/register",
        "tsconfig-paths/register"
    ],
    "package": "./package.json",
    "ui": "tdd"
}
```