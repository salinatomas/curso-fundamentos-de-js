const API_URL = 'https://rickandmortyapi.com/api/'
const PEOPLE_URL = 'character/:id'


const options = { crossDomain: true }

// con esto ponemos orden pero perdemos paralelismo
function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, options, function(person) {
    console.log(`Hola yo soy ${person.name}`);

    if(callback) {
      callback()
    }
  })
}

// si no ponemos la palabra function, obtenerPersonaje(2) se ejecutará primero que obtenerPersonaje2(1) por la cola de tareas
//obtenerPersonaje(1, obtenerPersonaje(2))

// Luego de obtener el personaje 1 vamos a obtener el personaje 2...
obtenerPersonaje(1, function() {
  obtenerPersonaje(2, function() {
    obtenerPersonaje(3, function() {
      obtenerPersonaje(4, function() {
        obtenerPersonaje(5, function() {
          obtenerPersonaje(6, function() {
            obtenerPersonaje(7)
          })
        })
      })
    })
  })
}) // A esto se lo conoce CallbackHell o el Infierno de los Callbacks
