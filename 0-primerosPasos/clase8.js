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

function cumpleanos(persona) { //retorname un nuevo objeto pero aumentale la edad
  return {
    ...persona, // desglosar el objeto
    edad: persona.edad + 1
  }
}

var sachaMasViejo = cumpleanos(sacha) //ahora tenemos al Sacha mas viejo y a Sacha
