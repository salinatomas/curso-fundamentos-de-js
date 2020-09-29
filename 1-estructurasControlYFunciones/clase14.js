var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszick',
  edad: 28,
  peso: 75
}

console.log(`Al principio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3 // Retorna true o false
const realizaDeporte = () => Math.random() < 0.4

const META = sacha.peso - 3 // Tenes que adelgazar 3 kilos
var dias = 0

while (sacha.peso > META) { // Mientra Sacha no llegue a la meta
  if(comeMucho()) {
    aumentarDePeso(sacha)
  }
  if(realizaDeporte) {
    adelgazar(sacha)
  }
  dias += 1 // va a modificar a var dias
}

console.log(`Pasaron ${dias} dias hasta que ${sacha.nombre} adelgazó 3gk`);
