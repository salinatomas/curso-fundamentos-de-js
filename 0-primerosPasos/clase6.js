var sacha = { // JSON
  nombre: 'Sacha',
  apellido: 'Lifszick',
  edad: 28
}
var dario = {
  nombre: 'Dario',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreMayusculas({ nombre }) { //solo me interesa el atributo nombre. Podemos pasarle otros atributos que nos interesas con comas
  console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(sacha)
imprimirNombreMayusculas(dario)
imprimirNombreMayusculas({ nombre: 'Pepito' })

//imprimirNombreMayusculas() Da error
//imprimirNombreMayusculas({ apellido: 'Lifszick' }) Da error
