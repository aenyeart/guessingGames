'use strict';

let userName;
while (!userName) {
  userName = prompt("Hey there! I'm Andrew. What is your name?");
  if (userName === null) {
    alert("Oh, no worries. Bye!");
    break;
  }
  if (userName) {
    alert(`Thanks for dropping in, ${userName}!`);
  } else alert("Sorry, I didn't have my hearing aids in..."); 

};
console.log("userName", userName, typeof(userName));




// let resultFromTypeOf = typeof(someData);
// console.log(resultFromTypeOf);