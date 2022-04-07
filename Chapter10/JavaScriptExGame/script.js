// // var a = Math.random() * 101;
// a = Math.floor(a);


// 1-set up phase
var answer = Math.random() * 101;
answer = Math.floor(answer);
userWins = false;
var attempts = 0;
var attemptWord = "";

// 2-start the game logic > loop
while (userWins != true) {

  // Get a user input (inside your input insert a number)
  var guess = window.prompt("Enter a number between 1 and 100: ");

  // Check the user input meaning number not a string
  try{
       var guess_number = Number(guess);
    }
  //   error message
  except{
      console.log("Error: You need to enter a valid number! ");
      quit();
    }
        
  // Increase the attempt count
     attempts += 1


  // Check the user answer against the secret_number
  if guessNumber == answer{
      userWins = true;
    }
  else if guessNumber > answer{
       console.log("The secret number is smaller!");
    } else{
        console.log("The secret number is bigger!");  
    }

// 3-get the spelling of the "attempt" word
if attempts == "1") {
    var attemptWord = " attempt";
} else{
    var attemptWord = " attempts";
}
console.log(i.toString()) + attempt;
attemptWord = attempt + 1;

// 4-display the result.
console.log("You won!!! It took " + attempts.toString() + attemptWord);
