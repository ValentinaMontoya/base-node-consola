require('colors')
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./helpers/yargs')

console.clear()

crearArchivo(argv.b, argv.l, argv.h)
  .then((archivo) => console.log(`Se ha creado el ${archivo.green}`))
  .catch(console.error)
