// múltiples requst en Paralelo
const API_URL = 'https://rickandmortyapi.com/api/'
const PEOPLE_URL = 'character/:id'


const options = { crossDomain: true }

const onPeopleResponse = function(person) {
  console.log(`Hola yo soy ${person.name}`);
}

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, options, onPeopleResponse)
}

// No sabemos en que orden nos van a llegar
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
