/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// Generare 2 numeri random
let number1 = Math.floor(Math.random() * 7);
let number2 = Math.floor(Math.random() * 7);
console.log(number1, number2);

let print = document.querySelector('p');
let result = document.querySelector('h2')

// Confrontare i 2 numeri
if( number1 > number2 ){
    let print = number1;
    document.querySelector('p').innerHTML = (number1);
    document.querySelector('h2').innerHTML = ("Ha vinto il giocatore");
    console.log(number1);

} else if (number1 < number2){
    let print = number2;
    document.querySelector('p').innerHTML = (number2);
    document.querySelector('h2').innerHTML = ("Ha vinto il giocatore");
    console.log(number2);
} else{
    document.querySelector('h2').innerHTML = "I lanci hanno ottenuto lo stesso risultato";
}
