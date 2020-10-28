// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var mine = [];
var controllo = true;
var vince, perde;
var numeriUte = [];

  // faccio un ciclo for da 1 a 16
  for (var i = 0; i < 16; i++) {
    // il ciclo while si ripete finche' non viene generato un numero random non presente nell'array
    while (controllo) {
      // genero dei numeri tra 1 e 100
      random = Math.floor(Math.random() * 100) + 1;
      // richiamo la mia funzione per cercare i numeri doppi
      controllo = ricerca(random, mine);
    }

    // salvo random nell'array
    mine.push(random);
    controllo = true;
  }
  console.log(mine);


  // faccio un ciclo che mi generi un prompt (max 100 - 16 volte)
  vince = 1;
  perde = true;
  controllo = true;
  while ((vince <= 84) && perde) {
    // l'utente inserisce un numero e controllo che non sia gia' stato inserito
    while (controllo) {
      var input = parseInt(prompt("inserisci un numero da 1 a 100"));
      controllo = ricerca(input, numeriUte);
      // controllo se il numero inserito dall'utente e' presente nell'array mine
      perde = !ricerca(input, mine);
    }

    if (perde) {
      // se perde, vince non viene incrementato
      vince++;

      // faccio un array che tiene traccia dei numeri inseriti dall'utente
      numeriUte.push(input);
      controllo = true;
    }
  }
  console.log(numeriUte);

// OUTPUT
  // se il numero in input e' presente in mine la partita termina e stampo "hai perso"
  if (perde === false) {
    console.log("hai perso");
  // altrimenti stampo "vittoria"
  } else {
    console.log("hai vintoooo!");
  }
  // salvo il punteggio ottenuto dall'utente
  console.log("il tuo punteggio e' ", numeriUte.length);


  // FUNZIONI
  function ricerca(numero, array){
    return array.includes(numero);
  }
