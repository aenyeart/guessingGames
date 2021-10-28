'use strict';

let userName; // global scope
while (!userName) { // catches all cases of no name input
  userName = prompt("Hey there! I'm Andrew. What is your name?");
  if (userName === null) {
    console.log("Oh, no worries. Bye!");
    alert("Oh, no worries. Bye!");
    break;
  } else if (userName) {
    console.log(`Thanks for dropping in, ${userName}! I heard you wanted to get to know me a little... I'll give you some info about me and then we'll play a guessing game!`);
    alert(`Thanks for dropping in, ${userName}! I heard you wanted to get to know me a little... I'll give you some info about me and then we'll play a guessing game!`);
  } else {
    console.log("Sorry, I didn't have my hearing aids in...");
    alert("Sorry, I didn't have my hearing aids in...");
  }
};

function guessingGame() {

  if (userName === null) { // assigns a name in case user cancelled/didn't enter a name
    userName = `so-and-so`;
  };
  
  let userAnswer; // local scope 
  let feedbackString = '';
  const questionArray = [ // array of objects to avoid nested loops
    {
      question: `DO I HAVE ANY PETS?  (Y/N)`,
      answer: 'Y',
      info: `I have one cat named 'Cynar' (CHEE-nar). I adopted him in May 2021. He is named after of one of my favorite bittersweet Italian liqueurs. Unlike the liqueur, MY Cynar is only sweet.`
    },
    {
      question: `DO I LIVE ON THE EAST COAST?  (Y/N)`,
      answer: 'N',
      info: `I live on the WEST Coast, in Seattle, Washington. (I did live in Georgia for five years, though.)`
    },
    {
      question: `AM I CLEVER?  (Y/N)`,
      answer: "SUBJECTIVE",
      info: `That was a trick question. Cleverness is subjective and relative, just like beauty and meaning, so whether you think I am clever or you don't, you are correct either way.`
    },
    {
      question: `DO I WORK ON CARS FOR FUN?  (Y/N)`,
      answer: 'N',
      info: `I don't work on cars for fun. I currently enjoy training my cat Cynar, strength training, and DIY home improvement projects for my small studio.`
    },
    {
      question: `Last question! AM I AN ALGORITHM?  (Y/N)`,
      answer: 'Y',
      info: `From a materialistic lens, ALL of our minds are nothing but algorithms. And if our minds are WHO we are, then we are ALL algorithms. The upshot of this is that every impression we form of another person is literally an approximated model of THAT person's algorithms--their mind--that we have constructed and stored in our OWN mind! So, even after we physically die, as long as someone somewhere is alive and capable of thinking, 'If ${userName} were here, they would totally say/do/think such-and-such right now!', there is certainly a part of YOU that lives on in a conscious mind despite your body's death.`
    }
  ];

  for (let i = 0; i < questionArray.length; i++) {
    userAnswer = prompt(questionArray[i].question); 
    userAnswer = userAnswer.toUpperCase();
    if (userAnswer === questionArray[i].answer || questionArray[i].answer === "SUBJECTIVE") { // userAnswer is correct 
      feedbackString = "Correct! ";
    } else if (userAnswer === null) {
      break; // cancel button
    } else { // userAnswer is wrong or invalid
      feedbackString = "Incorrect! ";
    }
    feedbackString += questionArray[i].info; // fact about me
    console.log(feedbackString);
    alert(feedbackString); // displays the compiled feedback message to user
  };
  console.log(`Thanks for taking some time to get to know me better, ${userName}!`);
  alert(`Thanks for taking some time to get to know me better, ${userName}!`);
};

document.getElementById("start").addEventListener("click", guessingGame);

// INCOMPLETE, need to add CSS styling for all elements, etc.
