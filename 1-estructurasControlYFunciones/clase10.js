var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszick',
  edad: 18,
  ingeniero: false,
  cocinero: true,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: false
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `);

  if (persona.ingeniero) {
    console.log('Ingeniero');
  } else {
    console.log('No es ingeniero');
  }

  if (persona.cocinero) {
    console.log('Cocinero');
  }

  if (persona.cantante) {
    console.log('Cantante');
  }

  if (persona.dj) {
    console.log('DJ');
  }

  if (persona.guitarrista) {
    console.log('Guitarrista');
  }

  if (persona.drone) {
    console.log('Piloto de Drone');
  }

}
imprimirProfesiones(sacha)

// Desafío:
function imprimirSiEsMayorDeEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}
imprimirSiEsMayorDeEdad(sacha)
