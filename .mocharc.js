module.exports = {  
    exit: true,
    bail: true,
    recursive: true,
    reporter: 'mochawesome',
    timeout: 4000,
    file: ['./test/api/api.js'] // delete if u wanna start others test :-)
  }