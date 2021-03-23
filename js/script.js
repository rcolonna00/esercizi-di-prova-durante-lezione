// esercizio 1
//far inserire 10 numeri all'utente 
//e sommarli alla fine
// var somma = 0;
// for ( var i = 0; i < 10; i++ ){
//     // console.log(i)
//     var numero = parseInt( prompt( 'Dimmi un numero' ) );
//     console.log(numero);

//     somma = somma + numero;
//     console.log(somma)
// }

// alert(somma);

//esercizio 2
//aggiungere dei 6 numeri che inserirà l'utente
//solo i numeri dispari al mioArray
var mioArray = [];

for ( var i = 0; i < 6; i++ ){
    //console.log(i);
    var numero = parseInt( prompt( 'Dimmi un numero' ) );
    //console.log(numero);
    if ( numero % 2 != 0 ){
        mioArray.push(numero)
    }
    console.log(mioArray);
}

console.log(mioArray);
alert('i numeri dispari che hai inserito sono ' + mioArray)