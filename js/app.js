/*Crea una web con bootstrap y js, que contenga un botón comenzar el juego,
en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, 
al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, 
si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */


function generarNumero(){
    let num = document.getElementById("numeroUsuario").value;
    console.log(num);
    let numMagico = Math.floor(Math.random() * 10) + 1;
    if (num == numMagico) {
        alert("Felicidades adivino el numero magico");
    } else if (num > numMagico) {
        alert("Su numero es mayor al numero magico");
    } else if (num < numMagico) {
        alert("Su numero es menor al numero magico");
    }
    document.write(numMagico);
    console.log(numMagico);
}