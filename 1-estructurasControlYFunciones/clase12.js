var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszick',
  edad: 28,
  ingeniero: false,
  cocinero: true,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: false
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gómez',
  edad: 13
}


const MAYORIA_DE_EDAD = 18

// const EsMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }

// const EsMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD
// podemos ahorrarnos los parentesis si solo hay un parámetro
// si la funcion solo retorna algo no hace falta poner return ni las llaves
const EsMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
// funcion que recibe como parámetro un objeto con una edad y nos retornara true o false
const EsMenorDeEdad = ({ edad }) => !EsMayorDeEdad({edad}) //Reto


function imprimirSiEsMayorDeEdad(persona) {
  if (EsMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else if(EsMenorDeEdad(persona)){
    console.log(`${persona.nombre} es menor de edad`);
  }
}


function permitirAcceso(persona) {
  if(!EsMayorDeEdad(persona)) {
    console.log('ACCESO DENEGADO');
  }
}
