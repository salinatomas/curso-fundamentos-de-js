// Comparacion de valores primitivos
var x = 4
var y = '4'

// Comparacion de objetos
var sacha = {
  nombre: 'Sacha'
}


var otraPersona = {
 nombre: 'Sacha'
} // Retorna false

var otraPersona = {
  ...sacha
} // Retorna false

var otraPersona = sacha // Retorna true
// Sin en el objeto otraPersona cambiamos algunos atributos tambien se cambiaran en el objeto sacha
// Tambine podemos agragar atributos y se cambiaran en ambos objetos (otraPersona.edad = 28)
