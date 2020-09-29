// Definiendo un prototipo
function Persona(nombre, apellido, altura) {
  this.nombre = nombre // This hace referencia al objeto persona
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () { // Dentro del prototipo de persona, creame un atributo saludar que sea una function
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

// Reto:
Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}

var sacha = new Persona('Sacha', 'Lifszic', 1.72) // new genera un nuevo objeto
var erika = new Persona('Erika', 'Luna', 1.63)
var arturo = new Persona('Arturo', 'Martinez', 1.81)
