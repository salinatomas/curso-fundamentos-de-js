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


const MAYORIA_DE_EDAD = 18 // este dato no es tan variable si no que es constante

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD // Retorna true o false
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}
