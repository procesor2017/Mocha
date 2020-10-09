# .Mocharc.js
## Basic
Config file for set up your mocha. It replace mocha.opts. 

Example
```
module.exports = {  
    exit: true,
    bail: true,
    recursive: false,
    reporter: 'mochawesome',
    timeout: 20000,
    file: ['./test/api/api.js', './test/web/web.js'] // delete if u wanna start others test :-)
  }

```

##  Most used Commands
Full command you can find [HERE](https://mochajs.org/#command-line-usage)

| Command | describe |
| exit | Force Mocha to quit after tests complete |
| bail | Abort ("bail") after first test failure |
| check-leaks | Check for global variable leaks  |
| timeout | Specify test timeout threshold (in milliseconds) |
| reporter | Specify reporter to use |
| config | Path to config file |
| recursive | Look for tests in subdirectories |
| watch | Watch files in the current working directory for changes |

## Different between mocha.opts and .mocharc.js
Old file was write as command:
```
--exit
--bail
--recursive
--slow 1000
--file ./test/pretest.js
```

New file has json structure
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