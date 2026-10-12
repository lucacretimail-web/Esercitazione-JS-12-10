/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const NOME = 'Mario';
const COGNOME = 'Rossi';
console.log(`Ciao, mi chiamo ${NOME} ${COGNOME}`);


/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const a = 10;
const b = 3;

console.log(`${a} + ${b} = ${a + b}`);   // Somma
console.log(`${a} - ${b} = ${a - b}`);   // Differenza
console.log(`${a} * ${b} = ${a * b}`);   // Prodotto
console.log(`${a} / ${b} = ${a / b}`);   // Divisione
console.log(`${a} % ${b} = ${a % b}`);   // Resto (Modo)
console.log(`${a} ** ${b} = ${a ** b}`); // Elevamento a potenza

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//definizione delle costanti
const annoNascita = 1995;
const annoCorrente = 2026;

//Calcolo delle età
const etaOggi = annoCorrente - annoNascita;
const etaTra10Anni = etaOggi + 10
const eta5AnniFa = etaOggi - 5

//Stampa dei risultati
console.log(`Oggi hai ${etaOggi} anni`);
console.log(`Tra 10 anni avrai ${etaTra10Anni} anni.`);
console.log(`5 anni fa avevi ${eta5AnniFa} anni.`);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let eta;
eta = 18;
const maggioreEta = eta >= 18;
console.log(`Età: ${eta} — Maggiorenne: ${maggiorenne}`);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myString = 'Pippo';
let myNumber = 12;
let myBoolean = true;
let myUndefined;
let myNull = null;

console.log(`La variabile ${myString} è di tipo ${typeof myString}`);
console.log(`La variabile ${myNumber} è di tipo ${typeof myNumber}`);
console.log(`La variabile ${myBoolean} è di tipo ${typeof myBoolean}`);
console.log(`La variabile ${myUndefined} è di tipo ${typeof myUndefined}`);
console.log(`La variabile ${myNull} è di tipo ${typeof myNull}`);

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 5
const stringa = "5"

console.log(`numero == stringa: ${numero == stringa}`); // il doppio uguale controlla il valore
console.log(`numero === stringa: ${numero === stringa}`); // il triplo controlla valore e tipo

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n;
n = 28;
console.log(`n è pari: ${n % 2 === 0}`);
console.log(`n è divisibile per 3: ${n % 3 === 0}`);
console.log(`n è pari e divisibile per 3: ${n % 2 === 0 && n % 3 === 0}`);


/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
