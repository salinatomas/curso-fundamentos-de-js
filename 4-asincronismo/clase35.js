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

async function imprimirPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7, 8]
  var promesas = ids.map(id => obtenerPersonaje(id))

// Para que await funcione, debemos utilizar un bloque try-catch
  try {
    var personajes = await Promise.all(promesas)  // La ejecucion de la funcion se detendrá acá, para que cuando todas las promesas esten resueltas, las guarde en una variable
    console.log(personajes)
  } catch(id) { // Error
    onError(id)
  }
}

imprimirPersonajes()

console.log('Hola');
