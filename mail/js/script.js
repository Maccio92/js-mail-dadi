/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

// Chiedere all'utente di inserire la propria Mail
let userMail = prompt("Inserisci la tua Mail Gmail");
console.log(userMail);

// Creare l'array
let mailList = [ "valerio@gmail.com", "aldo@gmail.com", "giovanni@gmail.com", "giacomo@gmail.com", "marina@gmail.com", "claudia@gmail.com"];
console.log(mailList);


// Confrontare la mail dell'utente con la lista

for(i = 0; i < mailList.length; i ++){
    const element = mailList[i];

    if( userMail.toLowerCase() == element.toLowerCase() ){
        console.log("La tua mail è presente");
        document.querySelector('p').innerHTML = "La tua mail è presente.";
    } else {
        console.log("La tua mail non è presente. Registrati.");
        document.querySelector('p').innerHTML = "La tua mail non è presente. Registrati.";
    }
}