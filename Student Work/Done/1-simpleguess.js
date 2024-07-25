/* Simple Guess Program */

// define function guess
function guess() {
// create a variable called answer and store a random integer 1-100
let answer = Math.floor(Math.random() * 100 + 1);
// display the integer for testing purposes only
alert(answer);
// set guess equal to prompt asking user to "Guess a number, 1-100"
guess = prompt("Guess a number, 1-100");
// if guess equals answer display "Correct!" 
if (guess == answer) alert("Correct!");
// or if guess is greater than answer create a code block
else if (guess > answer) {
// display "Too high!" 
alert("Too high");
// call guess
guess();
// close the else code block
}
// otherwise open a code block
else {
// display "Too low!" 
alert("Too Low!");
// call guess
guess();
// close the else code block
}
// end the function
}