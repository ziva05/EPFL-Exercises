// // var a = Math.random() * 101;
// a = Math.floor(a);


// 1-set up phase
var answer = "";
var guessNumber = Math.random() * 101;
guessNumber = Math.floor(guessNumber);
var userWins = false;
var attempts = 0;
var attemptWord = "";

// 2-start the game logic > loop
while (userWins != true) {

  // Get a user input (inside your input insert a number)
  answer = window.prompt("Enter a number between 1 and 100: ");

  // Check the user input meaning number not a string
  try{
       answer = Number(answer)
    }
  //   error message
  catch{
      console.log("Error: You need to enter a valid number! ");
      break;
    }
        
  // Increase the attempt count
     attempts += 1


  // Check the user answer against the secret_number
  if (guessNumber == answer){
      userWins = true;
  }
  else if (guessNumber > answer){
      console.log("The secret number is bigger!");
  } else{
      console.log("The secret number is smaller!");  
  }
}

// 3-get the spelling of the "attempt" word
if (attempts == 1) {
    attemptWord = " attempt";
} else{
    attemptWord = " attempts";
}

// 4-display the result.
console.log("You won!!! It took " + attempts.toString() + attemptWord);
