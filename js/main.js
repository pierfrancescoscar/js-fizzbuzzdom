// Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

// Ref

const fizzBoxes = document.querySelector('.fizzBoxes');

// Creazione ciclo da 1 a 100

for (let i=1; i <= 100; i++) {

    // Diversi stili per multipli di 5 e 3, multipli di 3, multipli di 5

    // Styling se è sia multiplo di 3 e sia multiplo di 5
    if (i % 3 == 0 && i % 5 == 0) {
        fizzBoxes.innerHTML += `<div class="fizzBox fizzBox-${i} fizzbuzz">fizzbuzz</div>`;
    }
    // Styling se è multiplo di 3
    else if (i % 3 == 0) {
        fizzBoxes.innerHTML += `<div class="fizzBox fizzBox-${i} fizz">fizz</div>`;
        }
    // Styling se è multiplo di 5
    else if (i % 5 == 0) {
        fizzBoxes.innerHTML += `<div class="fizzBox fizzBox-${i} buzz">buzz</div>`;
        }
    // Styling se non è nè multiplo di 3, nè multiplo di 5, nè multiplo di entrambi
    else {
        fizzBoxes.innerHTML += `<div class="fizzBox fizzBox-${i} defaultBox">${i}</div>`;
    }
}

   



