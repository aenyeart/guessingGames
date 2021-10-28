'use strict';

// let userName; // global scope
// while (userName === undefined) {
//   userName = prompt("Hey there! I'm Andrew. What is your name?");
//   if (userName === null) {
//     alert("Oh, no worries. Bye!");
//     break;
//   } else if (userName) {
//     alert(`Thanks for dropping in, ${userName}! I heard you wanted to get to know me a little... I'll give you some info about me and then we'll play a guessing game!`);
//   } else {
//     alert("Sorry, I didn't have my hearing aids in...");
//   }
// };
 
function guessingGame() {

  let usrAnswer; 
  let feedbackString = ''; 
  const questionArray = [
    {
      question: `DO I HAVE ANY PETS?  (Y/N)`,
      answer: 'Y',
      info: `I have one cat named 'Cynar' (CHEE-nar). I adopted him in May 2021. He is named after of one of my favorite bittersweet Italian liqueurs. Unlike the liqueur, MY Cynar is only sweet.`
    }
    {
      question: `DO I LIVE ON THE EAST COAST?  (Y/N)`,
      answer: 'N',
      info: `I live on the WEST Coast, in Seattle, Washington. (I did live in Georgia for five years, though.)`
    }
    {
      question: `AM I CLEVER?  (Y/N)`,
      answer: undefined,
      info: `That was a trick question. Cleverness is subjective and relative, just like beauty and meaning, so whether you think I am clever or you don't, you are correct either way.`
    }
    {
      question: `DO I WORK ON CARS FOR FUN?  (Y/N)`,
      answer: 'N',
      info:  `I don't work on cars for fun. I currently enjoy training my cat Cynar, strength training, and DIY home improvement projects for my small studio.`
    }
    {
      question: `Last question! AM I AN ALGORITHM?  (Y/N)`,
      answer: 'Y',
      info: `From a materialistic lens, ALL of our minds are nothing but algorithms. And if our minds are WHO we are, then we are ALL algorithms. The upshot of this is that every impression we form of another person is literally an approximated model of THAT person's algorithms that we have assembled in our mind! So, even after we physically die, as long as someone somewhere is alive and capable of thinking, 'If ${userName} were here, they would totally say/do/think _____ right now!', there is certainly a part of YOU that lives on despite your body's death.`
    }
  ];

  usrAnswer = prompt(); // local scope 
  usrAnswer = usrAnswer.toUpperCase();
  if (usrAnswer === 'Y' || usrAnswer === 'YES') { // usrAnswer is correct 
    feedbackString = "Correct! ";
  } else { // usrAnswer is wrong or invalid
    feedbackString = "Nope! ";
  } 
  feedbackString += ""; // fact about me
  alert(feedbackString); // displays the compiled feedback message to user

  // usrAnswer = prompt(`DO I LIVE ON THE EAST COAST?  (Y/N)`);
  // usrAnswer = prompt(`AM I CLEVER?  (Y/N)`);
  // usrAnswer = prompt(`DO I WORK ON CARS FOR FUN?  (Y/N)`);
  // usrAnswer = prompt(`Last question! AM I AN ALGORITHM?  (Y/N)`);


};

document.getElementById("start").addEventListener("click", guessingGame);
// INCOMPLETE, need to add answer evaluation and responses, CSS styling for all elements, etc.
