function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

// El prototipo es un objeto más de JS
Persona.prototype.saludar = () => {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
} //ERROR


// Es muy importante donde ponemos las funciones que va a tener el prototipo
Persona.prototype.soyAlto = () => this.altura > 1.8 //ERROR
// la arrow function provoca un tipo de error con respecto a this

var sacha = new Persona('Sacha', 'Lifszic', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.89)
