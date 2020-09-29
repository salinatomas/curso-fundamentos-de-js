function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

// Este this hace referencia al objeto Persona
Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}


//Este this hace referencia al scope global
Persona.prototype.soyAlto = () => {
  return this.altura > 1.8
}


// var altura = 1.81
// sacha.soyAlto() ---> true

var sacha = new Persona('Sacha', 'Lifszic', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.89)
