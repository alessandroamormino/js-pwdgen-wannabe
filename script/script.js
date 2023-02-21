/*
x Chiedo all'utente il suo nome
x Chiedo all'utente il suo cognome 
x Chiedo all'utente il suo colore preferito 
x Dichiaro una variabile con un numero casuale da 0 a 99
x Creo una password concatenando le variabili precedenti e la memorizzo in una variabile
x Stampo sulla pagina la password generata in chiaro
*/

const userName = prompt('Inserisci il tuo nome');
const userLastName = prompt('Inserisci il tuo cognome');
let userFavColor = prompt('Inserisci il tuo colore preferito');
let randomNumber = Math.floor(Math.random() * 99);

const password = `${userName}${userLastName}${userFavColor}${randomNumber}`;

document.writeln(`La password generata è: ${password}`);
