function heredaDe (prototipoHijo, prototipoPadre) { // Herencia prototipal
  var fn = function () {} // Para no pisar al protoPadre creamos esta variable
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function() {
  return this.altura > 1.8
}

function Desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona) // Mecanismo de herencia
// Hay que llamarlo inmediatamente despues de crear la funcion

Desarrollador.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un Desarrollador/a`);
} //Vamos a pisar el metodo saludar de Persona


// var sacha = new Persona('Sacha', 'Lifszic', 1.72)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Persona('Arturo', 'Martinez', 1.89)
