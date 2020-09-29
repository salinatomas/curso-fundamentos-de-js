const API_URL = 'https://rickandmortyapi.com/api/'
const PEOPLE_URL = 'character/:id'
const options = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise( (resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
    .get(url, options, data => {
      resolve(data)
    })
    .fail( () => reject(id) )
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

var ids = [1, 2, 3, 4, 5, 6, 7, 8]

// var promesas = ids.map(function(id) {
//   return obtenerPersonaje(id)
// })
var promesas = ids.map(id => obtenerPersonaje(id))

Promise
  .all(promesas)
  .then(personajes => {
    var cantPersonas = personajes.length

    for(var i=0; i<cantPersonas; i++) {
      console.log(`Hola, soy${personajes[i].name}`);
    }
  })
  .catch(onError)
