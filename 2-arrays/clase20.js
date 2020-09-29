var sacha  = {
  nombre: 'Sacha',
  apellido: 'Lifszick',
  altura: 1.72,
  cantidadDeLibros: 111
}

var alan = {
  nombre: 'Alan',
  apellido: 'Pérez',
  altura: 1.86,
  cantidadDeLibros: 78
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gómez',
  altura: 1.85,
  cantidadDeLibros: 132
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadDeLibros: 90
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadDeLibros: 91
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  cantidadDeLibros: 182
}

var personas = [sacha, alan, martin, dario, vicky, paula]

// var acum = 0
//
// for (var i = acum; i < personas.length; i++) {
//   acum += personas[i].cantidadDeLibros
// }

const reducer = (acum, {cantidadDeLibros }) => acum + cantidadDeLibros
// Esta funcion debe tener esos parámetros para que reduce funcione

var totalDeLibros = personas.reduce(reducer, 0) // parametros: funcion y valor inicial del acumulador

console.log(`En total todos tinen ${totalDeLibros} libros`);
