// Code your solutions in this file
const names = ["Glenn", "Kamau", "Mwangi"]
let eventName;

function writeCards(names, eventName) {
    let customMessage = [];
    for (let x=0; x<names.length; x++){
        let message =`Thank you, ${names[x]}, for the wonderful ${eventName} gift!`;
        customMessage.push(message);
    }
    return customMessage;
}
writeCards(names, 'surprise');

function countDown(num) {
    while (num>=0) {
        console.log(num);
        num -=1;
    }
}
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      debugger;
    }
  
    return gifts;
  }
  
  wrapGifts(gifts); */ 