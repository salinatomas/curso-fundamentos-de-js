var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszick',
  edad: 28
}
var dario = {
  nombre: 'Dario',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreMayusculas(persona) {
  //var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(sacha)
imprimirNombreMayusculas(dario)
//imprimirNombreMayusculas({ nombre: 'Pepito' })
// imprimirNombreMayusculas({ apellido: 'Gomez' })


// Reto
function imprimirNombreYEdad(nye) {
  var { nombre, edad } = nye
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(sacha)
imprimirNombreYEdad(dario)
imprimirNombreYEdad({ nombre: 'Tomas', edad: 15 })
