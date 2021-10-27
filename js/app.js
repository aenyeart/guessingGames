'use strict';

let userName;
while (!userName) {
  userName = prompt("Hey there! I'm Andrew. What is your name?");
  if (userName === null) {
    alert("Oh, no worries. Bye!");
    break;
  }
  if (userName) {
    alert(`Thanks for dropping in, ${userName}! I heard you wanted to get to know me a little... I'll give you some info about me and then we'll play a guessing game!`);
  } else alert("Sorry, I didn't have my hearing aids in..."); 
};

function guessingGame() {
  let answer1 = prompt(`DO I HAVE ANY PETS?
  (Y/N)`);
  alert(``);
  let answer2 = prompt(`DO I LIVE ON THE EAST COAST? (Y/N)`);
  alert(``);
  let answer3 = prompt(`AM I CLEVER? (Y/N)`);
  alert(``);
  let answer4 = prompt(`DO I WORK ON CARS FOR FUN? (Y/N)`);
  alert(``);
  let answer5 = prompt(`Last question! AM I AN ALGORITHM? (Y/N)`);
  alert(``);
}
document.getElementById("start").addEventListener("click", guessingGame());

// INCOMPLETE, need to add answer evaluation and responses, CSS styling for all elements, etc.
