var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszick',
  edad: 28,
  peso: 75
}

console.log(`Al principio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

// function aumentarDePeso() {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2 // Gramos
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    // aumentaDePeso
    aumentarDePeso(sacha)
  } else if (random < 0.5) {
    // adelgazar
    adelgazar(sacha)
  }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`)
