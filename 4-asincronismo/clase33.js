const API_URL = 'https://rickandmortyapi.com/api/'
const PEOPLE_URL = 'character/:id'
const options = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise( (resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
    .get(url, options, data => { // neustro famosos callback
      resolve(data)
    })
    .fail( () => reject(id) )
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
  .then( personaje1 => { // Cuando resivamos al personaje, queremos que nos retorne otra promesa
    console.log(`El personaje 1 es ${personaje1.name}`);
    return obtenerPersonaje(2)
  })
  .then( personaje2 => {
    console.log(`El personaje 2 es ${personaje2.name}`);
    return obtenerPersonaje(3)
  })
  .then( personaje3 => {
    console.log(`El personaje 3 es ${personaje3.name}`);
    return obtenerPersonaje(4)
  })
  .then( personaje => {
    console.log(`El personaje 4 es ${personaje.name}`);
    return obtenerPersonaje(5)
  })
  .then( personaje => {
    console.log(`El personaje 5 es ${personaje.name}`);
    return obtenerPersonaje(6)
  })
  .then( personaje => {
    console.log(`El personaje 6 es ${personaje.name}`);
    return obtenerPersonaje(7)
  })
  .then( personaje => {
    console.log(`El personaje 7 es ${personaje.name}`);
  })
  .catch(onError)
