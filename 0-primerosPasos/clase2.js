var nombre = 'Sacha', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

//var nombreCompleto = nombre + ' ' + apellido
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` //interpolacion de texto (podemos poner codijo js)

var str = nombre.substr(1, 4) //comienzo y que cantidad de caracteres


//Desafio
var nombresito = prompt('¿Cual es tu nombre?')
console.log('La ultima letra de tu nombre es ' + nombresito.charAt(nombresito.length - 1));
