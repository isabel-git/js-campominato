// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var mine = [];
var controllo = 1;

// CREAZIONE ARRAY MINE (numeri randomici)
  var random = Math.floor(Math.random() * 100) + 1;
  mine.push(random);

  // faccio un ciclo for da 1 a 16
  for (var i = 0; i < 15; i++) {
    // il ciclo while si ripete finche' non viene generato un numero random non presente nell'array
    while (controllo) {
      // genero dei numeri tra 1 e 100
      random = Math.floor(Math.random() * 100) + 1;
      var boolean = mine.includes(random);
      if (boolean === false) {
        controllo = 0;
      }
    }

    // salvo random nell'array
    mine.push(random);
    controllo = 1;
  }
  console.log(mine);



// INPUT
  // faccio un ciclo che mi generi un prompt (max 100 - 16 volte)

// CREAZIONE ARRAY UTENTE
  // faccio un array che tiene traccia dei numeri inseriti dall'utente

  // controllo che il numero inserito non sia presente nell'array
  // se presente stampo errore e richiedo nuovamente il numero

  // controllo se il numero inserito dall'utente e' presente nell'array mine
  // se presente la partita termina e stampo hai perso
  // altrimenti continua e salva il punteggio

  // se l'utente non inserisce un numero vietato 84 volte stampo "vittoria"
