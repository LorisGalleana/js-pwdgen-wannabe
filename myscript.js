
function myFunction() {
    /* chiedo il nome all'utente */
    let userName = prompt("Inserisci il tuo nome");
    /* chiedo il cognome all'utente */
    let userLastName = prompt("Inserisci il tuo cognome");
    /* chiedo il colore preferito all'utente */
    let favouriteColor = prompt("Inserisci il tuo colore preferito")

    /* unisco i tre prompt e aggiungo il numero 23 */
    let risultato = userName + userLastName + favouriteColor + 23;

    /* controllo nella console che il codice funzioni */
    console.log("La tua password è: " + risultato);
    
    /* inserisco il risultato all'interno dell'HTML */
    document.getElementById("hide").style.display = "none";
    document.getElementById("myCode").innerHTML = risultato;
}