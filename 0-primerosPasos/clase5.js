var nombre = 'Sacha'
// este nombre esta en window.nombre

function imprimirNombreMayusculas(nombre) { //solo modificamos la var nombre interna
  nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreMayusculas(nombre) //podemos poner como parametro hasta 'pepito'
