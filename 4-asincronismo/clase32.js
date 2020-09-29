const API_URL = 'https://rickandmortyapi.com/api/'
const PEOPLE_URL = 'character/:id'
const options = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise( (resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
    .get(url, options, function (data) { // Solo nos interesa la data que nos returna $.get
      resolve(data)
    })
    .fail( () => reject(id) )
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

obtenerPersonaje(5)
  .then(personaje => { // Es lo que queremos que se ejecute cuando se resuelva la Promesa
    console.log(`El personaje 1 es ${personaje.name}`);
  })
  .catch(onError) // Se va a ejecutar si la Promesa envía un error
