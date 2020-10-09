# .Mocharc.js
## Bookmarks
- [Basic](#assertion-library)
- [Most-used-Commands](#request-library)
- [Different between mocha.opts and .mocharc.js](#different-between-mochaopts-and-mocharcjs)

## Basic
Mocha supports configuration files, typical of modern command-line tools, in several formats as js, json or yml. It replace mocha.opts. 

If no custom path was given, and if there are multiple configuration files in the same directory, Mocha will search for — and use — only one. The priority is:
```
.mocharc.js
.mocharc.yaml
.mocharc.yml
.mocharc.jsonc
.mocharc.json
```

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
|:----------:|:-------------:|
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