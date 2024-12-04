const names =["Guadalupe", "Ollie", "Aki"]
let thankYouCards = []
function writeCards(names ,surprise){
    for (let i = 0; i < names.length; i++) {
     thankYouCards.push (`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
    }
    return thankYouCards;
}

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
        }
        console.log(startingNumber);  
}
      