'use strict';

let userName; // global scope
while (userName === undefined) {
  userName = prompt("Hey there! I'm Andrew. What is your name?");
  if (userName === null) {
    alert("Oh, no worries. Bye!");
    break;
  } else if (userName) {
    alert(`Thanks for dropping in, ${userName}! I heard you wanted to get to know me a little... I'll give you some info about me and then we'll play a guessing game!`);
  } else {
    alert("Sorry, I didn't have my hearing aids in...");
  }
};

function guessingGame() {
  //  I want SO BAD to write this with arrays, loops, helper functions, etc. It's challenging to tune out my thoughts about edge cases in order to write it in a simpler, but less elegant way.
  let feedback = ''; // Placeholder for building a string to respond to user's answer
  let usrAnswer = prompt(`DO I HAVE ANY PETS?  (Y/N)`); // local scope 
  usrAnswer = usrAnswer.toUpperCase;
  if (usrAnswer === 'Y' || usrAnswer === 'YES') { // usrAnswer is correct 
    feedback = "Correct! ";
  } else { // usrAnswer is wrong or invalid
    feedback = "Nope! ";
    
  } 
  feedback += ""; // fact about me
  alert(feedback); // displays the compiled feedback message to user

  
  usrAnswer = prompt(`DO I LIVE ON THE EAST COAST?  (Y/N)`);
  if () { 
    alert(``);
  } else () {
    alert(``);
  };

  usrAnswer = prompt(`AM I CLEVER?  (Y/N)`);
  if () { 
    alert(``);
  } else () {
    alert(``);
  };

  usrAnswer = prompt(`DO I WORK ON CARS FOR FUN?  (Y/N)`);
  if () { 
    alert(``);
  } else () {
    alert(``);
  };

  usrAnswer = prompt(`Last question! AM I AN ALGORITHM?  (Y/N)`);
  if () { 
    alert(``);
  } else () {
    alert(``);
  };
}
document.getElementById("start").addEventListener("click", guessingGame());

// INCOMPLETE, need to add answer evaluation and responses, CSS styling for all elements, etc.
