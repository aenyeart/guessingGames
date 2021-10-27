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
// console.log("userName", userName, typeof(userName));






// let resultFromTypeOf = typeof(someData);
// console.log(resultFromTypeOf);