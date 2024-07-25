/* Guess Game Program */

// define function newGame
function newGame() {
  // create a Boolean variable for again, set to true
  let again = true
  // create a Boolean variable for testing, set to true
  let testing = true
  // run the guess function, with testing as argument
  guessGame(testing);
  // loop as long as again is true 
  while (again == true) {
    // check the value of again to decide whether to play again.
    again = confirm("Play again?");
    if (again == true) guessGame();
    // set testing equal to false
    testing = false
    // close the loop
  }
  // thank the player for playing
  alert("Thank you for playing");
  // close the function
}
// create a function called guessGame, with testing as parameter
function guessGame(testing) {
  // create guess and set equal to 0 
  let guess = 0;
  // create tries and set equal to 0 
  let tries = 0;
  // create variable answer and generate a random integer 1-100
  var answer = Math.floor(Math.random() * 100 + 1);
  // display the integer for testing purposes only
  if (testing == true) alert(answer);
  // loop while guess is not equal to answer
  while (guess != answer) {
    // set guess equal to asking user to "Guess a number, 1-100"
    guess = prompt("Guess a number, 1-100");
    // add one to tries
    tries++;
    // if guess equals answer display "Correct in [tries] tries!" 
    if (guess == answer) alert("Correct in " + tries + " tries!");
    // or if guess is greater than answer display "Too high!" 
    else if (guess > answer) alert("Too high!");
    // or if guess is less than answer display "Too low!" 
    else if (guess < answer) alert("Too low!");
    // if it's none of those, say "Bad Input!"
    else alert("Bad input");
    // end the loop
  }
  // end the function
}