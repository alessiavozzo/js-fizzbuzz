# Esercizio:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

# BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

# BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## STEPS
- Step 1: Stampare i numeri (n) da 1 a 100 in console
    - SE n % 3 = 0
        - Stampare "Fizz" al posto del numero
    - SE n % 5 = 0
        - Stampare "Buzz" al posto del numero
    - SE n % 3 = 0 && n % 5 = 0
        - Stampare "FizzBuzz" al posto del numero
    - ALTRIMENTI 
        - Lasciare il numero stampato

- Step 2: Stampare il risultato nel DOM
    - Creare container/ul
    - Aggiungere elementi con append

- Step 3: Layout carino

### Tools
- console.log
- for
- if/else if/else
- %
- append
- html/css/bootstrap