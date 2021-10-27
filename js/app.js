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

document.getElementById("start").addEventListener("click", ()=>{
  let answer1 = prompt(`?`);
  alert(``);
  let answer2 = prompt(``);
  alert(``);
  let answer3 = prompt(``);
  alert(``);
  let answer4 = prompt(``);
  alert(``);
  let answer5 = prompt(`One more question. ...?`);
  alert(``);
});
// INCOMPLETE, need to add answer evaluation and responses, CSS styling for all elements, etc.
