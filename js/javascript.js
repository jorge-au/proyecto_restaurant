
function juego(){
    var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];
    var numero = prompt('Ingrese un numero entre 0 y 25');
    var alfabeto = prompt('Ingrese una letra del abecedario: de la A a la Z');

    if(alfabeto == letras[numero]){
        alert('Felicidades Ganaste!!');
    } else {
        alert('Que pena perdiste, sigue participando');
    }
}
