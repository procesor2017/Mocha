module.exports = {  
    exit: true,
    bail: true,
    recursive: false,
    reporter: 'mochawesome',
    timeout: 20000,
    file: ['./test/api/api.js', './test/web/playwright.js'] // delete if u wanna start others test :-)
  }