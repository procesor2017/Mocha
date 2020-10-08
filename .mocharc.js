module.exports = {  
    exit: true,
    bail: true,
    recursive: false,
    reporter: 'mochawesome',
    timeout: 10000,
    file: ['./test/api/api.js', './test/web/web.js'] // delete if u wanna start others test :-)
  }