'use strict';

let userName; // global scope
getUserName();

function guessingGame() { // called by eventListener on button
  let score = 0;
  aboutMeGuessing();
  numberGuessing();
  nameGuessing();
  alert(`Thanks for taking some time to get to know me better, ${userName}! Your final score was ${score} out of 7!`);

  // questions 1-5
  function aboutMeGuessing() {
    if (userName === null) { // assigns a name if user canceled/didn't enter a name
      userName = `so-and-so`;
    }
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
        score++;
        console.log(`Correct answer. Current Score: ${score}/7`);
      } else if (userAnswer === null) {
        break; // cancel button
      } else { // userAnswer is wrong or invalid
        feedbackString = "Incorrect! ";
      }
      feedbackString += questionArray[i].info + ` Current Score: ${score}/7`; // concats fact about me
      console.log(feedbackString, `Current Score: ${score}/7`);
      alert(feedbackString); // displays the compiled feedback message to user
    }
  } // END of aboutMeGuessing()

  // question 6
  function numberGuessing() {
    let randomNum = Math.floor((Math.random() * 100) + 1);
    for (let i = 4; i > 0; i--) {
      let numGuess = prompt(`I'M THINKING OF A NUMBER BETWEEN 1 AND 100... Take a guess! You've got ${i} tries.`);
      numGuess = parseInt(numGuess);
      if (numGuess === randomNum) {
        score++;
        console.log(`Correct number guess. Current Score: ${score}/7`);
        alert(`That's CORRECT! Great job! Current Score: ${score}/7`);
        console.log(score);
        break;
      }
      if (numGuess > randomNum) alert(`Hmm, that's too high.`);
      if (numGuess < randomNum) alert(`Bummer. That's too low!`);
      if (i === 1) alert(`Sorry, you're all out of guesses! The correct number was ${randomNum}.`);
    }
  } // END of numberGuessing()
  
  // question 7
  function nameGuessing() {
    const nameArray = [
      "RACHEL",
      "JUDY",
      "SARAH",
      "CATHY",
      "DOUG"
    ];

    for (let i = 6; i > 0; i--) { // iterates through guesses

      let correctName = false;
      let nameGuess = prompt(`I have three sisters, a mother, and a father all with common names. 
    Can you guess one of their names in ${i} tries? (Only guess ONE name at a time.)`);
      nameGuess = nameGuess.toUpperCase();

      for (let i = 0; i < nameArray.length; i++) { // iterates through array 
        if (nameGuess === nameArray[i]) {
          alert(`That's CORRECT! Great job!`);
          score++;
          correctName = true;
          break; // breaks inner loop
        }
      }
      if (correctName) break; // breaks outer loop
      alert(`Sorry! Nobody with the name ${nameGuess} in my family!`);
      if (i === 1) alert(`Bummer, you're all out of guesses!`);
    }
    alert(`My family's names are ${nameArray}.`) 
  } // END of nameGuessing()

} // END of guessingGame()

function getUserName() { // catches all cases of no name input
  while (!userName) {
    userName = prompt("Hey there! I'm Andrew. What is your name?");
    if (userName === null) {
      alert("Oh, no worries. Bye!");
      break;
    } else if (userName) {
      alert(`Thanks for dropping in, ${userName}! I heard you wanted to get to know me a little... I'll give you some info about me and then we'll play a guessing game!`);
    } else {
      alert("Sorry, I didn't have my hearing aids in...");
    }
  }
} // END of getUserName()

document.getElementById("start").addEventListener("click", guessingGame);