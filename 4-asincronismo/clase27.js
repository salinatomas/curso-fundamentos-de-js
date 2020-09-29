// console.log('a');
// setTimeout(() => console.log('b'), 0)
// console.log('c');

setTimeout(() => console.log('d'), 2000) // Esto va a la cola de tareas, y hasta que no se termine de ejecutar el programa principal no aparecera en pantalla

for(var i = 0; i < 10000000000; i++) {

}

// Si bien el setTimeout() ya esta listo en dos segundos, el ciclo for hace que se retrase todo el proceso y que el setTimeout tarde mas de 1 minuto 
