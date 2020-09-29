var contador = 0

const llueve = () => Math.random() < 0.25

do { //Vamos a hacer algo al menos una vez hasta que se cumpla la condición
  contador++
} while (!llueve())

if(contador > 1) {
  console.log(`Fui a ver si llovía ${contador} veces`)
} else {
  console.log(`Fui a ver si llovía ${contador} vez`)
}
