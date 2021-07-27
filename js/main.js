// 1a - Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.

var numBombs = 16;
var nMaxRange = 20;
var nMinRange = 1;
var listComputer = [];

// 1b - I numeri non possono essere duplicati.
var i = 0;
while(listComputer.length < numBombs) {
    var numReturn = numRandomComputer(nMaxRange,nMinRange);
    if (listComputer.includes(numReturn) == false) {
        listComputer.push(numReturn);
    }
}
console.log(listComputer);

/* 2a - In seguito deve chiedere all’utente n-volte di inserire un numero compreso tra 1 e 100.
Il numero inseriro: 
A) Non può essere ripetuto
B) Non deve essere uguale a quello inserito nella lista Computer
C) Può ciclare fintantochè non si verificano le due condizioni precedentemente elencate
*/
var numMaxAttempts = nMaxRange - numBombs;
var listNumUser = [];

numAttempts(listNumUser,numMaxAttempts,listComputer);




//FUNZIONI
//Funzione numeri casuali
function numRandomComputer(max,min) {
    return Math.floor(Math.random()* (max - min) + min);
}
//Funzione inserimento numero con ripetizioni variabili 

function numAttempts(list,attemps,bombe) {
    var i = 0;
    while(list.length < attemps)  {
        console.log("sono qui");
        var numUser = parseInt(prompt("Inserisci un numero"));
        i++
        if (bombe.includes(numUser)) {
            alert("Hai perso");
            return;
        }
        if (list.includes(numUser) == false){
            list.push(numUser);
        } else {
            alert("Numero già inserito, cambia numero");
        }
        
    }
    return numUser;
}

console.log(listNumUser);