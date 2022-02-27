// Code your solutions in this file
function writeCards (names, event) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        let message = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        newArray.push(message);
}
return newArray; }

writeCards([ "Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(){
    let number = 10; 
    while (number >= 0){
        console.log(number--);
    }
}
countDown(10);