/*Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all utente di inserire un numero da 1 a 100 alla volta,
se il numero è presente nella lista dei numeri generati,
la partita termina, altrimenti continua, chiedendo all utente un altro numero.

La partita termina quando il giocatore inserisce il numero "vietato" 
o raggiungere il numero massimo possibile di numeri consentiti.

Al termine della partita, il software deve comunicare il punteggio, cioè il numero di volte che l utente ha inserito 
il numero consentito

All inizio, il software chiede una difficoltà all utente, che cambia il range di numeri casuali.
Con difficoltà 0 -> da 1 a 100
con difficoltà 1 -> da 1 a 80
cons difficoltà 2 -> da 1 a 50*/ 



let difficolta = parseInt(prompt("Scegli una difficoltà (0,1,2)"));
let max;

if (difficolta === 0) {

    max = 100
} else if (difficolta === 1) {
    max = 80
}else if (difficolta === 2){

    max=50
}

let numVietati = [];

// generazione 16 numeri casuali da 1 a max

while(numVietati.length < 16) {
let numero = Math.floor(Math.random()*max) +1;
    if(!numVietati.includes(numero)){
    numVietati.push(numero);
console.log(numVietati)};
    
}

let tentativi = []; // array numeri utenti

// variabile booleana per fine partita in caso di numero vietato
let GameOver = false

while (!GameOver && tentativi.length < max -16)  {


    let input = parseInt(prompt(`Inserisci un numero da 1 a ${max}`));

if (numVietati.includes(input)) {

    GameOver = true;
    console.log("hai perso")
}else if (!tentativi.includes(tentativi)){
    tentativi.push(input)
}else {
console.log("hai vinto")
}


}

console.log("punteggio: ", tentativi.length)


