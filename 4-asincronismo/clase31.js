const API_URL = 'https://rickandmortyapi.com/api/'
const PEOPLE_URL = 'character/:id'
const options = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $
  .get(url, options, callback)
  .fail(() => {
    console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`);
  })
}

obtenerPersonaje(1, (personaje) => {
  console.log(`Hola yo soy ${personaje.name}`);

  obtenerPersonaje(2, (personaje) => {
    console.log(`Hola yo soy ${personaje.name}`);

    obtenerPersonaje(3, (personaje) => {
      console.log(`Hola yo soy ${personaje.name}`);

      obtenerPersonaje(4, (personaje) => {
        console.log(`Hola yo soy ${personaje.name}`);

        obtenerPersonaje(5, (personaje) => {
          console.log(`Hola yo soy ${personaje.name}`);

          obtenerPersonaje(6, (personaje) => {
            console.log(`Hola yo soy ${personaje.name}`);

            obtenerPersonaje(7, (personaje) => {
              console.log(`Hola yo soy ${personaje.name}`);
            })
          })
        })
      })
    })
  })
})
