class Persona {
  constructor (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }

  soyAlto() {
    return this.altura > 1.8
  }

}

class Desarrollador extends Persona{ // extends = herencia
  constructor(nombre, apellido, altura) {
    // No podemos utilizar this hasta que llamemos al constructor de la clase padre 'Persona'
    super(nombre, apellido, altura) // Para eso utilizamos super
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un Desarrollador/a`);
  }

}

var sacha = new Persona('Sacha', 'Lifszic', 1.72)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.89)

sacha.saludar()
arturo.saludar()
