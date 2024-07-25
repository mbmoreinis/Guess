// Create a global variable called turns, set it equal to 0
var turns = 0
/* Define a function called rollDice */
function rollDice() {
  // create a variable called roll, set it equal to random 1-6
  let roll = Math.floor(Math.random() * 6 + 1);

  // add 1 to turns
  turns++;
  // if roll equals 6, display "6! You won in [turns] turns."
  if (roll == 6) alert("6! You won in " + turns + " turns.");
  // otherwise:
  else {
    // use a confirm and say: "You rolled a [roll]"
    confirm("You rolled a " + roll);
    // then call rollDice again.
    rollDice();
    // close the else block
  }
  // close the function block
}