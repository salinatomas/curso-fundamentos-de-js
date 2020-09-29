const API_URL = 'https://rickandmortyapi.com/api/'
const PEOPLE_URL = 'character/:id'


const mortyUrl = `${API_URL}${PEOPLE_URL.replace(':id', 2)}`
const options = { crossDomain: true } // indica donde se va a hacer el request, en este caso en otro lugar que no sea este documento (en la web)
// $get() es una funciona de jQuery y sirve para hacer request
// .replace es un metodo que tienen todos los strings

const onPeopleResponse = function(person) { // puede ser cualquier nombre y la sacamos gracias a arguments
  console.log(arguments); // arguments es una variable que tinen todas las funciones
  console.log(`Hola yo soy ${person.name}`);
} // Nuestro famoso callback, se ejecutará solamente cuando el servidor responda

$.get(mortyUrl, options, onPeopleResponse) // Son los parámetros que pide jQuery
